import React from 'react';
import { Box, ArrowBackIcon, Button } from 'native-base';

type Props = {
  goback?: () => void;
};
// ArrowButton
export const ArrowButton = ({ goback }: Props) => {
  return (
    <Box>
      <Button
        onPress={goback}
        background="transparent"
        width={8}
        height={8}
        borderRadius={10}
        borderColor="gray.700"
        borderWidth={2}>
        <ArrowBackIcon color="black" name="arrow-back" size="sm" />
      </Button>
    </Box>
  );
};
