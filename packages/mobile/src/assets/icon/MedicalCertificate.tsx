import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const MedicalCertificate = (props: SvgProps) => (
  <Svg {...props} height="48" viewBox="0 96 960 960" width="48" fill="#134683">
    <Path d="M290 833h83v-84h84v-83h-84v-84h-83v84h-84v83h84v84Zm221-154h243v-70H511v70Zm0 135h163v-70H511v70Zm-362 187q-39.05 0-66.525-27.475Q55 946.05 55 907V445q0-39.463 27.475-67.231Q109.95 350 149 350h203V236q0-34.025 25.344-60.013Q402.688 150 437 150h87q34.025 0 60.013 25.987Q610 201.975 610 236v114h201q39.463 0 67.231 27.769Q906 405.537 906 445v462q0 39.05-27.769 66.525Q850.463 1001 811 1001H149Zm297-591h69V245h-69v165Z" />
  </Svg>
);

export default MedicalCertificate;
