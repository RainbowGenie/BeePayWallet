import React, { useState } from 'react';
import { Box, HStack, Stack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Colors, Images } from 'common/src/config';
import { Button, LabeledInput, AccountSetupDescription, P } from 'components';
import { AuthStackParamList } from 'types';
import { LabeledDatePicker, LabeledPhoneInput } from 'components';
import { useSignupProfile } from 'common/src/services/signupServices';
import { makeIntoPhoneNumber } from 'common/src/utils';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { moveToBottom } from 'utils';

const AccountSetupProfile = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const signupService = useSignupProfile();
  const [showToolTip, setShowToolTip] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>({
    callingCode: ['1'],
    cca2: 'US',
    currency: ['USD'],
    flag: 'flag-us',
    name: 'United States',
    region: 'Americas',
    subregion: 'North America',
  });

  const onSelect = (c: Country) => {
    setCountryCode(c.cca2);
    setCountry(c);
  };

  const onNextHandler = async () => {
    navigate('AccountSetupAvatar');
  };

  const onPressDobToolTip = () => {
    setShowToolTip(!showToolTip);
  };

  return (
    <KeyboardAwareScrollView>
      <Stack flex={1}>
        <AccountSetupDescription
          image="SignupProfileIcon"
          title="Great!"
          label="Now let's set up your Pilot Profile. We'll start with the basics."
        />
        <Box
          marginX={10}
          flex={1}
          justifyContent="space-between"
          paddingBottom={6}>
          <LabeledInput
            label="FIRST NAME"
            value={signupService.firstName}
            error={signupService.firstNameError}
            onChange={signupService.setFirstName}
            placeholder="Enter your first name"
          />
          <LabeledInput
            label="LAST NAME"
            value={signupService.lastName}
            error={signupService.lastNameError}
            onChange={signupService.setLastName}
            placeholder="Enter your last name"
          />
          <Box>
            <LabeledDatePicker
              label="DATE OF BIRTH"
              date={signupService.dob ? signupService.dob : new Date()}
              setDate={signupService.setDob}
              error={signupService.dobError}
              hasMaxDate
              onPressToolTip={onPressDobToolTip}
            />
            {showToolTip && (
              <Box
                maxWidth="220"
                rounded="lg"
                p="2"
                backgroundColor={Colors.primary.blue}
                position="absolute"
                left="90"
                top="-75">
                <P color="white" sz="small">
                  This is used to accurately track your medical certificate
                  expiration dates.
                </P>
              </Box>
            )}
          </Box>

          <LabeledPhoneInput
            label="PHONE (OPTIONAL)"
            value={makeIntoPhoneNumber(signupService.phone)}
            error={signupService.phoneError}
            onChange={signupService.setPhone}
            placeholder="(000) 000-0000"
            onCountryCodePicked={onSelect}
            country={country}
            countryCode={countryCode}
          />
          {moveToBottom(
            <Button
              text="Next"
              sz="large"
              type="primary"
              onPress={onNextHandler}
              shadow="3"
            />
          )}
        </Box>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default AccountSetupProfile;
