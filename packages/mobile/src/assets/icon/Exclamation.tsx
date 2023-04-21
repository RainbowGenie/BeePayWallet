import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const Exclamation = (props: SvgProps) => (
  <Svg {...props} width="33" height="33" viewBox="0 0 33 33" fill="none">
    <Circle cx={16.5} cy={16.5} r={16.5} fill="#EBEBEB" />
    <Circle cx={16.5} cy={16.5} r={9.9} fill="#D01111" />
    <Path
      fill="#fff"
      d="M18.202 19.774c0 .924-.752 1.676-1.676 1.676a1.678 1.678 0 0 1-1.676-1.676c0-.924.752-1.675 1.676-1.675.924 0 1.676.751 1.676 1.675Zm-3.158-8.521.285 5.698a.503.503 0 0 0 .502.477h1.39c.268 0 .488-.21.502-.477l.285-5.698a.503.503 0 0 0-.502-.528h-1.96a.503.503 0 0 0-.502.528Z"
    />
  </Svg>
);

export default Exclamation;
