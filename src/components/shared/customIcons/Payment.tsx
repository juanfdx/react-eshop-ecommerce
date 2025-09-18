
type CustomIconProps = {
  className?: string
};

export const Payment = ({ className }: CustomIconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
    >
      <g clipPath='url(#clip0_89_2350)'>
        <path
          d='M1.5 7.14209H23.5'
          stroke='#181818'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M1.5 11.1421H23.5'
          stroke='#181818'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M21.5 21.1421H3.5C2.395 21.1421 1.5 20.2471 1.5 19.1421V5.14209C1.5 4.03709 2.395 3.14209 3.5 3.14209H16.5H21.5C22.605 3.14209 23.5 4.03709 23.5 5.14209V19.1421C23.5 20.2471 22.605 21.1421 21.5 21.1421Z'
          stroke='#181818'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M5.5 16.1421H10.5'
          stroke='#181818'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M18.5 16.1421H19.5'
          stroke='#181818'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_89_2350'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5 0.14209)'
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}