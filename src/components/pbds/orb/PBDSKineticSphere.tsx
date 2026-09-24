"use client";

import React, { useEffect, useMemo, useRef } from "react";

import type { PBDSKineticSphereProps } from "./orbTypes";

type RGB = { r: number; g: number; b: number };
type StippleDot = { bx:number; by:number; bz:number; x:number; y:number; z:number; vx:number; vy:number; vz:number; baseSize:number; phase:number };
type Plasma = { angle:number; distFactor:number; size:number; alpha:number; speed:number; radialVelocity:number; life:number; maxLife:number };

function hexToRgb(hex:string, fallback:RGB):RGB {
  let c=hex.replace("#","").trim();
  if(c.length===3)c=c.split("").map(x=>x+x).join("");
  const n=parseInt(c,16); if(Number.isNaN(n)) return fallback;
  return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
}
function lerpRgb(a:RGB,b:RGB,t:number):RGB { const q=Math.max(0,Math.min(1,t)); return {r:Math.round(a.r+(b.r-a.r)*q),g:Math.round(a.g+(b.g-a.g)*q),b:Math.round(a.b+(b.b-a.b)*q)}; }

function drawAtmosphericLimb(ctx:CanvasRenderingContext2D,cx:number,cy:number,radius:number,lightAngle:number,strokeMode:"crescent"|"tapered"|"full"|"none",intensity:number,glowSpread:number,coreHotness:number,strokeWidth:number,innerWash:number,shadowOpacity:number,glowHex:string,glowRgb:string,rawRgb:RGB){
  if(intensity<=0||strokeMode==="none")return;
  ctx.save(); ctx.globalAlpha=1;
  const hot=lerpRgb(rawRgb,{r:255,g:255,b:255},coreHotness);
  const draw=(a0:number,a1:number,eff:number)=>{
    ctx.save();
    ctx.shadowColor=glowHex; ctx.shadowBlur=glowSpread*1.1; ctx.strokeStyle=`rgba(${glowRgb}, ${eff*.30})`; ctx.lineWidth=glowSpread*.65; ctx.beginPath(); ctx.arc(cx,cy,radius+glowSpread*.28,a0,a1); ctx.stroke();
    ctx.shadowBlur=glowSpread*.55; ctx.strokeStyle=`rgba(${glowRgb}, ${eff*.52})`; ctx.lineWidth=glowSpread*.32; ctx.beginPath(); ctx.arc(cx,cy,radius+glowSpread*.1,a0,a1); ctx.stroke();
    ctx.shadowBlur=10*intensity; ctx.strokeStyle=`rgba(${glowRgb}, ${eff*.78})`; ctx.lineWidth=Math.max(1.8,strokeWidth*2.2); ctx.beginPath(); ctx.arc(cx,cy,radius,a0,a1); ctx.stroke();
    ctx.shadowBlur=3*intensity; ctx.strokeStyle=`rgba(${hot.r}, ${hot.g}, ${hot.b}, ${eff*.98})`; ctx.lineWidth=strokeWidth; ctx.beginPath(); ctx.arc(cx,cy,radius,a0,a1); ctx.stroke();
    if(innerWash>0){ctx.shadowBlur=6*intensity;ctx.strokeStyle=`rgba(${glowRgb}, ${eff*.24*innerWash})`;ctx.lineWidth=glowSpread*.22;ctx.beginPath();ctx.arc(cx,cy,radius-glowSpread*.1,a0,a1);ctx.stroke();}
    ctx.restore();
  };
  if(strokeMode==="full"){draw(0,Math.PI*2,Math.min(1,intensity));}
  else { const segments=80,d=(Math.PI*2)/segments; for(let i=0;i<segments;i++){const a0=i*d,a1=a0+d+.015,mid=a0+d*.5,c=Math.cos(mid-lightAngle);let alpha=c>0?Math.pow(c,1.35):(strokeMode==="tapered"?Math.max(.04,shadowOpacity):shadowOpacity);if(alpha<=.005)continue;draw(a0,a1,Math.min(1,alpha*intensity));} }
  ctx.restore();
}

export const PBDSKineticSphere:React.FC<PBDSKineticSphereProps>=({
  radius=290,interactionMode="repel",interactionStrength=1,autoRotateSpeed=.0012,cropPosition="orb-right",skinStyle="canonical-magenta",accentColor,primaryDotColor="#FFFFFF",shadowDotColor,className="",interactive=true,plasmaNoiseIntensity=1,stippleDensity=8000,ambientLuminance=.38,glowingStrokeIntensity=1.4,glowSpread=28,coreHotness=.85,innerWashIntensity=.35,dotHarmonization="unified",strokeMode="crescent",strokeShadowOpacity=0,strokeWidth=1,bodyOpacity=0,
})=>{
  const canvasRef=useRef<HTMLCanvasElement|null>(null);
  const palette=useMemo(()=>{
    let active:string,fallback:RGB,shadow:string,bodyStart:string,bodyEnd:string;
    if(skinStyle==="obsidian-ice"){active=accentColor||"#38BDF8";fallback={r:56,g:189,b:248};shadow="#64748B";bodyStart="rgba(5, 9, 20, ";bodyEnd="rgba(12, 35, 60, ";}
    else if(skinStyle==="canonical-white"){active=accentColor||"#FFFFFF";fallback={r:230,g:240,b:255};shadow="#94A3B8";bodyStart="rgba(10, 13, 18, ";bodyEnd="rgba(51, 65, 85, ";}
    else if(skinStyle==="custom"){active=accentColor||"#38BDF8";fallback={r:56,g:189,b:248};shadow="#475569";bodyStart="rgba(8, 8, 12, ";bodyEnd=`rgba(${fallback.r}, ${fallback.g}, ${fallback.b}, `;}
    else {active=accentColor||"#FF2FAE";fallback={r:255,g:47,b:174};shadow="#C21882";bodyStart="rgba(10, 2, 8, ";bodyEnd="rgba(74, 6, 54, ";}
    const raw=hexToRgb(active,fallback),rgb=`${raw.r}, ${raw.g}, ${raw.b}`;
    return {glowHex:active,glowRgb:rgb,rawRgb:raw,highlightDot:primaryDotColor&&primaryDotColor!=="#FFFFFF"?primaryDotColor:active,midDot:active,shadowDot:shadowDotColor||shadow,plasmaRgb:rgb,bodyGradStart:bodyStart,bodyGradEnd:bodyEnd};
  },[skinStyle,accentColor,primaryDotColor,shadowDotColor]);

  const mouseRef=useRef({x:-9999,y:-9999,prevX:-9999,prevY:-9999,isHovered:false,isDragging:false});
  const rotationRef=useRef({rotX:.08,rotY:skinStyle==="canonical-magenta"?-.85:.85,velX:0,velY:0});
  const dotsRef=useRef<StippleDot[]>([]),plasmaRef=useRef<Plasma[]>([]);

  useEffect(()=>{
    const dots:StippleDot[]=[],gold=Math.PI*(3-Math.sqrt(5));
    // Start every dot on its rotated target (same transform as the render loop) so no spring-settling is visible.
    const {rotX,rotY}=rotationRef.current,sinX=Math.sin(rotX),cosX=Math.cos(rotX),sinY=Math.sin(rotY),cosY=Math.cos(rotY);
    for(let i=0;i<stippleDensity;i++){const y=1-(i/(stippleDensity-1))*2,ry=Math.sqrt(Math.max(0,1-y*y)),theta=gold*i,x=Math.cos(theta)*ry,z=Math.sin(theta)*ry,x1=x*cosY+z*sinY,z1=-x*sinY+z*cosY;dots.push({bx:x,by:y,bz:z,x:x1*radius,y:(y*cosX-z1*sinX)*radius,z:(y*sinX+z1*cosX)*radius,vx:0,vy:0,vz:0,baseSize:.65+Math.random()*.45,phase:Math.random()*Math.PI*2});}
    dotsRef.current=dots;
    const plasma:Plasma[]=[];for(let i=0;i<380;i++)plasma.push({angle:Math.random()*Math.PI*2,distFactor:1+Math.random()*.1,size:.5+Math.random()*1.1,alpha:.25+Math.random()*.75,speed:(Math.random()-.5)*.003,radialVelocity:.0005+Math.random()*.0016,life:Math.random()*100,maxLife:60+Math.random()*80});plasmaRef.current=plasma;
  },[radius,stippleDensity]);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;const ctx=canvas.getContext("2d",{alpha:true});if(!ctx)return;
    let animId=0,width=canvas.width=canvas.parentElement?.clientWidth||600,height=canvas.height=canvas.parentElement?.clientHeight||600,time=0;
    const resize=()=>{if(!canvas.parentElement)return;width=canvas.width=canvas.parentElement.clientWidth;height=canvas.height=canvas.parentElement.clientHeight;};window.addEventListener("resize",resize);
    const render=()=>{
      time+=.025;ctx.clearRect(0,0,width,height);
      let cx=width/2,cy=height/2;if(cropPosition==="orb-right"){cx=width+radius*.32;cy=height/2;}else if(cropPosition==="orb-left"){cx=-radius*.32;cy=height/2;}else if(cropPosition==="orb-horizon"){cx=width/2;cy=height+radius*.45;}
      const rot=rotationRef.current,mouse=mouseRef.current;if(!mouse.isDragging){rot.rotY+=autoRotateSpeed+rot.velY;rot.rotX+=rot.velX;rot.velX*=.92;rot.velY*=.92;}
      const sinX=Math.sin(rot.rotX),cosX=Math.cos(rot.rotX),sinY=Math.sin(rot.rotY),cosY=Math.cos(rot.rotY),glowRgb=palette.glowRgb,glowHex=palette.glowHex;
      if(bodyOpacity>0){ctx.save();ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);const g=ctx.createRadialGradient(cx,cy,0,cx,cy,radius);g.addColorStop(0,`${palette.bodyGradStart}${bodyOpacity})`);g.addColorStop(.85,`${palette.bodyGradStart}${Math.min(1,bodyOpacity*1.5)})`);g.addColorStop(1,`${palette.bodyGradEnd}${Math.min(1,bodyOpacity*2.2)})`);ctx.fillStyle=g;ctx.fill();ctx.restore();}
      ctx.save();for(const p of plasmaRef.current){p.life++;if(p.life>p.maxLife){p.life=0;p.distFactor=1.002+Math.random()*.02;}else p.distFactor+=p.radialVelocity*plasmaNoiseIntensity;p.angle+=p.speed;const noise=Math.sin(p.angle*12+time*3)*.015+Math.cos(p.angle*24-time*2)*.01,dist=radius*(p.distFactor+noise*plasmaNoiseIntensity),px=cx+Math.cos(p.angle)*dist,py=cy+Math.sin(p.angle)*dist,fade=Math.sin((p.life/p.maxLife)*Math.PI)*p.alpha;let bias=1;if(cropPosition==="orb-right")bias=Math.max(.12,-Math.cos(p.angle));else if(cropPosition==="orb-left")bias=Math.max(.12,Math.cos(p.angle));ctx.fillStyle=`rgba(${palette.plasmaRgb}, ${fade*bias*.85})`;ctx.beginPath();ctx.arc(px,py,p.size,0,Math.PI*2);ctx.fill();}ctx.restore();
      let lightX=-.92,lightY=-.15,lightZ=.35;if(cropPosition==="orb-left")lightX=.92;const ll=Math.sqrt(lightX*lightX+lightY*lightY+lightZ*lightZ);lightX/=ll;lightY/=ll;lightZ/=ll;
      const mouseRelX=mouse.x-cx,mouseRelY=mouse.y-cy,mouseDist=Math.sqrt(mouseRelX*mouseRelX+mouseRelY*mouseRelY),interactionRadius=radius*1.35;const visible:Array<{sx:number;sy:number;z:number;size:number;color:string;alpha:number}>=[];
      for(const p of dotsRef.current){const x1=p.bx*cosY+p.bz*sinY,z1=-p.bx*sinY+p.bz*cosY,y1=p.by*cosX-z1*sinX,nz=p.by*sinX+z1*cosX,nx=x1,ny=y1,nDotL=nx*lightX+ny*lightY+nz*lightZ,effective=Math.max(0,nDotL)+ambientLuminance*.45,tx=nx*radius,ty=ny*radius,tz=nz*radius;
        // Undrawn (back-facing / unlit) dots track their targets, so they re-enter view in place instead of springing in from a stale position.
        if(nz<-.05||effective<.1){p.x=tx;p.y=ty;p.z=tz;p.vx=p.vy=p.vz=0;continue;}
        if(interactive&&mouse.isHovered&&mouseDist<interactionRadius){const dx=p.x-mouseRelX,dy=p.y-mouseRelY,d=Math.sqrt(dx*dx+dy*dy)||1,influence=Math.max(0,1-d/(radius*.9))*interactionStrength;if(interactionMode==="repel"){const f=influence*18;p.vx+=(dx/d)*f;p.vy+=(dy/d)*f;}else if(interactionMode==="attract"){const f=influence*14;p.vx-=(dx/d)*f;p.vy-=(dy/d)*f;}else{const a=Math.atan2(dy,dx),f=influence*18;p.vx+=Math.cos(a+Math.PI/2)*f;p.vy+=Math.sin(a+Math.PI/2)*f;}}
        const k=.09,damp=.82;p.vx=(p.vx+(tx-p.x)*k)*damp;p.vy=(p.vy+(ty-p.y)*k)*damp;p.vz=(p.vz+(tz-p.z)*k)*damp;p.x+=p.vx;p.y+=p.vy;p.z+=p.vz;const fov=850,scale=fov/(fov+p.z),sx=cx+p.x*scale,sy=cy+p.y*scale,rad=Math.sqrt(p.x*p.x+p.y*p.y)/radius,illum=Math.pow(Math.min(1,effective),1.6),limb=Math.pow(Math.min(1,rad),2.2),brightness=Math.min(1,illum*.45+limb*.55+ambientLuminance*.25);if(brightness<.08)continue;let color:string,alpha:number,size=p.baseSize*scale*(.75+brightness*.5);
        if(dotHarmonization==="unified"){color=palette.glowHex;alpha=Math.min(1,(.35+.65*illum)*Math.pow(brightness,1.25));}else if(dotHarmonization==="subtle-specular"){const sf=Math.pow(Math.max(0,(rad-.78)/.22),2)*Math.max(0,nDotL),blend=lerpRgb(palette.rawRgb,{r:255,g:255,b:255},sf*.65);color=`rgb(${blend.r}, ${blend.g}, ${blend.b})`;alpha=Math.min(1,(.35+.65*illum)*Math.pow(brightness,1.2));}else if(rad>.88&&nDotL>.4){color=palette.highlightDot;alpha=.95;size*=1.15;}else if(rad>.55||nDotL>.1){color=palette.midDot;alpha=.45+brightness*.45;}else{color=palette.shadowDot;alpha=.25+brightness*.35;}visible.push({sx,sy,z:p.z,size,color,alpha:Math.min(1,alpha*brightness)});
      }
      visible.sort((a,b)=>a.z-b.z);for(const d of visible){ctx.globalAlpha=d.alpha;ctx.fillStyle=d.color;ctx.beginPath();ctx.arc(d.sx,d.sy,d.size,0,Math.PI*2);ctx.fill();}
      if(glowingStrokeIntensity>0&&strokeMode!=="none")drawAtmosphericLimb(ctx,cx,cy,radius,Math.atan2(lightY,lightX),strokeMode,glowingStrokeIntensity,glowSpread,coreHotness,strokeWidth,innerWashIntensity,strokeShadowOpacity,glowHex,glowRgb,palette.rawRgb);
      ctx.globalAlpha=1;animId=requestAnimationFrame(render);
    };render();return()=>{window.removeEventListener("resize",resize);cancelAnimationFrame(animId);};
  },[radius,interactionMode,interactionStrength,autoRotateSpeed,cropPosition,skinStyle,palette,accentColor,primaryDotColor,shadowDotColor,interactive,plasmaNoiseIntensity,stippleDensity,ambientLuminance,glowingStrokeIntensity,glowSpread,coreHotness,innerWashIntensity,dotHarmonization,strokeMode,strokeShadowOpacity,strokeWidth,bodyOpacity]);

  // Pointer → canvas backing-store coordinates. Identity when unscaled (standalone embed); corrects for
  // ancestor CSS transforms such as the PDMA shell's uniform scale(), where the rendered rect ≠ canvas size.
  const toCanvas=(e:React.MouseEvent<HTMLCanvasElement>)=>{const c=canvasRef.current,rect=c?.getBoundingClientRect();if(!c||!rect||!rect.width||!rect.height)return null;return {x:(e.clientX-rect.left)*(c.width/rect.width),y:(e.clientY-rect.top)*(c.height/rect.height)};};
  const handleMouseMove=(e:React.MouseEvent<HTMLCanvasElement>)=>{const pt=toCanvas(e);if(!pt)return;const x=pt.x,y=pt.y,m=mouseRef.current;if(m.isDragging){const dx=x-m.prevX,dy=y-m.prevY;rotationRef.current.rotY+=dx*.006;rotationRef.current.rotX-=dy*.006;rotationRef.current.velY=dx*.0012;rotationRef.current.velX=-dy*.0012;}m.prevX=m.x;m.prevY=m.y;m.x=x;m.y=y;m.isHovered=true;};
  return <div className={`relative w-full h-full overflow-hidden select-none ${className}`}><canvas ref={canvasRef} onMouseMove={handleMouseMove} onMouseDown={e=>{const pt=toCanvas(e);if(!pt)return;mouseRef.current.isDragging=true;mouseRef.current.prevX=pt.x;mouseRef.current.prevY=pt.y;}} onMouseUp={()=>mouseRef.current.isDragging=false} onMouseLeave={()=>{mouseRef.current.isHovered=false;mouseRef.current.isDragging=false;mouseRef.current.x=-9999;mouseRef.current.y=-9999;}} className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"/></div>;
};
