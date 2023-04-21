import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from 'common/src/config';
import P from './P';

type Props = {
  label: string;
  placeHolder: string;
  onSelectItem: (item: string) => void;
  selectedItem: string | null;
  items?: Array<string>;
  zIndex: number;
  error?: string;
};

export const LabeledPicker = ({
  label,
  placeHolder,
  onSelectItem,
  selectedItem,
  items,
  zIndex,
  error,
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
        items={itemArray}
        open={open}
        value={selectedItem || ''}
        setOpen={setOpen}
        placeholder={placeHolder}
        closeAfterSelecting={true}
        onSelectItem={item => onSelectItem(item.value)}
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

export default LabeledPicker;
