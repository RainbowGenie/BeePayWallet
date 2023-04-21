import React from 'react';
import { Box, Text, Input, Pressable, Image, HStack } from 'native-base';
import { Colors } from 'common/src/config';
import { CountryCodePicker } from 'components';
import { Country, CountryCode } from 'react-native-country-picker-modal';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  error: string;
  color?: string;
  disabled?: boolean;
  rightElement?: any;
  onChange?: (text: string) => void;
  onPressedRightElement?: () => void;
  onFocus?: () => void;
  country: Country;
  countryCode: CountryCode;
  onCountryCodePicked?: (c: Country) => void;
};

export const LabeledPhoneInput = ({
  label,
  value,
  placeholder,
  onChange,
  error,
  color = 'black',
  disabled,
  rightElement,
  onPressedRightElement,
  onFocus,
  onCountryCodePicked,
  country,
  countryCode,
}: Props) => {
  return (
    <Box>
      <Box>
        <Text color="black" fontSize="2xs" opacity={0.6}>
          {label}
        </Text>
      </Box>
      <HStack space="2">
        <CountryCodePicker
          label="Country Code"
          country={country}
          countryCode={countryCode}
          onSelect={onCountryCodePicked}
        />

        <Input
          flex="1"
          isDisabled={disabled}
          onChangeText={text => {
            onChange && onChange(text);
          }}
          fontSize="md"
          size="xs"
          value={value}
          variant="underlined"
          color={color}
          placeholder={placeholder}
          mt={2}
          pt={6}
          InputRightElement={
            value !== '' && (
              <Pressable
                onPress={() => {
                  onPressedRightElement && onPressedRightElement();
                }}>
                <Image source={rightElement} />
              </Pressable>
            )
          }
          onFocus={() => {
            onFocus && onFocus();
          }}
        />
      </HStack>

      <Box paddingTop={1} paddingBottom={2}>
        <Text fontSize="md" color={Colors.error}>
          {error}
        </Text>
      </Box>
    </Box>
  );
};
export default LabeledPhoneInput;
