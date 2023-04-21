import React, { useLayoutEffect } from 'react';
import { Stack, Image, Box } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Constants, Images } from 'common/src/config';
import { Button, AccountSetupDescription } from 'components';
import { AuthStackParamList } from 'types';
import { LabeledPicker, LabeledMultiPicker } from 'components';
import { useSignupComplete } from 'common/src/services/signupServices';
import { useUser } from 'common/src/services/userServices';
import { DefaultAvatar } from 'assets';

const AccountSetupComplete = () => {
  const { navigate, setOptions } =
    useNavigation<NavigationProp<AuthStackParamList>>();

  const { profilePictureUrl } = useUser();

  const signupService = useSignupComplete();
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

  const onNextHandler = async () => {
    const res = await signupService.handleSubmit();
    if (res) {
      navigate('HomeNavigation');
    }
  };

  return (
    <KeyboardAwareScrollView>
      <Stack mx={7}>
        <AccountSetupDescription
          image="SearchImage"
          title="Perfect!"
          label="To finish off, we'd love to learn a little more about you if you don't mind sharing. This helps us improve RLSimulator to meet the needs of modern aviators like you."
        />
        <Stack mt="6" space={4} flex={1}>
          <LabeledPicker
            label="HOW DID YOU HEAR ABOUT US?"
            placeHolder="Select the reason"
            onSelectItem={signupService.setHowDidYouHear}
            items={Constants.referralChannels}
            selectedItem={signupService.howDidYouHear}
            zIndex={300}
          />
          <LabeledMultiPicker
            label="WHAT ARE YOUR GOALS AS AN AVIATOR?"
            placeHolder="Select your goals"
            values={signupService.pilotGoals}
            setValues={signupService.setPilotGoals}
            items={Constants.pilotGoals}
            zIndex={200}
          />
          <LabeledPicker
            label="GENDER"
            placeHolder="Select your Gender"
            onSelectItem={signupService.setGender}
            selectedItem={signupService.gender}
            items={Constants.genderData}
            zIndex={100}
          />
          <Button
            onPress={onNextHandler}
            sz="box"
            type="primary"
            text={'Next'}
            shadow="3"
            mt={4}
          />
          <Button
            onPress={onNextHandler}
            sz="small"
            type="underline"
            text={'Skip'}
          />
        </Stack>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default AccountSetupComplete;
