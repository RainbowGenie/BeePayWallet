import React, { useState } from 'react';
import { Box, HStack } from 'native-base';
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Button, Label, LabeledInput, P } from 'components';
import { Images } from 'common/src/config';
import { AuthStackParamList } from 'types';
import { useSignupPassword } from 'common/src/services/signupServices';
import { ShowPassword, EyeHidden } from 'assets';
// SignUp
const SignUp = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const { params } = useRoute<RouteProp<AuthStackParamList, 'SignUp'>>();
  const { email } = params;
  const [isLoading, setIsLoading] = useState(false);

  const [showSecurePassword, setShowSecurePassword] = useState<boolean>(true);
  const [securePwdImage, setSecurePwdImage] = useState<any>(
    Images.EyeShowImage
  );
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const [confirmPwdImage, setConfirmPwdImage] = useState<any>(
    Images.EyeShowImage
  );

  const signupService = useSignupPassword(email);

  const onSignUpHandler = async () => {
    setIsLoading(true);
    navigate('AccountSetupProfile');
    setIsLoading(false);
  };

  return (
    <KeyboardAwareScrollView>
      <Box marginX={8}>
        <Box marginTop={5}>
          <Box>
            <Label color="black" sz="xlarge" fontWeight="bold">
              Create a password
            </Label>
          </Box>
          <HStack space={1} paddingTop="2" paddingBottom="4">
            <P sz="medium" color="gray.400">
              Using
            </P>
            <P sz="medium" color="black">
              {email}
            </P>
            <P sz="medium" color="gray.400">
              to sign up
            </P>
          </HStack>

          <LabeledInput
            label="YOUR PASSWORD"
            value={signupService.password}
            isSecure={showSecurePassword}
            isShowPassword={!showSecurePassword}
            error={signupService.passwordError}
            onChange={signupService.setPassword}
            placeholder="Enter your secure password"
            rightElement={securePwdImage}
            onPressedRightElement={() => {
              setShowSecurePassword(!showSecurePassword);
              setSecurePwdImage(
                showSecurePassword ? Images.EyeHideImage : Images.EyeShowImage
              );
            }}
          />
          <LabeledInput
            label="CONFIRM PASSWORD"
            value={signupService.confirmPassword}
            isSecure={showConfirmPassword}
            isShowPassword={!showConfirmPassword}
            error={signupService.confirmPasswordError}
            onChange={signupService.setConfirmPassword}
            placeholder="Confirm your password"
            rightElement={confirmPwdImage}
            onPressedRightElement={() => {
              setShowConfirmPassword(!showConfirmPassword);
              setConfirmPwdImage(
                showConfirmPassword ? Images.EyeHideImage : Images.EyeShowImage
              );
            }}
          />
          <Button
            onPress={onSignUpHandler}
            text="Get Started"
            type="primary"
            sz="box"
            shadow="3"
            disabled={isLoading}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
