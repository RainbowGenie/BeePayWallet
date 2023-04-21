import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const WalletTabIcon = (props: SvgProps) => (
  <Svg {...props} width="16" height="16" fill="none">
    <Path
      d="M5.83968 4.99734H8.45254L9.75705 2.73498L8.45254 0.468781H5.83968L4.53516 2.73498L5.83968 4.99734Z"
      fill={props.fill}
    />
    <Path
      d="M1.3905 7.63496H3.99954L5.30788 5.3725L3.99954 3.11014H1.3905L0.0821533 5.3725L1.3905 7.63496Z"
      fill={props.fill}
    />
    <Path
      d="M1.3905 12.8602H3.99954L5.30788 10.5979L3.99954 8.33542H1.3905L0.0821533 10.5979L1.3905 12.8602Z"
      fill={props.fill}
    />
    <Path
      d="M5.83968 10.2763H8.45254L9.75705 8.01394L8.45254 5.74765H5.83968L4.53516 8.01394L5.83968 10.2763Z"
      fill={props.fill}
    />
    <Path
      d="M10.3997 7.63496H13.0126L14.3171 5.3725L13.0126 3.11014H10.3997L9.09521 5.3725L10.3997 7.63496Z"
      fill={props.fill}
    />
    <Path
      d="M10.304 12.9751H12.9819L14.3171 10.6553L12.9819 8.33542H10.304L8.96509 10.6553L10.304 12.9751Z"
      fill={props.fill}
    />
    <Path
      d="M5.83968 15.3064H8.45254L9.75705 13.044L8.45254 10.7816H5.83968L4.53516 13.044L5.83968 15.3064Z"
      fill={props.fill}
    />
  </Svg>
);

export default WalletTabIcon;
