import React from 'react';
import { Pressable, Image, Input } from 'native-base';
import P from './P';
import { Images, Colors } from 'common/src/config';
import { useWindowDimensions } from 'react-native';

//
type Props = {
  text: string;
  isSelected: boolean;
  setSelected: () => void;
};
export const SelectableButton = ({ text, isSelected, setSelected }: Props) => {
  return (
    <Pressable
      borderRadius={10}
      flexDirection="row"
      padding={2}
      w={useWindowDimensions().width - 50}
      borderWidth={1}
      justifyContent="space-between"
      onPress={setSelected}
      borderColor={isSelected ? Colors.primary.blue : Colors.tertiary.gray30}>
      <P color="black" textAlign="center" sz="medium">
        {text}
      </P>
      {isSelected ? (
        <Image
          source={Images.GreenCheck}
          alt="CheckImage"
          width={5}
          height={5}
        />
      ) : null}
    </Pressable>
  );
};
