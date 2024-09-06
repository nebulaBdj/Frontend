import type { SVGProps } from 'react';
const SvgLets = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" {...props}>
    <path
      fill="url(#Lets_svg__a)"
      d="M25.774 26.03c-1.868 1.084-5.283-1.132-8.589-5.232 1.047 3.31 1.01 5.95-.322 6.722-1.5.87-4.225-.876-6.843-4.12.41 2.064.109 3.734-.957 4.352-1.77 1.027-4.98-1.23-7.17-5.04s-2.53-7.732-.76-8.758c1.067-.619 2.656-.045 4.23 1.342-1.487-3.9-1.63-7.143-.13-8.014 1.333-.772 3.627.515 5.956 3.08C9.307 5.438 9.105 1.358 10.973.275c2.528-1.467 7.891 3.11 11.979 10.223 4.087 7.112 5.35 14.067 2.822 15.534"
    />
    <defs>
      <linearGradient
        id="Lets_svg__a"
        x1={28.298}
        x2={7.615}
        y1={-7.4}
        y2={24.072}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#907CFF" />
        <stop offset={1} stopColor="#4D55F5" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLets;
