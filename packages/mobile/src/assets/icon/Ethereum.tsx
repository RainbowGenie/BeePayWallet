import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Mask,
  G,
  Stop,
  LinearGradient,
  Defs,
} from 'react-native-svg';

export const Ethereum = (props: SvgProps) => (
  <Svg {...props} width="48" height="48" fill="none">
    <Path
      d="M23.5893 47.9157C36.583 47.9157 47.1165 37.3753 47.1165 24.373C47.1165 11.3707 36.583 0.830261 23.5893 0.830261C10.5955 0.830261 0.0620117 11.3707 0.0620117 24.373C0.0620117 37.3753 10.5955 47.9157 23.5893 47.9157Z"
      fill="url(#paint0_linear_14_576)"
    />
    <Path
      d="M23.5893 6.80594V19.653L13.046 24.3883L23.5893 6.80594Z"
      fill="#7F8082"
    />
    <Path
      d="M23.5893 19.653V30.8272L13.046 24.3883L23.5893 19.653Z"
      fill="#353535"
    />
    <Path
      d="M23.5893 33.1125V41.7296L13.046 26.8536L23.5893 33.1125Z"
      fill="#828385"
    />
    <Path
      d="M23.5892 6.80594V19.653L34.1325 24.3883L23.5892 6.80594Z"
      fill="#2F3032"
    />
    <Path
      d="M23.5892 19.653V30.8272L34.1325 24.3883L23.5892 19.653Z"
      fill="#131313"
    />
    <Path
      d="M23.5892 33.1125V41.7296L34.1325 26.8536L23.5892 33.1125Z"
      fill="#282A29"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_14_576"
        x1="0.0629299"
        y1="24.373"
        x2="47.1174"
        y2="24.373"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D98F26" />
        <Stop offset="0.0448" stopColor="#BF8122" />
        <Stop offset="0.0895" stopColor="#AB761F" />
        <Stop offset="0.1201" stopColor="#A4721E" />
        <Stop offset="0.19" stopColor="#A9761F" />
        <Stop offset="0.2779" stopColor="#B98221" />
        <Stop offset="0.3752" stopColor="#D39525" />
        <Stop offset="0.3897" stopColor="#D79826" />
        <Stop offset="0.7819" stopColor="#FDF576" />
        <Stop offset="1" stopColor="#F4CC69" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Ethereum;
