import React from 'react';
import { Text, ITextProps } from 'native-base';
import { Colors } from 'common/src/config';

const sizes = {
  large: ['lg', 'md', 'lg'],
  medium: ['md', 'sm', 'md'],
  small: ['sm', 'xs', 'sm'],
  xsmall: ['xs', '2xs', 'xs'],
  tiny: ['3xs'],
};

type Props = ITextProps & {
  sz: 'large' | 'medium' | 'small' | 'xsmall' | 'tiny';
  type: string;
};

export const P = ({ children, type, sz, ...rest }: Props) => {
  return (
    <Text
      fontSize={sizes[sz]}
      fontWeight="normal"
      color={Colors.primary.orange}
      {...rest}>
      {children}
    </Text>
  );
};

export default P;
