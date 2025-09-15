
type CustomIconProps = {
  className?: string
};

export const CartIcon = ({ className }: CustomIconProps) => {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="19" 
      viewBox="0 0 16 19" 
      fill="none"
    >
      <path d="M14.375 18H1.625V5.25H14.375V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 7.5V4.5C5 2.85 6.35 1.5 8 1.5C9.65 1.5 11 2.85 11 4.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}