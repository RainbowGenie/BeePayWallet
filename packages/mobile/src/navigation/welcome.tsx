import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Welcome } from 'screens';
import { WelcomeStackParamList } from 'types';

const WelComeStack = createStackNavigator<WelcomeStackParamList>();

const WelcomeNavigation = () => {
  return (
    <WelComeStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <WelComeStack.Screen name="GetStarted" component={GetStarted} />
      <WelComeStack.Screen name="Welcome" component={Welcome} />
    </WelComeStack.Navigator>
  );
};

export default WelcomeNavigation;
