import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const EyeHidden = (props: SvgProps) => (
  <Svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Circle cx={8} cy={8} r={8} fill="#F2BE91" />
    <Path
      fill="#E15F09"
      d="M8 12c2.4 0 4.267-2.067 5.067-3.267a1.3 1.3 0 0 0 0-1.533C12.267 6.067 10.4 4 8 4 5.6 4 3.733 6.067 2.933 7.267c-.333.466-.333 1.066 0 1.466C3.733 9.933 5.6 12 8 12Zm0-6c1.133 0 2 .867 2 2s-.867 2-2 2-2-.867-2-2 .867-2 2-2Z"
    />
  </Svg>
);
export default EyeHidden;
