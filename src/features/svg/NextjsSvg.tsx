export default function NextjsSvg() {
  return (
    <svg width="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_21_10)">
        <mask
          id="mask0_21_10"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="512"
          height="512"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_21_10)">
          <path
            d="M509 256C509 395.728 395.728 509 256 509C116.272 509 3 395.728 3 256C3 116.272 116.272 3 256 3C395.728 3 509 116.272 509 256Z"
            fill="black"
            stroke-width="6"
            className="stroke-black dark:stroke-white"
          />
          <path
            d="M425.267 448.057L196.671 153.6H153.6V358.315H188.056V197.358L398.219 468.892C407.703 462.547 416.737 455.58 425.267 448.057Z"
            fill="url(#paint0_linear_21_10)"
          />
          <path
            d="M361.244 153.6H327.111V358.4H361.244V153.6Z"
            fill="url(#paint1_linear_21_10)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_21_10"
          x1="310.044"
          y1="331.378"
          x2="411.022"
          y2="456.533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_10"
          x1="344.178"
          y1="153.6"
          x2="343.606"
          y2="304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_21_10">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
