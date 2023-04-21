import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeStackParamList } from 'types';
import { Wallet, Home } from 'screens';
import {
  InfoTabIcon,
  LiveCamTabIcon,
  SettingsTabIcon,
  WalletTabIcon,
} from 'assets';
import { Text, View } from 'native-base';

const HomeStack = createBottomTabNavigator<HomeStackParamList>();

// HomeNavigation
const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: '#D98F26',
          borderTopWidth: 2,
          paddingHorizontal: 20,
          height: 100,
        },
      }}>
      <HomeStack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <View marginBottom={'25px'}>
              <Text
                color={focused ? '#fbca00' : '#aaa'}
                fontSize={16}
                fontWeight="bold">
                Wallet
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View marginTop={'25px'}>
              <WalletTabIcon fill={focused ? '#fbca00' : '#aaa'} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="LiveCam"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <View marginBottom={'25px'}>
              <Text
                color={focused ? '#fbca00' : '#aaa'}
                fontSize={16}
                fontWeight="bold">
                Live Cam
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View marginTop={'25px'}>
              <LiveCamTabIcon fill={focused ? '#fbca00' : '#aaa'} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Info"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <View marginBottom={'25px'}>
              <Text
                color={focused ? '#fbca00' : '#aaa'}
                fontSize={16}
                fontWeight="bold">
                Info
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View marginTop={'25px'}>
              <InfoTabIcon fill={focused ? '#fbca00' : '#aaa'} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Settings"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <View marginBottom={'25px'}>
              <Text
                color={focused ? '#fbca00' : '#aaa'}
                fontSize={16}
                fontWeight="bold">
                Settings
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View marginTop={'25px'}>
              <SettingsTabIcon fill={focused ? '#fbca00' : '#aaa'} />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
