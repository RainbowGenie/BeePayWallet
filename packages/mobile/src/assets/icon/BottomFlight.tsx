import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const BottomFlight = (props: SvgProps) => (
  <Svg {...props} width="76" height="76" viewBox="0 0 76 76" fill="none">
    <G filter="url(#a)">
      <Circle cx={38} cy={30} r={26} fill="#063A76" />
    </G>
    <Path
      fill="#fff"
      d="M38.115 18.876a2.088 2.088 0 0 0-1.866 1.077l-8.83 15.805a2.073 2.073 0 0 0 .09 2.218c.46.685 1.564 1.042 2.365.857l6.216-1.437a1.409 1.409 0 0 0 1.091-1.369h1.212v.134-.134l.406.025a1.43 1.43 0 0 0 1.079 1.391l6.219 1.578a2.063 2.063 0 0 0 1.995-.532c.061-.06.13-.129.184-.197.524-.67.597-1.55.201-2.305l-8.52-15.981a2.121 2.121 0 0 0-1.842-1.13Z"
    />
    <Path
      fill="#063A76"
      fillRule="evenodd"
      d="M38.554 26.117a.556.556 0 0 0-1.108.075v2.16h-2.163l-.075.006a.556.556 0 0 0 .075 1.107h2.163v2.16l.006.076a.556.556 0 0 0 1.107-.075v-2.16h2.163l.075-.006a.556.556 0 0 0-.075-1.107h-2.163v-2.16l-.005-.076Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
);

export default BottomFlight;
