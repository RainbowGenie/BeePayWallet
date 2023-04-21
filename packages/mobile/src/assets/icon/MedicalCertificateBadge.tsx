import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const MedicalCertificateBadge = ({
  width = 48,
  height = 48,
  fill = '#000000',
}: Props) => (
  <Svg x="0px" y="0px" width={width} height={height} viewBox="0 96 960 960">
    <Path
      d="M290 816h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm230-150h240v-40H520v40Zm0 120h160v-40H520v40ZM140 976q-24 0-42-18t-18-42V436q0-24 18-42t42-18h237V236q0-24 18-42t42-18h87q24 0 42 18t18 42v140h236q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680V436H584q0 28-18.5 44T519 496h-78q-27 0-45.5-16T377 436H140v480Zm297-480h87V236h-87v200Zm43 240Z"
      fill={fill}
    />
  </Svg>
);

export default MedicalCertificateBadge;
