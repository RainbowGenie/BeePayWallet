import React from 'react';
import { Box, Text, Input, Pressable, Image, HStack } from 'native-base';
import { Colors, Images } from 'common/src/config';
import P from './P';
import { TooltipIcon, EyeHidden, ShowPassword, Calendar } from 'assets';
type Props = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  error: string;
  isSecure?: boolean;
  isShowPassword?: boolean;
  color?: string;
  disabled?: boolean;
  rightElement?: any;
  onChange?: (text: string) => void;
  onPressedRightElement?: () => void;
  onFocus?: () => void;
  onPressToolTip?: () => void;
};

export const LabeledInput = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  error,
  isSecure = false,
  isShowPassword = true,
  color = 'black',
  disabled,
  rightElement,
  onPressedRightElement,
  onFocus,
  onPressToolTip,
}: Props) => {
  return (
    <Box>
      <Box paddingTop={2}>
        <HStack alignItems="center" space="2">
          <Text color="black" fontSize="2xs" opacity={0.6}>
            {label}
          </Text>
          {onPressToolTip && (
            <Pressable hitSlop={6} onPress={onPressToolTip}>
              <TooltipIcon />
            </Pressable>
          )}
        </HStack>
      </Box>
      <Input
        mb={!error ? '4' : '0'}
        isDisabled={disabled}
        type={!isShowPassword && isSecure ? 'password' : 'text'}
        onChangeText={text => {
          onChange && onChange(text);
        }}
        fontSize="md"
        size="s"
        value={value}
        variant="underlined"
        color={color}
        placeholder={placeholder}
        mt={2}
        InputRightElement={
          type === 'calendar' ? (
            <Calendar />
          ) : isSecure ? (
            <Pressable
              onPress={() => {
                onPressedRightElement && onPressedRightElement();
              }}>
              <EyeHidden />
            </Pressable>
          ) : (
            value !== '' && (
              <Pressable
                onPress={() => {
                  onPressedRightElement && onPressedRightElement();
                }}>
                <ShowPassword />
              </Pressable>
            )
          )
        }
        onFocus={() => {
          onFocus && onFocus();
        }}
      />
      {!!error && (
        <Box paddingTop={1} paddingBottom={2}>
          <P sz="small" color={Colors.error}>
            {error}
          </P>
        </Box>
      )}
    </Box>
  );
};
export default LabeledInput;
