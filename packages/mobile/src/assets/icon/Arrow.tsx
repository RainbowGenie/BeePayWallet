import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Arrow = (props: SvgProps) => (
  <Svg {...props} width="8" height="15" fill="none">
    <Path
      fill="#071F35"
      stroke="#000"
      strokeWidth={0.4}
      d="m.464 13.296-.005.006-.004.005a.927.927 0 0 0 .078 1.13.78.78 0 0 0 1.17 0l5.764-6.323.005-.006.004-.005.06-.076.005-.006.004-.006a.927.927 0 0 0-.078-1.129L1.702.564 1.697.558 1.692.553l-.07-.065-.005-.006-.006-.004A.778.778 0 0 0 .533.564L.528.569.524.575.464.65.459.656.455.662a.927.927 0 0 0 .078 1.13L5.738 7.5.533 13.209l-.005.005-.004.006-.06.076Z"
    />
  </Svg>
);

export default Arrow;
