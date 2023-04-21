import { Box, HStack, Image, Stack } from 'native-base';
import { ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { AuthStackParamList, HomeStackParamList } from 'types';
import { Button, Label } from 'components';
import { Colors, Images } from 'common/src/config';
import { useUser } from 'common/src/services/userServices';
// Home
function Home(): JSX.Element {
  // State
  const { navigate, setOptions } =
    useNavigation<NavigationProp<HomeStackParamList>>();
  const { goBack } = useNavigation<NavigationProp<AuthStackParamList>>();
  const user = useUser();
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <Image
          size="35"
          borderRadius="30"
          source={
            user.profilePictureUrl
              ? { uri: user.profilePictureUrl }
              : Images.DefaultAvatar
          }
          marginRight={4}
          marginBottom={2}
        />
      ),
    });
  }, [setOptions, user]);

  return (
    <Box flex={1} safeAreaTop>
      <Button type="underline" sz="small" onPress={goBack} text="Go back" />
      <ScrollView>
        <Stack px="6" space="4">
          <Label sz="medium">Dashboard</Label>
          <Label sz="xlarge">
            Hello,{'\n'}
            {user.doc?.name}
          </Label>
          <HStack space="4" alignItems="center">
            <Box
              py="2"
              px="4"
              borderRadius="35"
              backgroundColor={Colors.primary.blue}>
              <Label sz="small" color="white">
                Overview
              </Label>
            </Box>
            <Label
              sz="small"
              borderRadius="30"
              backgroundColor={Colors.primary.blue}>
              Currency
            </Label>
          </HStack>
          <Box
            borderColor={Colors.primary.gray}
            borderWidth="1"
            borderRadius="20"
            p="4">
            <Stack>
              <Label sz="xlarge" bold color={Colors.primary.blue}>
                210
              </Label>
              <Label bold sz="small" color="black">
                Total hours flown
              </Label>
            </Stack>
          </Box>
          <Box
            borderColor={Colors.primary.gray}
            borderWidth="1"
            borderRadius="20"
            p="4">
            <Stack>
              <Label sz="xlarge" bold color={Colors.primary.orange}>
                LAX - ATL
              </Label>
              <Label sz="xlarge" bold color={Colors.primary.orange}>
                LAX - ATL
              </Label>
              <Label bold sz="small" color="black">
                Last flights logged
              </Label>
            </Stack>
          </Box>
        </Stack>
      </ScrollView>
    </Box>
  );
}
export default Home;
