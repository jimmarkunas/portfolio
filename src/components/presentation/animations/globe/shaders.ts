/**
 * WebGL Shaders for Globe Particles and Routes
 * Exact mathematical recreation of delicate-lychee Framer shaders
 */

export const FIELD_VERTEX_SHADER = `
attribute float aSeed;
attribute float aCoast;

uniform float uTime;
uniform float uProgress;
uniform float uFormation;
uniform vec3  uSweepAxis;

uniform float uDotSize;
uniform float uSizeJitter;
uniform float uCoastLift;
uniform float uBackFade;
uniform float uSurfaceLit;

uniform float uCursorMode;
uniform vec3  uCursor;
uniform float uCursorGain;
uniform float uInteractionStrength;
uniform float uReach;
uniform float uWaveLength;
uniform float uWaveSpeed;
uniform float uCrest;
uniform float uSwell;
uniform float uGlow;
uniform vec3  uDrift;

varying float vHeat;
varying float vFade;
varying float vGrain;
varying float vPx;
varying float vLight;

float noise1(float s) {
    return fract(sin(s * 78.233 + 12.9898) * 43758.5453);
}

void main() {
    vec3 nrm = normalize(position);
    float rA = noise1(aSeed);
    float rB = noise1(aSeed + 4.77);
    float rC = noise1(aSeed + 9.13);

    // ---- entrance -------------------------------------------------
    // Every mode resolves to a radius, a lateral spread that closes as the
    // dot settles, and a birth fade, so they share one composition step.
    float radius = 1.0;
    float spread = 0.0;
    float born = 1.0;

    if (uFormation < 0.5) {
        // Sweep: a terminator crosses the sphere and the surface rises
        // behind it with a small overshoot.
        float key = 0.5 - 0.5 * dot(nrm, uSweepAxis);
        float t = clamp((uProgress - key * 0.72) / 0.28, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 3.0);
        radius = mix(0.82, 1.0, e) + sin(e * 3.14159) * 0.045;
        born = smoothstep(0.0, 0.35, t);
    } else if (uFormation < 1.5) {
        // Bloom: the shell grows out of the core.
        float t = clamp((uProgress - rA * 0.32) / 0.68, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 4.0);
        radius = e;
        born = smoothstep(0.0, 0.22, t);
    } else if (uFormation < 2.5) {
        // Fall: dots converge from a loose cloud outside the sphere.
        float t = clamp((uProgress - rA * 0.4) / 0.6, 0.0, 1.0);
        float e = 1.0 - pow(1.0 - t, 3.0);
        radius = mix(2.05, 1.0, e);
        spread = 0.85 * (1.0 - e);
        born = smoothstep(0.0, 0.2, t);
    } else if (uFormation < 3.5) {
        // Drift: the same arrival, restaged forever on a per-dot cycle.
        float cyc = fract(uTime * 0.055 + rA * 13.0);
        float arrive = 0.22;
        if (cyc < arrive) {
            float t = cyc / arrive;
            float e = 1.0 - pow(1.0 - t, 3.0);
            radius = mix(1.85, 1.0, e);
            spread = 0.75 * (1.0 - e);
            born = smoothstep(0.0, 0.3, t);
        } else {
            born = 1.0 - smoothstep(0.90, 1.0, cyc);
        }
        born *= smoothstep(0.0, 0.18, uProgress);
    } else {
        born = uProgress;
    }

    vec3 wander = normalize(vec3(rA, rB, rC) - 0.5);
    vec3 pos = normalize(nrm + wander * spread) * radius;

    // ---- cursor ---------------------------------------------------
    float heat = 0.0;
    float swell = 1.0;

    if (uCursorMode < 5.5 && uCursorGain > 0.002) {
        float ang = acos(clamp(dot(nrm, uCursor), -1.0, 1.0));
        float env = 1.0 - smoothstep(0.0, uReach, ang);
        env *= env;
        float amp = env * uCursorGain;

        if (uCursorMode < 0.5) {
            // Sonar: wavefronts leave the contact point and run outward
            // along the surface, lifting the shell as each crest passes.
            float wave = sin(
                ang / max(uWaveLength, 0.02) * 6.2831853
                - uTime * uWaveSpeed * 6.2831853
            );
            pos += nrm * wave * amp * uCrest;
            heat = max(0.0, wave) * amp;
            swell = 1.0 + max(0.0, wave) * amp * uSwell;
        } else if (uCursorMode < 1.5) {
            // Halo: light only, no displacement.
            float breathe = 0.78 + 0.22 * sin(uTime * 1.7);
            heat = amp * breathe;
            swell = 1.0 + heat * uSwell * 0.6;
        } else if (uCursorMode < 2.5) {
            // Wake: the surface is combed along the pointer's travel.
            vec3 tangent = uDrift - dot(uDrift, nrm) * nrm;
            pos += tangent * amp * uCrest * 8.0;
            heat = amp * clamp(length(uDrift) * 24.0, 0.0, 1.0);
            swell = 1.0 + heat * uSwell * 0.5;
        } else {
            vec3 contact = normalize(uCursor);
            vec3 tangentToContact = contact - nrm * dot(contact, nrm);
            float tangentLength = length(tangentToContact);
            if (tangentLength > 0.0001) {
                vec3 toward = tangentToContact / tangentLength;
                vec3 displacement = vec3(0.0);
                float physicsScale = amp * uInteractionStrength;
                if (uCursorMode < 3.5) {
                    displacement = -toward * physicsScale * uCrest * 2.0;
                } else if (uCursorMode < 4.5) {
                    displacement = toward * physicsScale * uCrest * 2.0;
                } else if (uCursorMode < 5.5) {
                    vec3 swirlDirection = cross(contact, nrm);
                    float swirlLength = length(swirlDirection);
                    if (swirlLength > 0.0001) {
                        displacement = (swirlDirection / swirlLength) * physicsScale * uCrest * 2.0;
                    }
                }
                pos = normalize(pos + displacement) * radius;
            }
        }
    }

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    // Coastal dots read a little heavier than deep interior ones, which keeps
    // the outlines legible as density drops.
    float shore = mix(1.0 + uCoastLift * 0.9, 1.0 - uCoastLift * 0.35, aCoast);
    float jitter = 1.0 + (rB - 0.5) * 2.0 * uSizeJitter;
    float breath = uSurfaceLit > 0.5 ? 1.0 : 0.88 + 0.12 * sin(uTime * 1.9 + rA * 21.0);

    gl_PointSize = max(
        0.0,
        uDotSize * jitter * shore * swell * breath * (2.0 / -mv.z)
    );
    vPx = gl_PointSize;

    vec3 rotatedNormal = normalize(normalMatrix * nrm);
    float facing = rotatedNormal.z;
    vFade = mix(uBackFade, 1.0, smoothstep(-0.22, 0.28, facing)) * born;
    vHeat = clamp(heat * uGlow, 0.0, 1.0);
    vGrain = 0.45 + 0.55 * rC;
    float directionalLight = max(dot(rotatedNormal, normalize(vec3(-0.38, 0.52, 0.76))), 0.0);
    vLight = clamp(0.16 + directionalLight * 0.84, 0.0, 1.0);
}
`;

export const FIELD_FRAGMENT_SHADER = `
uniform vec3  uInk;
uniform float uInkAlpha;
uniform vec3  uTint;
uniform float uSurfaceLit;
uniform vec3  uSurfaceShadow;
uniform vec3  uSurfaceDark;
uniform vec3  uSurfaceMid;
uniform vec3  uSurfaceLight;
uniform vec3  uSurfaceHot;
uniform float uSurfaceHotThreshold;

varying float vHeat;
varying float vFade;
varying float vGrain;
varying float vPx;
varying float vLight;

void main() {
    // Round dot with a one-pixel edge regardless of how large it is on screen.
    float r = length(gl_PointCoord - vec2(0.5));
    float edge = 1.2 / max(vPx, 1.0);
    float disc = 1.0 - smoothstep(0.5 - edge, 0.5, r);
    if (disc <= 0.0) discard;

    vec3 rgb = mix(uInk, uTint, vHeat);
    if (uSurfaceLit > 0.5) {
        float lit = clamp(vLight * mix(0.9, 1.1, vGrain), 0.0, 1.0);
        rgb = mix(uSurfaceShadow, uSurfaceDark, smoothstep(0.08, 0.42, lit));
        rgb = mix(rgb, uSurfaceMid, smoothstep(0.30, 0.62, lit));
        rgb = mix(rgb, uSurfaceLight, smoothstep(0.58, 0.88, lit));
        rgb = mix(rgb, uSurfaceHot, smoothstep(uSurfaceHotThreshold, 1.0, lit));
    }
    float a = disc * uInkAlpha * vGrain * vFade * (1.0 + vHeat * 0.85);
    gl_FragColor = vec4(rgb, clamp(a, 0.0, 1.0));
}
`;

export const PBDS_ATMOSPHERE_VERTEX_SHADER = `
varying vec3 vLocalNormal;
varying vec3 vViewNormal;

void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vLocalNormal = normalize(normal);
    vViewNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * viewPosition;
}
`;

export const PBDS_ATMOSPHERE_FRAGMENT_SHADER = `
uniform float uProgress;
varying vec3 vLocalNormal;
varying vec3 vViewNormal;

void main() {
    float viewFacing = abs(normalize(vViewNormal).z);
    float fresnel = pow(clamp(1.0 - viewFacing, 0.0, 1.0), 2.4);
    float directional = dot(normalize(vLocalNormal), normalize(vec3(-0.55, 0.35, 0.75)));
    directional = smoothstep(-0.4, 0.8, directional);
    float entrance = smoothstep(0.15, 0.9, uProgress);
    float heat = fresnel * mix(0.30, 1.0, directional) * entrance;
    vec3 outerColor = vec3(1.0, 0.1843, 0.6824);
    vec3 midColor = vec3(1.0, 0.3961, 0.7804);
    vec3 hotColor = vec3(1.0, 0.9686, 0.9882);
    vec3 color = mix(outerColor, midColor, smoothstep(0.08, 0.55, heat));
    color = mix(color, hotColor, smoothstep(0.65, 0.98, heat));
    gl_FragColor = vec4(color, heat * 0.72);
}
`;

export const ROUTE_DOTS_VERTEX_SHADER = `
attribute float aStep;
attribute float aOffset;

uniform float uTime;
uniform float uSpeed;
uniform float uTrail;
uniform float uSize;
uniform float uStyle;

varying float vComet;
varying float vFront;
varying float vPx;

void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;

    if (uStyle > 0.5) {
        // Beads: an evenly lit dotted trace with nothing travelling along it.
        vComet = 0.7;
    } else {
        // Comet: distance behind the travelling head, wrapped into 0..1.
        float head = fract(uTime * uSpeed + aOffset);
        float behind = head - aStep;
        if (behind < 0.0) behind += 1.0;
        vComet = pow(clamp(1.0 - behind / max(uTrail, 0.01), 0.0, 1.0), 2.5);
    }

    vFront = smoothstep(-0.05, 0.25, normalize(normalMatrix * normalize(position)).z);
    gl_PointSize = max(0.0, uSize * (0.8 + 1.0 * vComet) * (2.0 / -mv.z));
    vPx = gl_PointSize;
}
`;

export const ROUTE_DOTS_FRAGMENT_SHADER = `
uniform vec3  uColor;
uniform float uRest;
uniform float uProgress;

varying float vComet;
varying float vFront;
varying float vPx;

void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    float edge = 1.3 / max(vPx, 1.0);
    float disc = 1.0 - smoothstep(0.5 - edge, 0.5, r);
    if (disc <= 0.0) discard;

    float a = (uRest + vComet * (1.0 - uRest)) * disc * vFront * uProgress;
    gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0));
}
`;

export const ROUTE_LINE_VERTEX_SHADER = `
attribute vec3 aTangent;
attribute float aSide;
attribute float aStep;
attribute float aOffset;

uniform vec2 uResolution;
uniform float uWidth;

varying float vStep;
varying float vOffset;
varying float vFront;

void main() {
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 ahead = projectionMatrix * modelViewMatrix * vec4(position + aTangent * 0.01, 1.0);

    vec2 a = clip.xy / max(abs(clip.w), 0.0001);
    vec2 b = ahead.xy / max(abs(ahead.w), 0.0001);
    vec2 travel = (b - a) * uResolution;
    float len = length(travel);
    vec2 dir = len > 0.0001 ? travel / len : vec2(1.0, 0.0);
    vec2 perp = vec2(-dir.y, dir.x);

    // Half the stroke in pixels, converted to NDC and back into clip space.
    vec2 shift = perp * aSide * uWidth * 0.5 / (uResolution * 0.5);
    gl_Position = clip;
    gl_Position.xy += shift * clip.w;

    vStep = aStep;
    vOffset = aOffset;
    vFront = smoothstep(-0.05, 0.25, normalize(normalMatrix * normalize(position)).z);
}
`;

export const ROUTE_LINE_FRAGMENT_SHADER = `
uniform vec3  uColor;
uniform float uTime;
uniform float uSpeed;
uniform float uTrail;
uniform float uRest;
uniform float uProgress;
uniform float uStyle;
uniform float uDashCount;

varying float vStep;
varying float vOffset;
varying float vFront;

void main() {
    float a;
    if (uStyle < 0.5) {
        // Solid.
        a = uRest;
    } else if (uStyle < 1.5) {
        // Dashed, drifting along the path at the flow speed.
        float d = fract(vStep * uDashCount - uTime * uSpeed);
        if (d > 0.55) discard;
        a = uRest;
    } else {
        // Pulse: a lit head running along a resting line.
        float head = fract(uTime * uSpeed + vOffset);
        float behind = head - vStep;
        if (behind < 0.0) behind += 1.0;
        float comet = pow(clamp(1.0 - behind / max(uTrail, 0.01), 0.0, 1.0), 2.5);
        a = uRest + comet * (1.0 - uRest);
    }
    gl_FragColor = vec4(uColor, clamp(a * vFront * uProgress, 0.0, 1.0));
}
`;
