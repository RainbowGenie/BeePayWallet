import { Box, HStack, Image, Stack, StatusBar } from 'native-base';
import { ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { HomeStackParamList } from 'types';
import { Label } from 'components';
import { Images } from 'config';
import {
  Bitcoin,
  BNB,
  BUSD,
  Buy,
  Ethereum,
  Notification,
  Receive,
  Send,
  Setting,
  Trade,
  XRP,
} from 'assets';
// Home
function Wallet(): JSX.Element {
  // State
  const [isCoins, setIsCoins] = useState(true);

  return (
    <Box flex={1} safeAreaTop bg={'#BF8122'}>
      <StatusBar backgroundColor="transparent" translucent />
      <Stack justifyContent={'center'} flex={1}>
        <Stack px="6" justifyContent={'center'} pb="40px">
          <HStack justifyContent={'space-between'} mt={'40px'} px={'20px'}>
            <Notification />
            <Setting />
          </HStack>
          <Label sz="xlarge" fontWeight={'bold'} textAlign={'center'}>
            $9,958.20
          </Label>
          <Label sz="small" textAlign={'center'} mb={'40px'}>
            My Wallet
          </Label>
          <HStack justifyContent={'center'} space={10}>
            <Stack alignItems={'center'}>
              <Send />
              <Label sz="small" color="black">
                Send
              </Label>
            </Stack>
            <Stack alignItems={'center'}>
              <Receive />
              <Label sz="small" color="black">
                Receive
              </Label>
            </Stack>
            <Stack alignItems={'center'}>
              <Buy />
              <Label sz="small" color="black">
                Buy
              </Label>
            </Stack>
            <Stack alignItems={'center'}>
              <Trade />
              <Label sz="small" color="black">
                Trade
              </Label>
            </Stack>
          </HStack>
        </Stack>
        <Stack
          w={'full'}
          bg={'black'}
          borderTopLeftRadius={'8px'}
          borderTopRightRadius={'8px'}
          mt={'-5px'}
          flex={1}>
          <HStack justifyContent={'center'} pt={'30px'}>
            <Label
              sz="small"
              color="white"
              bg="black"
              w={'50%'}
              textAlign="center"
              fontWeight="bold"
              pb={'15px'}
              borderBottomColor={isCoins ? 'white' : '#BF8122'}
              borderBottomWidth={'4px'}
              onPress={() => setIsCoins(true)}>
              Coins
            </Label>
            <Label
              sz="small"
              color="white"
              bg="black"
              w={'50%'}
              textAlign="center"
              fontWeight="bold"
              pb={'15px'}
              borderBottomColor={isCoins ? '#BF8122' : 'white'}
              borderBottomWidth={'4px'}
              onPress={() => setIsCoins(false)}>
              Dollars
            </Label>
          </HStack>
          <ScrollView>
            <Stack>
              <HStack pl="20px" space={'20px'} flex={1} alignItems={'center'}>
                <BUSD />
                <HStack
                  flex={1}
                  borderBottomColor={'#D98F26'}
                  borderBottomWidth={2}
                  py="20px"
                  px="10px">
                  <Stack justifyContent={'flex-start'} flex={1}>
                    <Label sz="medium" color="white" fontWeight="bold">
                      BUSD
                    </Label>
                    <HStack space={'10px'}>
                      <Label sz="small" color="#7f7f7f" fontWeight="bold">
                        1000
                      </Label>
                      <Label sz="small" color="#6dab9c" fontWeight="bold">
                        +2.89%
                      </Label>
                    </HStack>
                  </Stack>
                  <Stack alignItems={'center'} flex={1}>
                    <Stack alignItems={'flex-start'}>
                      <Label sz="medium" color="white" fontWeight="bold">
                        BUSD
                      </Label>
                      <Label sz="medium" color="#7f7f7f" fontWeight="bold">
                        $1,001
                      </Label>
                    </Stack>
                  </Stack>
                </HStack>
              </HStack>
              <HStack pl="20px" space={'20px'} flex={1} alignItems={'center'}>
                <Bitcoin />
                <HStack
                  flex={1}
                  borderBottomColor={'#D98F26'}
                  borderBottomWidth={2}
                  py="20px"
                  px="10px">
                  <Stack justifyContent={'flex-start'} flex={1}>
                    <Label sz="medium" color="white" fontWeight="bold">
                      Bitcoin
                    </Label>
                    <HStack space={'10px'}>
                      <Label sz="small" color="#7f7f7f" fontWeight="bold">
                        0.192412
                      </Label>
                      <Label sz="small" color="#6dab9c" fontWeight="bold">
                        +0.47%
                      </Label>
                    </HStack>
                  </Stack>
                  <Stack alignItems={'center'} flex={1}>
                    <Stack alignItems={'flex-start'}>
                      <Label sz="medium" color="white" fontWeight="bold">
                        BTC
                      </Label>
                      <Label sz="medium" color="#7f7f7f" fontWeight="bold">
                        $4,000
                      </Label>
                    </Stack>
                  </Stack>
                </HStack>
              </HStack>
              <HStack pl="20px" space={'20px'} flex={1} alignItems={'center'}>
                <Ethereum />
                <HStack
                  flex={1}
                  borderBottomColor={'#D98F26'}
                  borderBottomWidth={2}
                  py="20px"
                  px="10px">
                  <Stack justifyContent={'flex-start'} flex={1}>
                    <Label sz="medium" color="white" fontWeight="bold">
                      Ethereum
                    </Label>
                    <HStack space={'10px'}>
                      <Label sz="small" color="#7f7f7f" fontWeight="bold">
                        1
                      </Label>
                      <Label sz="small" color="#6dab9c" fontWeight="bold">
                        +1.37%
                      </Label>
                    </HStack>
                  </Stack>
                  <Stack alignItems={'center'} flex={1}>
                    <Stack alignItems={'flex-start'}>
                      <Label sz="medium" color="white" fontWeight="bold">
                        ETH
                      </Label>
                      <Label sz="medium" color="#7f7f7f" fontWeight="bold">
                        $1,530
                      </Label>
                    </Stack>
                  </Stack>
                </HStack>
              </HStack>
              <HStack pl="20px" space={'20px'} flex={1} alignItems={'center'}>
                <XRP />
                <HStack
                  flex={1}
                  borderBottomColor={'#D98F26'}
                  borderBottomWidth={2}
                  py="20px"
                  px="10px">
                  <Stack justifyContent={'flex-start'} flex={1}>
                    <Label sz="medium" color="white" fontWeight="bold">
                      XRP
                    </Label>
                    <HStack space={'10px'}>
                      <Label sz="small" color="#7f7f7f" fontWeight="bold">
                        1,000
                      </Label>
                      <Label sz="small" color="#ea0611" fontWeight="bold">
                        -1.69%
                      </Label>
                    </HStack>
                  </Stack>
                  <Stack alignItems={'center'} flex={1}>
                    <Stack alignItems={'flex-start'}>
                      <Label sz="medium" color="white" fontWeight="bold">
                        XRP
                      </Label>
                      <Label sz="medium" color="#7f7f7f" fontWeight="bold">
                        $393.20
                      </Label>
                    </Stack>
                  </Stack>
                </HStack>
              </HStack>
              <HStack
                pl="20px"
                space={'20px'}
                flex={1}
                alignItems={'center'}
                mb={'40px'}>
                <BNB />
                <HStack flex={1} py="20px" px="10px">
                  <Stack justifyContent={'flex-start'} flex={1}>
                    <Label sz="medium" color="white" fontWeight="bold">
                      BNB
                    </Label>
                    <HStack space={'10px'}>
                      <Label sz="small" color="#7f7f7f" fontWeight="bold">
                        10
                      </Label>
                      <Label sz="small" color="#ea0611" fontWeight="bold">
                        -0.77%
                      </Label>
                    </HStack>
                  </Stack>
                  <Stack alignItems={'center'} flex={1}>
                    <Stack alignItems={'flex-start'}>
                      <Label sz="medium" color="white" fontWeight="bold">
                        BNB
                      </Label>
                      <Label sz="medium" color="#7f7f7f" fontWeight="bold">
                        $3034
                      </Label>
                    </Stack>
                  </Stack>
                </HStack>
              </HStack>
            </Stack>
          </ScrollView>
        </Stack>
        {/* <HStack space="4" alignItems="center">
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
          </Box> */}
      </Stack>
    </Box>
  );
}
export default Wallet;
