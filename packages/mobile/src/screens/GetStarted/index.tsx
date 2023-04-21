import React from 'react';
import { Box, StatusBar, Stack, HStack, VStack, Checkbox } from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Images } from 'config';
import { Button, Label, P } from 'components';
import { RootStackParamList } from 'types';
import { BeeAppIcon, DefaultAvatar, WelcomeText } from 'assets';

const GetStarted = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const onGoWelcomeHandler = () => {
    navigate('WelcomeNavigation', { screen: 'Welcome' });
  };
  const onGoSignInHandler = () => {
    // navigate('AuthNavigation', { screen: 'SignIn' });
    navigate('HomeNavigation', { screen: 'Wallet' });
  };

  return (
    <Box flex={1}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={Images.welcomeBackground}
        style={{ flex: 1 }}
        resizeMode="stretch">
        <Box
          flex={1}
          justifyContent="center"
          alignItems={'center'}
          marginX={10}>
          <BeeAppIcon />
          <WelcomeText style={{ marginTop: 20 }} />
          <ImageBackground
            source={Images.linearBackground}
            style={{ width: '100%', marginTop: 20 }}
            resizeMode="stretch">
            <VStack
              justifyContent="center"
              borderRadius={'10px'}
              space={'10px'}
              alignItems="center"
              pt={'10px'}
              w={'full'}
              // bg={{
              //   linearGradient: {
              //     colors: [
              //       '#D98F26',
              //       '#BF8122',
              //       '#AB761F',
              //       '#A4721E',
              //       '#A9761F',
              //       '#B98221',
              //       '#D39525',
              //       '#D79826',
              //       '#FDF576',
              //       '#F4CC69',
              //     ],
              //     angle: '90deg',
              //     locations: [
              //       0, 0.0448, 0.0895, 0.1201, 0.19, 0.2779, 0.3752, 0.3897,
              //       0.7819, 1,
              //     ],
              //   },
              // }}
            >
              <DefaultAvatar />
              <Button
                fontSize={'xl'}
                textSize={'small'}
                bg={'#060606'}
                color={'white'}
                py={'7px'}
                w={'80%'}
                textAlign={'center'}
                borderRadius={'8px'}
                type={'primary'}
                sz={'small'}
                text={'Sign in'}
                onPress={onGoSignInHandler}
              />
              <Button
                fontSize={'xl'}
                textSize={'small'}
                bg={'#060606'}
                color={'white'}
                py={'7px'}
                w={'80%'}
                textAlign={'center'}
                borderRadius={'8px'}
                type={'primary'}
                sz={'small'}
                text={'Sign up'}
              />
              <HStack
                space="4"
                justifyContent="space-between"
                mt="5px"
                w={'75%'}>
                <HStack
                  space="2"
                  alignItems="center"
                  justifyContent="flex-start">
                  <Checkbox
                    value={''}
                    bg={'#0000007f'}
                    borderColor="#ffffff00"
                    _checked={{ backgroundColor: 'red' }}
                    fontSize={'sm'}>
                    <Label
                      fontSize={'sm'}
                      textSize={'small'}
                      color={'black'}
                      py={'7px'}
                      textAlign={'center'}
                      borderRadius={'8px'}>
                      Remember me
                    </Label>
                  </Checkbox>
                </HStack>

                <Label
                  fontSize={'sm'}
                  textSize={'small'}
                  color={'black'}
                  py={'7px'}
                  textAlign={'center'}
                  borderRadius={'8px'}>
                  Forgot Password?
                </Label>
              </HStack>
              <Button
                fontSize={'xl'}
                textSize={'small'}
                bg={'#060606'}
                color={'white'}
                py={'4px'}
                px={'20px'}
                mb={'40px'}
                mt={'20px'}
                textAlign={'center'}
                borderRadius={'8px'}
                type={'primary'}
                sz={'small'}
                text={'Get Referral Code'}
              />
            </VStack>
          </ImageBackground>
        </Box>
      </ImageBackground>
    </Box>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor:
      'linear-gradient(90deg, #D98F26 0%, #BF8122 4.48%, #AB761F 8.95%, #A4721E 12.01%, #A9761F 19%, #B98221 27.79%, #D39525 37.52%, #D79826 38.97%, #FDF576 78.19%, #F4CC69 100%)',
  },
});
export default GetStarted;
