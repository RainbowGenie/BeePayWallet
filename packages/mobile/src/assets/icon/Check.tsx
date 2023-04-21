import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const Check = (props: SvgProps) => (
  <Svg {...props} width="33" height="33" viewBox="0 0 33 33" fill="none">
    <Circle cx={16.5} cy={16.5} r={16.5} fill="#EBEBEB" />
    <Circle cx={16.5} cy={16.5} r={9.9} fill="#9ADB7F" />
    <Path
      fill="#fff"
      d="M21.45 14.559 20.006 13.2l-4.125 3.882-2.062-1.94-1.444 1.358 3.506 3.3 5.569-5.241Z"
    />
  </Svg>
);

export default Check;
