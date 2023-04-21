import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from 'react-native-svg';

export const SelectedCheck = (props: SvgProps) => (
  <Svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={12} r={12} fill="#134683" />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m10.2 17.4-4.8-4.8 1.8-1.8 3 3 7.2-7.2 1.8 1.8-9 9Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4.8 4.8h14.4v14.4H4.8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SelectedCheck;
