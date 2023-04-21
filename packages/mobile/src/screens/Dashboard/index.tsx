import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Wallet, Home } from 'screens';

const Tab = createBottomTabNavigator();
// Dashboard
function Dashboard(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ tabBarLabel: 'Wallet' }}
      />
      <Tab.Screen
        name="LiveCam"
        component={Home}
        options={{ tabBarLabel: 'Live Cam' }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
