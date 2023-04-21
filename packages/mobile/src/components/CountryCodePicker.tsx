import React, { useState } from 'react';
import {
  Box,
  Input as NBInput,
  Pressable,
  IBoxProps,
  Divider,
  Icon,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import P from './P';

type Props = IBoxProps & {
  label?: string;
  hint?: string;
  isError?: boolean;
  country: Country;
  countryCode: CountryCode;
  onSelect: (c: Country) => void;
};

export const CountryCodePicker = ({
  label,
  hint,
  country,
  countryCode,
  onSelect,
  isError,
  ...rest
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box {...rest}>
      <CountryPicker
        withFilter
        withFlag
        withCallingCode
        countryCode={countryCode}
        onSelect={onSelect}
        onClose={() => setVisible(false)}
        visible={visible}
        withFlagButton={false}
      />
      {!!label && (
        <P opacity={0.6} pt="2" sz="xsmall" color="black">
          {label}
        </P>
      )}
      <Pressable onPress={() => setVisible(true)} pointerEvents="box-only">
        <NBInput
          variant="unstyled"
          value={`+${country.callingCode[0]}`}
          fontSize="md"
          color="black"
          px="1"
          editable={false}
          InputRightElement={
            <Icon
              as={MaterialIcons}
              name="keyboard-arrow-down"
              size="6"
              color="black"
            />
          }
        />
      </Pressable>
      <Divider bg={isError ? 'danger.600' : 'gray.200'} />
      {!!hint && (
        <P sz="xsmall" color={isError ? 'danger.600' : 'gray.400'} mt="2">
          {hint}
        </P>
      )}
    </Box>
  );
};

export default CountryCodePicker;
