import React, { useEffect } from 'react';
import { Box, StatusBar, Stack, HStack, Divider, Text } from 'native-base';
import {
  Dimensions,
  ImageBackground,
  Linking,
  Platform,
  Pressable,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import { Constants, Images } from 'common/src/config';
import { Button, Label, P } from 'components';
import { RootStackParamList } from 'types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
const Welcome = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  // const { showToast } = useToast();

  const emailAuthHandler = () => {
    navigate('AuthNavigation');
  };
  const discordAuthHandler = () => {
    console.log('discordAuthHandler >>');
  };
  const steamAuthHandler = () => {
    console.log('steamAuthHandler >>');
  };
  const epicAuthHandler = () => {
    console.log('epicAuthHandler >>');
  };

  const FAQHandler = () => {
    Linking.openURL(Constants.termsOfServiceUrl);
  };

  const RulesHandler = () => {
    Linking.openURL(Constants.privacyPolicyUrl);
  };

  const appleAuthHandler = async () => {};
  const googleAuthHandler = () => {};

  return (
    <Box flex={1}>
      <ImageBackground source={Images.wingCloudsImage} style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <Box flex={1} justifyContent="space-between" marginX={8} paddingTop={6}>
          <Stack>
            <Label sz="medium" color="white" fontWeight="bold">
              Welcome to
            </Label>
            <Label sz="large" color="black" fontWeight="bold">
              RLSimulator
            </Label>
          </Stack>
          <Stack>
            <Stack mt="2" mb="1" space="2">
              <Button
                text="Continue with email"
                textSize="small"
                sz="large"
                type="email"
                onPress={emailAuthHandler}
                shadow="3"
              />
              <HStack
                space="6"
                alignItems="center"
                justifyContent="space-around">
                <Divider my="3" w={Dimensions.get('window').width / 5} />
                <P color="white" sz="xsmall">
                  OR SIGN UP WITH
                </P>
                <Divider my="3" w={Dimensions.get('window').width / 5} />
              </HStack>

              <Stack px="12" space="2" justifyContent="center">
                {Platform.OS === 'android' && (
                  <Button
                    sz="small"
                    type="google"
                    onPress={googleAuthHandler}
                    shadow="3"
                  />
                )}
                {Platform.OS === 'ios' && (
                  <Button
                    sz="small"
                    type="apple"
                    onPress={appleAuthHandler}
                    shadow="3"
                  />
                )}
                <Button
                  sz="small"
                  type="discord"
                  onPress={discordAuthHandler}
                  shadow="3"
                />
                <Button
                  sz="small"
                  type="steam"
                  onPress={steamAuthHandler}
                  shadow="3"
                />
                <Button
                  sz="small"
                  type="epic"
                  onPress={epicAuthHandler}
                  shadow="3"
                />
              </Stack>
            </Stack>

            <Stack alignItems="center" paddingBottom={3}>
              <P color="white" sz="xsmall" type="faq">
                RLSimulator's{' '}
                <Pressable onPress={FAQHandler}>
                  <Text color="orange.500">F.A.Q</Text>
                </Pressable>{' '}
                &{' '}
                <Pressable onPress={RulesHandler}>
                  <Text color="orange.500">Rules</Text>
                </Pressable>
              </P>
            </Stack>
          </Stack>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default Welcome;
