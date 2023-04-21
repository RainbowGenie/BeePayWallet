import React, { useState } from 'react';
import { Pressable, Text, Image } from 'native-base';

type Props = {
  text: string;
  image: string;
};
// RatingButton
export const RatingButton = ({ text, image }: Props) => {
  const [show, setShow] = useState<Boolean>(false);
  return (
    <Pressable
      borderRadius={10}
      flexDirection="row"
      padding={2}
      justifyContent="space-between"
      onPress={() => {
        setShow(!show);
      }}
      backgroundColor={show === false ? '#22293c' : '#181a20'}>
      <Text color="white" fontSize="xs">
        {text}
      </Text>
      {show === true ? (
        <Image source={image} alt="CheckImage" width={5} height={5} />
      ) : null}
    </Pressable>
  );
};

export default RatingButton;
