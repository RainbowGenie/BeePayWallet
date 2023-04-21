import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from 'common/src/config';
import P from './P';

type Props = {
  label: string;
  placeHolder: string;
  values: string[];
  setValues: (v: string[]) => void;
  items?: Array<string>;
  zIndex: number;
  error?: string;
  disabled?: boolean;
};

export const LabeledMultiPicker = ({
  label,
  placeHolder,
  setValues,
  values,
  items,
  zIndex,
  error,
  disabled,
}: Props) => {
  const [open, setOpen] = useState(false);

  const itemArray = items?.map(function (obj) {
    return { label: obj, value: obj };
  });

  return (
    <>
      <Box py={2}>
        <Text color="black" fontSize="2xs" opacity={0.6}>
          {label}
        </Text>
      </Box>
      <DropDownPicker
        disabled={disabled}
        items={itemArray}
        value={values}
        setValue={setValues}
        open={open}
        setOpen={setOpen}
        placeholder={placeHolder}
        multiple={true}
        mode="BADGE"
        badgeDotColors={[
          '#e76f51',
          '#00b4d8',
          '#e9c46a',
          '#e76f51',
          '#8ac926',
          '#00b4d8',
          '#e9c46a',
        ]}
        zIndex={zIndex}
      />
      {!!error && (
        <Box paddingTop={1} paddingBottom={2}>
          <P sz="small" color={Colors.error}>
            {error}
          </P>
        </Box>
      )}
    </>
  );
};

export default LabeledMultiPicker;
