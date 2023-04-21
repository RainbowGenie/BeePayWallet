import React from 'react';
import { Box, HStack, Image, StatusBar, Pressable, Center } from 'native-base';

import { Label } from './Label';
import {
  Exclamation,
  Check,
  MedicalCertificate,
  PilotCertificate,
} from 'assets';
import { P } from './P';
type Props = {
  navigateHandler?: () => void;
  image: string;
  title: string;
  icon: string;
};

export const CertificateButton = ({
  navigateHandler,
  image,
  title,
  icon,
}: Props) => {
  return (
    <Pressable
      onPress={navigateHandler}
      shadow="3"
      justifyContent="center"
      alignItems="center"
      borderRadius={15}
      p="2"
      width="1/2"
      backgroundColor="white">
      <Box position="absolute" top={2} left={2}>
        {image == 'PilotCertificateImage' ? <Check /> : <Exclamation />}
      </Box>
      <Box p="4">
        {image == 'PilotCertificateImage' ? (
          <PilotCertificate />
        ) : (
          <MedicalCertificate />
        )}
      </Box>
      <Label textAlign="center" color="black" sz="small">
        {title}
      </Label>
    </Pressable>
  );
};

export default CertificateButton;
