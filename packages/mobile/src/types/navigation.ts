import { NavigatorScreenParams } from '@react-navigation/native';
import { User } from 'common/src/types';

export type RootStackParamList = {
  WelcomeNavigation: undefined | NavigatorScreenParams<WelcomeStackParamList>;
  AuthNavigation: undefined | NavigatorScreenParams<AuthStackParamList>;
  HomeNavigation: undefined | NavigatorScreenParams<HomeStackParamList>;
  Splash: undefined;
};

export type WelcomeStackParamList = {
  GetStarted: undefined;
  Welcome: undefined;
};

export type AuthStackParamList = {
  AccountSetupEmailAddress: undefined;
  AccountSetupPassword: {
    email: string;
  };
  SignIn: undefined;
  AccountSetupProfile:
    | {
        user: User;
      }
    | {
        email: string;
      }
    | undefined;
  AccountSetupAvatar: undefined;
  AccountSetupCertificates: undefined;
  AddMedicalCertificate: undefined;
  AddPilotCertificate: undefined;
  CertificateRatings: undefined;
};

export type HomeStackParamList = {
  Wallet: undefined;
  LiveCam: undefined;
  Info: undefined;
  Settings: undefined;
};
