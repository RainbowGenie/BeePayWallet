import React, { useState } from 'react';
import {
  Box,
  HStack,
  Image,
  Text,
  Button,
  StatusBar,
  Center,
  VStack,
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Constants, Images, Colors } from 'common/src/config';
import { Header, SelectableButton } from 'components';
import { RootStackParamList } from 'types';

// AccountSetupRating
const CertificateRatings = () => {
  // State & Variables
  const { navigate, goBack } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const [ratings, setRatings] = useState(Constants.ratings);

  // Functions

  const onNextHandler = () => {
    navigate('HomeNavigation');
  };

  const onAddCustomHandler = () => {
    console.log('onAddCustomHandler');
    // setRatings(...ratings, 'custom');
  };

  const setRatingSelected = (rating: boolean) => {};
  const onBack = () => {
    goBack();
  };

  return (
    <Box height="full">
      <Spinner />
      <StatusBar backgroundColor="transparent" translucent />
      <Header
        goback={onBack}
        title="Account Setup"
        image={Images.AvatarImage}
      />
      <Box
        marginX={10}
        flex={1}
        justifyContent="space-between"
        paddingBottom={6}>
        <Box>
          <Center>
            <Image
              h="120"
              w="120"
              source={Images.RatingImage}
              alt="CertificationImage"
            />
            <Text color="white" fontSize="xl" fontWeight="bold">
              Ratings
            </Text>
            <Text color={Colors.content.des} fontSize="xs">
              Upload your essential certificates to your account
            </Text>
          </Center>
          <VStack space={4} paddingTop={6}>
            {ratings.map((rating, _index) => (
              <SelectableButton
                text={rating}
                isSelected={false}
                setSelected={setRatingSelected}
              />
            ))}
            <Box justifyContent="center" alignItems="center">
              <Button
                width="1/2"
                borderRadius="full"
                onPress={onAddCustomHandler}
                paddingX={5}
                backgroundColor="white">
                <Text color="black" fontSize="xs">
                  Add Custom
                </Text>
              </Button>
            </Box>
          </VStack>
        </Box>
        {/* Button */}
        <Box>
          <HStack justifyContent="flex-end" alignItems="flex-end">
            <Button
              onPress={onNextHandler}
              borderRadius={30}
              backgroundColor="#1991ff"
              marginTop={5}>
              <Text paddingX={3} color="white" fontSize="xs" fontWeight="bold">
                Next
              </Text>
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificateRatings;
