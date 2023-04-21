import React from 'react';
import { ArrowBackIcon, View } from 'native-base';

// ArrowIcon
export const ArrowIcon = () => {
  return (
    <View
      width={8}
      height={8}
      borderRadius={10}
      borderColor="gray.300"
      borderWidth={2}
      mx="4"
      justifyContent="center"
      alignItems="center">
      <ArrowBackIcon color="black" name="arrow-back" size="sm" />
    </View>
  );
};
