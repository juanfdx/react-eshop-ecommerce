
type CustomIconProps = {
  className?: string
};


export const UserIcon = ({ className }: CustomIconProps) => {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none">
        <path d="M8 9C10.4853 9 12.5 6.98531 12.5 4.5C12.5 2.01469 10.4853 0 8 0C5.515 0 3.5 2.01469 3.5 4.5C3.5 6.98531 5.51562 9 8 9ZM8 1.5C9.65437 1.5 11 2.84563 11 4.5C11 6.15406 9.65437 7.5 8 7.5C6.34594 7.5 5 6.15406 5 4.5C5 2.84563 6.34687 1.5 8 1.5ZM10.9719 10H5C2.23875 10 0 12.2384 0 15C0 15.5522 0.447812 16 0.971875 16H15C15.5522 16 15.9719 15.5522 15.9719 15C16 12.2375 13.7625 10 10.9719 10ZM1.53562 14.5C1.77897 12.8059 3.24 11.5 5.00125 11.5H10.9731C12.7334 11.5 14.195 12.8059 14.4388 14.5H1.53562Z" fill="currentColor"></path>
    </svg>
  )
}