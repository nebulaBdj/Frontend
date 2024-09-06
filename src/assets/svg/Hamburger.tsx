import type { SVGProps } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16" {...props}>
    <path
      stroke="#27272D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.667 14.667h18.667M1.667 8h18.667M1.667 1.333h18.667"
    />
  </svg>
);
export default SvgHamburger;
