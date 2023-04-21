import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const MagnifyingGlass = (props: SvgProps) => (
  <Svg {...props} width="92" height="92" viewBox="0 0 92 92" fill="none">
    <Path
      fill="#E15F09"
      d="M39.557 79.61c21.846 0 39.556-17.822 39.556-39.805C79.113 17.82 61.403 0 39.557 0 17.71 0 0 17.821 0 39.805 0 61.788 17.71 79.61 39.557 79.61Z"
    />
    <Path
      fill="#E15F09"
      d="M85.903 91.794a6.076 6.076 0 0 1-4.09-1.77l-9.368-10.95a5.003 5.003 0 0 1-.368-6.997 4.486 4.486 0 0 1 3.19-1.335c1.198 0 2.347.48 3.191 1.335l11.781 9.426a6.203 6.203 0 0 1 1.337 6.583A6.138 6.138 0 0 1 86.15 92l-.246-.206Z"
      opacity={0.4}
    />
  </Svg>
);

export default MagnifyingGlass;
