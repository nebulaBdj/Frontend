import type { SVGProps } from 'react';
const SvgChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" {...props}>
    <path
      stroke="#4D55F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.697 5 3.536 3.535 7.07-7.07"
    />
  </svg>
);
export default SvgChecked;
