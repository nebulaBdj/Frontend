import type { SVGProps } from 'react';
const SvgUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 10" {...props}>
    <path
      stroke="#7A7D84"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4.536 4.536 8.07 11.606 1"
    />
  </svg>
);
export default SvgUnchecked;
