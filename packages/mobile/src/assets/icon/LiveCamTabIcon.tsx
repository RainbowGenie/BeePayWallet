import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const LiveCamTabIcon = (props: SvgProps) => (
  <Svg {...props} width="21" height="13" fill="none">
    <Path
      d="M15.6739 9.52343C15.4865 9.53108 15.4673 9.6574 15.4712 9.80287C15.4712 10.1244 15.4903 10.446 15.4674 10.7637C15.4214 11.3418 15.299 11.8815 14.8629 12.3255C14.4 12.8002 13.8262 12.9457 13.2103 12.9534C11.9784 12.9763 10.7466 12.961 9.51476 12.961C7.18881 12.961 4.85904 12.961 2.5331 12.961C1.99752 12.961 1.50402 12.8346 1.06408 12.5093C0.555278 12.1341 0.279842 11.6327 0.279842 11.0048C0.272191 8.25246 0.279838 5.50387 0.276013 2.75147C0.272187 1.70258 1.19798 0.791548 2.25001 0.795376C5.94551 0.803032 9.63718 0.818337 13.3327 0.787712C14.5033 0.776228 15.4061 1.62987 15.4674 2.87017C15.4865 3.22235 15.4712 3.57837 15.4712 3.93439C15.4712 4.04923 15.4559 4.17559 15.5783 4.25215C15.6318 4.34019 15.6472 4.43973 15.6472 4.54309C15.6472 6.20447 15.6127 7.86587 15.6739 9.52343Z"
      fill={props.fill}
    />
    <Path
      d="M15.6739 9.52342C15.5247 9.3971 15.4673 9.24397 15.4673 9.04108C15.4749 7.59024 15.4749 6.13935 15.4711 4.6885C15.4711 4.53155 15.4941 4.38613 15.5782 4.25597C17.1926 3.28364 18.8108 2.31509 20.429 1.33893C20.5553 1.71791 20.6088 10.8747 20.5017 12.2988C20.3296 12.383 20.2148 12.2528 20.0962 12.1801C18.6157 11.2996 17.1429 10.4115 15.6739 9.52342Z"
      fill={props.fill}
    />
    <Path
      d="M5.33342 6.85908C5.28752 5.50777 6.49257 4.30572 7.87742 4.34017C9.25463 4.37462 10.4291 5.50768 10.3755 6.86665C10.3143 8.37492 9.26229 9.36643 7.81623 9.39322C6.44285 9.41619 5.33342 8.24867 5.33342 6.85908Z"
      fill="#E15241"
    />
  </Svg>
);

export default LiveCamTabIcon;
