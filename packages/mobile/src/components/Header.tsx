import React from 'react';
import { HStack, Image } from 'native-base';
import { ArrowButArrowButtonton } from './ArrowButton';
// import { ImageSourcePropType } from 'react-native';
import { Label } from './Label';
type Props = {
  title: string;
  image?: any;
  goback?: () => void;
};

export const Header = ({ title, image, goback }: Props) => {
  return (
    <HStack
      safeAreaTop
      marginX={6}
      justifyContent="space-between"
      alignItems="center">
      <ArrowButton goback={goback} />
      <Label sz="medium">{title}</Label>
      {image && (
        <Image
          width={10}
          height={10}
          source={image}
          alt="headerImage"
          resizeMode="cover"
        />
      )}
    </HStack>
  );
};

export default Header;
