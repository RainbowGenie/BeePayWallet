import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { RootStackParamList } from 'types';
import { Images } from 'config';

const Splash = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigate('WelcomeNavigation', { screen: 'GetStarted' });
    }, 2000);
  }, []);
  return (
    <Box flex={1}>
      <ImageBackground source={Images.splashImage} style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </ImageBackground>
    </Box>
  );
};

export default Splash;
