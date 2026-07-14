type IconProps = {
  className?: string
}

type SizedIconProps = IconProps & {
  size?: 16 | 18
}

export function BreadcrumbHomeIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.66675 6.73327L8.00008 2.6666L13.3334 6.73327V12.6666C13.3334 13.0202 13.193 13.3594 12.9429 13.6094C12.6928 13.8595 12.3537 13.9999 12.0001 13.9999H4.00008C3.64646 13.9999 3.30732 13.8595 3.05727 13.6094C2.80722 13.3594 2.66675 13.0202 2.66675 12.6666V6.73327Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.00008 13.9999V7.99994H10.0001V13.9999" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProofPointArrowIcon({ size = 18, className }: SizedIconProps) {
  const strokeWidth = size === 16 ? "1.75" : "1.75"
  const viewBox = size === 16 ? "0 0 18 18" : "0 0 18 18"
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 9H13.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M10.5 5.75L13.75 9L10.5 12.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeroSwooshBackdrop() {
  return (
    <svg width="285" height="86" viewBox="0 0 285 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 31.8666C0.982931 43.995 8.89015 50.7458 16.9821 56.0192C28.3357 63.2051 40.5816 69.2532 53.0125 73.8242C110.828 93.3802 167.509 88.0339 222.07 61.6625C235.918 54.9084 249.028 46.0603 263.891 37.1836C266.135 53.2226 258.194 68.7256 259.607 85.41C266.223 82.4942 267.67 76.9248 268.994 72.3403C274.351 53.5099 279.492 34.4022 284.142 15.2323C286.297 6.00108 284.051 1.96609 275.189 0.846921C256.758 -1.73088 239.341 1.57154 223.431 10.8163C222.877 11.2465 222.692 12.7236 222.169 14.9083C234.476 24.4655 247.556 9.86151 261.063 15.8189C245.398 35.0981 224.534 45.968 202.931 54.7439C180.283 63.8879 157.173 70.7228 132.771 71.8927C108.862 73.1247 85.8456 69.2176 62.5837 63.2787C39.26 57.8323 18.8604 47.0031 0 31.8666Z" fill="#222222" fillOpacity="0.06" />
    </svg>
  )
}
