import React from 'react';
import { Text, ITextProps } from 'native-base';

const sizes = {
  xlarge: ['2xl'],
  large: ['xl'],
  medium: ['lg'],
  small: ['md'],
  xsmall: ['sm'],
};

type Props = ITextProps & {
  textSize: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  fontWeight?: string;
};

export const Label = ({ children, sz, fontWeight, ...rest }: Props) => {
  return (
    <Text
      fontSize={sizes[sz]}
      fontWeight={fontWeight ? fontWeight : 'semibold'}
      {...rest}>
      {children}
    </Text>
  );
};

export default Label;
