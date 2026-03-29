type IconProps = {
  size?: number
  className?: string
}

type ColorIconProps = IconProps & {
  color?: string
}

export function ArrowUpRightIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 5V15C20 15.552 19.553 16 19 16C18.447 16 18 15.552 18 15V7.41406L6.70703 18.707C6.51203 18.902 6.256 19 6 19C5.744 19 5.48797 18.902 5.29297 18.707C4.90197 18.316 4.90197 17.684 5.29297 17.293L16.5859 6H9C8.447 6 8 5.552 8 5C8 4.448 8.447 4 9 4H19C19.13 4 19.2601 4.0269 19.3821 4.0769C19.6271 4.1779 19.8221 4.37292 19.9231 4.61792C19.9741 4.73992 20 4.87 20 5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ChevronDownIcon({
  size = 24,
  color = "#25314C",
  className,
}: ColorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 14.75C11.808 14.75 11.6159 14.6771 11.4699 14.5301L7.46997 10.5301C7.17697 10.2371 7.17697 9.76202 7.46997 9.46902C7.76297 9.17602 8.23801 9.17602 8.53101 9.46902L12.001 12.939L15.4709 9.46902C15.7639 9.17602 16.239 9.17602 16.532 9.46902C16.825 9.76202 16.825 10.2371 16.532 10.5301L12.532 14.5301C12.384 14.6771 12.192 14.75 12 14.75Z"
        fill={color}
      />
    </svg>
  )
}

export function StarIcon({
  size = 24,
  color = "#2B2B2B",
  className,
}: ColorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.5L14.7812 8.13486L21 9.03886L16.5 13.4251L17.5623 19.6197L12 16.695L6.43769 19.6197L7.5 13.4251L3 9.03886L9.21885 8.13486L12 2.5Z"
        fill={color}
      />
    </svg>
  )
}
