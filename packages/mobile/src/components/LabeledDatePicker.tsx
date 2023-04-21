import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { LabeledInput, P } from 'components';
import { formatDateToString } from 'common/src/utils';
import { Box, HStack, Image } from 'native-base';
import { Colors, Images } from 'common/src/config';

type Props = {
  label: string;
  date: Date;
  setDate: (d: Date) => void;
  error?: string;
  hasMaxDate?: boolean;
  onPressToolTip?: () => void;
};

export const LabeledDatePicker = ({
  label,
  date,
  setDate,
  error,
  hasMaxDate,
  onPressToolTip,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <LabeledInput
        label={label}
        type="calendar"
        value={formatDateToString(date, 'MM/dd/yyyy')}
        error={''}
        placeholder="Select your date of birth"
        onFocus={() => {
          setOpen(true);
        }}
        onPressToolTip={onPressToolTip}
      />
      <DatePicker
        onPress={() => {
          setOpen(true);
        }}
        date={date}
        mode="date"
        textColor="black"
        maximumDate={hasMaxDate ? new Date() : undefined}
        modal
        open={open}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {!!error && (
        <Box paddingBottom={2}>
          <P sz="small" color={Colors.error}>
            {error}
          </P>
        </Box>
      )}
    </Box>
  );
};

export default LabeledDatePicker;
