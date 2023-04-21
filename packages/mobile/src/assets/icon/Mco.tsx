import * as React from 'react';
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg';

export const Mco = (props: SvgProps) => (
  <Svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Rect width={32} height={32} fill="#E15F09" rx={12} />
    <G fill="#fff" clipPath="url(#a)">
      <Path d="m24.845 18.182-2.833-3.541a.709.709 0 0 0-.554-.266v3.542a2.125 2.125 0 0 1-2.125 2.125h-6.375v2.125a.708.708 0 0 0 .709.708h7.791a.708.708 0 0 0 .554-.266l2.833-3.541a.708.708 0 0 0 0-.886Z" />
      <Path d="M19.333 18.625h-7.791a.709.709 0 0 1-.553-.266l-2.834-3.541a.708.708 0 0 1 0-.886l2.834-3.541a.71.71 0 0 1 .553-.266h7.791a.708.708 0 0 1 .709.708v7.084a.708.708 0 0 1-.709.708Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8 8h17v17H8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Mco;
