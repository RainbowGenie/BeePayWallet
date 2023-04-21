import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName, useColorScheme } from 'react-native';
import Config from 'react-native-config';

import { AuthProvider } from 'common/src/services/authServices';
import AuthNavigation from './auth';
import WelcomeNavigation from './welcome';
import HomeNavigation from './home';
import { Splash } from 'screens';
import { RootStackParamList } from 'types';
// import { ToastProvider } from 'services';

const Stack = createStackNavigator<RootStackParamList>();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

// Default Navigation
const Navigation = () => {
  const scheme = useColorScheme() as ColorSchemeName;

  return (
    <NavigationContainer theme={scheme === 'dark' ? theme : theme}>
      {/* <ToastProvider> */}
      <AuthProvider session="" webClientId={Config?.GOOGLE_WEB_CLIENT_ID || ''}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen
            name="WelcomeNavigation"
            component={WelcomeNavigation}
          />
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        </Stack.Navigator>
      </AuthProvider>
      {/* </ToastProvider> */}
    </NavigationContainer>
  );
};

export default Navigation;
