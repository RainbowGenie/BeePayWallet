import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Shield = (props: SvgProps) => (
  <Svg {...props} width="96" height="112" viewBox="0 0 96 112" fill="none">
    <Path
      fill="#E15F09"
      d="M48.484 112a4.378 4.378 0 0 1-2.012-.483l-20.166-10.439c-5.723-2.966-10.199-6.293-13.694-10.17C4.962 82.429.705 71.546.637 60.255L.4 23.096c-.028-4.288 2.74-8.137 6.878-9.587L44.307.598a10.541 10.541 0 0 1 6.89-.038l37.169 12.47c4.16 1.39 6.974 5.212 6.996 9.495l.237 37.187c.073 11.273-4.037 22.201-11.569 30.773-3.456 3.932-7.892 7.309-13.558 10.329l-19.986 10.675a4.273 4.273 0 0 1-2.002.511Z"
      opacity={0.4}
    />
    <Path
      fill="#E15F09"
      d="M44.188 68.997a4.276 4.276 0 0 1-2.999-1.186L30.455 57.487a4.043 4.043 0 0 1-.034-5.82c1.64-1.62 4.319-1.637 5.982-.039l7.723 7.425 18.859-18.594c1.646-1.62 4.324-1.637 5.981-.039a4.038 4.038 0 0 1 .04 5.821L47.17 67.773a4.257 4.257 0 0 1-2.983 1.224Z"
    />
  </Svg>
);

export default Shield;