import React, { useLayoutEffect } from 'react';
import { Box, HStack, Center, Stack, Image } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Images } from 'common/src/config';
import { AuthStackParamList } from 'types';
import { AccountSetupDescription, Button, CertificateButton } from 'components';
import { moveToBottom } from 'utils';
import { useUser } from 'common/src/services/userServices';
import { usePilotCertificates } from 'common/src/services/pilotCertificateServices';
import { useMedicalCertificates } from 'common/src/services/medicalCertificateServices';
import { DefaultAvatar } from 'assets';
const AccountSetupCertificates = () => {
  const { navigate, setOptions } =
    useNavigation<NavigationProp<AuthStackParamList>>();

  const { profilePictureUrl } = useUser();
  const { pDocs } = usePilotCertificates();
  const { medDoc } = useMedicalCertificates();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () =>
        profilePictureUrl ? (
          <Image
            size="35"
            borderRadius="30"
            source={{ uri: profilePictureUrl }}
            marginRight={4}
            marginBottom={2}
          />
        ) : (
          <Box marginRight={4} marginBottom={2}>
            <DefaultAvatar />
          </Box>
        ),
    });
  }, [setOptions, profilePictureUrl]);

  const onNextHandler = () => {
    navigate('AuthNavigation', { screen: 'AccountSetupComplete' });
  };
  const onPilotCertHandler = () => {
    navigate('AddPilotCertificate');
  };
  const onMedicalCertHandler = () => {
    navigate('AddMedicalCertificate');
  };

  return (
    <Box height="full">
      <Box flex={1} justifyContent="space-between" safeAreaBottom mx={7}>
        <AccountSetupDescription
          image="ShieldImage"
          title="Looking good!"
          label="Now bring it all together by entering your certificate data. By doing so, we can help you track things like medical certificate expirations, CFI renewals, etc."
        />
        <Center mt={5}>
          <HStack space={4} justifyContent="space-between">
            <CertificateButton
              navigateHandler={onPilotCertHandler}
              title={'Pilot' + '\n' + 'Certificates'}
              image="PilotCertificateImage"
              icon={pDocs ? Images.GreenCheck : Images.RedAlert}
            />
            <CertificateButton
              navigateHandler={onMedicalCertHandler}
              title="Medical Certificates"
              image="MedicalCertificateImage"
              icon={medDoc ? Images.GreenCheck : Images.RedAlert}
            />
          </HStack>
        </Center>
        {moveToBottom(
          <Stack space={4}>
            <Button
              marginTop="5"
              onPress={onNextHandler}
              sz="large"
              type="primary"
              text={'Next'}
            />
            <Button
              onPress={onNextHandler}
              sz="small"
              type="underline"
              text={'Skip'}
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default AccountSetupCertificates;
