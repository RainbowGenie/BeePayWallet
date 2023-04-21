import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const Mail = (props: SvgProps) => (
  <Svg {...props} width="16" height="14" viewBox="0 0 16 14" fill="none">
    <Path
      fill="#fff"
      d="M15 0H1C.4 0 0 .4 0 1v1.4l8 4.5 8-4.4V1c0-.6-.4-1-1-1Z"
    />
    <Path
      fill="#fff"
      d="M7.5 8.9 0 4.7V13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V4.7L8.5 8.9c-.28.14-.72.14-1 0Z"
    />
  </Svg>
);
export default Mail;
