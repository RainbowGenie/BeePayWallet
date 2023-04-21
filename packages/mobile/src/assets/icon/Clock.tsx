import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

export const Clock = (props: SvgProps) => (
  <Svg {...props} width="28" height="31" viewBox="0 0 28 31" fill="none">
    <G fill="#E15F09" clipPath="url(#a)">
      <Path d="M26.742 0H.737a.735.735 0 0 0-.52 1.256L13.22 14.258a.737.737 0 0 0 1.04 0L27.262 1.256A.736.736 0 0 0 26.742 0ZM26.742 30.207H.737a.735.735 0 0 1-.52-1.255L13.22 15.949a.737.737 0 0 1 1.04 0l13.002 13.003a.736.736 0 0 1-.52 1.255Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27.479v30.207H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Clock;
