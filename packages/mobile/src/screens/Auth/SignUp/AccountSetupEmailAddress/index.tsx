import React, { useState } from 'react';
import { Box, View } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// import { View } from 'react-native';
import { LabeledInput, Label, Button } from 'components';
import { AuthStackParamList } from 'types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from 'common/src/config/images';
import { useSignupEmail } from 'common/src/services/signupServices';

const AccountSetupEmailAddress = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const signupService = useSignupEmail();
  const onContinueEmailHandler = async () => {
    navigate('AccountSetupPassword', { email: signupService.email });
  };

  const clearEmail = async () => {
    signupService.setEmail('');
  };

  return (
    <KeyboardAwareScrollView>
      <Box marginX={8}>
        <Box marginTop={5}>
          <Label py="1" sz="xlarge">
            What's your {'\n'}email address?
          </Label>
          <LabeledInput
            label="YOUR EMAIL"
            value={signupService.email}
            onChange={signupService.setEmail}
            placeholder="Enter your email"
            error={signupService.error}
            rightElement={Images.CircleCloseImage}
            onPressedRightElement={clearEmail}
          />
          <Button
            text="Next"
            sz="large"
            type="primary"
            onPress={onContinueEmailHandler}
            shadow="3"
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default AccountSetupEmailAddress;
