import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground, StatusBar, AsyncStorage } from 'react-native';
import { RootStackParamList } from 'types';
import { Images } from 'config';

const Splash = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    loadStoredValue();
  }, []);
  const loadStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem('isPasscodeSet');
      const passcode = await AsyncStorage.getItem('passcode');
      if (value === 'true') {
        if (passcode != null) {
          setTimeout(() => {
            navigate('AuthNavigation', {
              screen: 'AccountConfirmPasscode',
              params: { passcode: passcode },
            });
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('WelcomeNavigation', { screen: 'GetStarted' });
          }, 2000);
        }
      } else {
        setTimeout(() => {
          navigate('WelcomeNavigation', { screen: 'GetStarted' });
        }, 2000);
      }
    } catch (error) {
      console.log('Error loading stored value:', error);
    }
  };
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
