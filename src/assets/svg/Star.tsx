import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 37 35"
    {...props}
  >
    <path
      fill="#9499F9"
      d="M16.663 1.265c.694-1.611 2.98-1.611 3.674 0l3.642 8.457a2 2 0 0 0 1.652 1.2l9.168.85c1.747.163 2.454 2.336 1.135 3.495l-6.917 6.076a2 2 0 0 0-.631 1.943l2.024 8.982c.386 1.712-1.463 3.055-2.972 2.16l-7.917-4.702a2 2 0 0 0-2.042 0l-7.917 4.701c-1.51.896-3.358-.447-2.972-2.16l2.024-8.981a2 2 0 0 0-.63-1.943l-6.918-6.076C-.253 14.108.454 11.935 2.2 11.773l9.168-.85a2 2 0 0 0 1.652-1.201z"
    />
  </svg>
);
export default SvgStar;
