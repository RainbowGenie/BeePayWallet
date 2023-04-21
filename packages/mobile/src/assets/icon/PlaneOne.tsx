import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

export const PlaneOne = (props: SvgProps) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
    <Rect width={32} height={32} fill="#134683" rx={12} />
    <Path
      fill="#fff"
      d="m16.504 22.744 1.212 1.248 1.933-4.303 4.358-1.809-1.212-1.247-3.1.585-2.84-2.923 6.788-3.083-1.148-1.182-8.861.948-2.425-2.495a1.727 1.727 0 0 0-1.232-.546 1.755 1.755 0 0 0-1.26.499 1.767 1.767 0 0 0-.534 1.245 1.739 1.739 0 0 0 .51 1.246l2.488 2.562-1.205 8.83 1.085 1.116 3.33-6.643 2.789 2.87-.676 3.082Z"
    />
  </Svg>
);
export default PlaneOne;
