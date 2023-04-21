import React from 'react';
import { Stack, Image } from 'native-base';
import { Label } from './Label';
import { P } from './P';
import { Colors } from 'common/src/config';
import { SignupProfileIcon, ShieldFilled, Shield } from 'assets';
type Props = {
  image: string;
  title: string;
  label: string;
};
export const AccountSetupDescription = ({ image, title, label }: Props) => {
  return (
    <Stack alignItems="center" px="8" paddingTop={10}>
      {image === 'SignupProfileIcon' ? (
        <SignupProfileIcon />
      ) : image === 'ShieldFilled' ? (
        <ShieldFilled />
      ) : (
        <Shield />
      )}
      <Label textAlign="center" color="black" sz="large" marginTop={4}>
        {title}
      </Label>
      <P textAlign="center" color={Colors.content.des} sz="small">
        {label}
      </P>
    </Stack>
  );
};

export default AccountSetupDescription;
