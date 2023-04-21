import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const SignupProfileIcon = (props: SvgProps) => (
  <Svg {...props} width="101" height="101" viewBox="0 0 101 101" fill="none">
    <G filter="url(#a)">
      <Path
        fill="#E15F09"
        fillOpacity={0.87}
        d="M70.681 0C86.445 0 97 11.067 97 27.528v37.995C97 81.938 86.445 93 70.681 93H30.365C14.602 93 4 81.938 4 65.523V27.528C4 11.067 14.602 0 30.366 0H70.68ZM50.454 39.437c-2.233 0-4.046 1.855-4.046 4.092v20.553a4.048 4.048 0 0 0 4.045 4.045c2.279 0 4.092-1.813 4.092-4.045V43.529a4.095 4.095 0 0 0-4.092-4.092Zm.093-14.74a4.069 4.069 0 0 0-4.092 4.091c0 2.227 1.813 4.046 3.998 4.046 2.325 0 4.139-1.819 4.139-4.046 0-2.278-1.813-4.092-4.045-4.092Z"
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SignupProfileIcon;
