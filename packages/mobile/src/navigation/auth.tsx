import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';

import {
  SignIn,
  AccountSetupPassword,
  AccountSetupEmailAddress,
  AccountSetupCertificates,
  AccountSetupProfile,
  AccountSetupAvatar,
  AddMedicalCertificate,
  AddPilotCertificate,
  CertificateRatings,
  AccountSetupComplete,
} from 'screens';
import { ArrowIcon } from 'components';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        headerBackTitleVisible: false,
        headerBackImage: () => <ArrowIcon />,
      }}>
      <AuthStack.Screen
        name="AccountSetupEmailAddress"
        component={AccountSetupEmailAddress}
        options={{
          title: '',
        }}
      />
      <AuthStack.Screen
        name="AccountSetupPassword"
        component={AccountSetupPassword}
        options={{
          title: '',
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: '' }}
      />

      <AuthStack.Screen
        name="AccountSetupProfile"
        component={AccountSetupProfile}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="AccountSetupAvatar"
        component={AccountSetupAvatar}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="AccountSetupCertificates"
        component={AccountSetupCertificates}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="AddMedicalCertificate"
        component={AddMedicalCertificate}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="AddPilotCertificate"
        component={AddPilotCertificate}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="AccountSetupComplete"
        component={AccountSetupComplete}
        options={{
          title: 'Account Setup',
        }}
      />
      <AuthStack.Screen
        name="CertificateRatings"
        component={CertificateRatings}
        options={{
          title: 'Account Setup',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
