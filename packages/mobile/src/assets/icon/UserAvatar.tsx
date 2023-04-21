import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const UserAvatar = (props: SvgProps) => (
  <Svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <Path
      fill="#E15F09"
      fillOpacity={0.77}
      d="M48 24c0 10.493-8.507 19-19 19s-19-8.507-19-19S18.507 5 29 5s19 8.507 19 19Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M16 37.254c1.172-3.59 3.628-6.546 6.778-8.254 1.716 1.436 3.874 2.3 6.222 2.3 2.348 0 4.506-.864 6.222-2.3 3.15 1.708 5.606 4.664 6.778 8.254C38.679 40.804 34.08 43 29 43s-9.679-2.197-13-5.746Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M29 13c-4.962 0-9 3.814-9 8.5s4.038 8.5 9 8.5 9-3.814 9-8.5-4.038-8.5-9-8.5Z"
    />
  </Svg>
);
export default UserAvatar;
