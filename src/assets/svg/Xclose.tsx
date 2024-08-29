import * as React from "react";
import type { SVGProps } from "react";
const SvgXclose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#27272D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-9-9m0 0L3 3m9 9 9-9m-9 9-9 9"
    />
  </svg>
);
export default SvgXclose;
