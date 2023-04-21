import React, { useEffect, useState } from 'react';
import { Divider, HStack, Stack } from 'native-base';
import { Dimensions, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useLogin } from 'common/src/services/loginServices';
import { Button, Label, LabeledInput, P } from 'components';
import { RootStackParamList } from 'types';
import { Images } from 'common/src/config/images';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { useAuth } from 'common/src/services/authServices';

const SignIn = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [secureImage, setSecureImage] = useState<any>(Images.EyeShowImage);

  const loginService = useLogin();
  const { setUid } = useAuth();

  const loginInHandler = async () => {
    const res = await loginService.handleSubmit();
    if (res) {
      goLogin();
    }
  };

  const goLogin = () => {
    navigate('HomeNavigation');
  };

  useEffect(() => {
    const configureGoogleSignIn = () => {
      GoogleSignin.configure({
        webClientId:
          '998001974073-na46fde9s8qitlum8jll4po0enp7m2v7.apps.googleusercontent.com', //Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: false,
      });
    };
    configureGoogleSignIn();
  }, []);

  const appleAuthHandler = async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }
    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    );
    // Sign the user in with the credential
    const res = await auth().signInWithCredential(appleCredential);
    if (res.user) {
      setUid(res.user.uid);
      goLogin();
    }
  };
  const googleAuthHandler = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    if (res.user) {
      setUid(res.user.uid);

      goLogin();
    }
  };

  const clearEmail = async () => {
    loginService.setEmail('');
  };

  return (
    <KeyboardAwareScrollView>
      <Stack marginX={10}>
        <Stack space="2" marginTop={8}>
          <Label color="black" sz="xlarge" fontWeight="bold">
            Sign in
          </Label>
          <LabeledInput
            label="YOUR EMAIL"
            value={loginService.email}
            error={loginService.emailError}
            onChange={loginService.setEmail}
            placeholder="Enter your email"
            rightElement={Images.CircleCloseImage}
            onPressedRightElement={clearEmail}
          />
          <LabeledInput
            label="YOUR PASSWORD"
            value={loginService.password}
            isSecure={showPassword}
            isShowPassword={!showPassword}
            error={loginService.passwordError || loginService.error}
            onChange={loginService.setPassword}
            placeholder="Enter your password"
            rightElement={secureImage}
            onPressedRightElement={() => {
              setShowPassword(!showPassword);
              setSecureImage(
                showPassword ? Images.EyeHideImage : Images.EyeShowImage
              );
            }}
          />
          <Stack mt="4" mb="4" space="4">
            <Button
              text="Sign in"
              sz="large"
              type="primary"
              onPress={loginInHandler}
              shadow="3"
            />
            <HStack space="6" alignItems="center" justifyContent="space-around">
              <Divider my="4" w={Dimensions.get('window').width / 5} />
              <P color="gray.500" sz="xsmall">
                OR SIGN IN WITH
              </P>
              <Divider my="4" w={Dimensions.get('window').width / 5} />
            </HStack>
            <HStack px="8" space="4" justifyContent="center">
              <Button
                sz="box"
                type="google"
                onPress={googleAuthHandler}
                borderColor="gray.200"
                borderWidth={1}
              />
              {Platform.OS === 'ios' && (
                <Button
                  sz="box"
                  type="apple"
                  onPress={appleAuthHandler}
                  borderColor="gray.200"
                  borderWidth={1}
                />
              )}
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
