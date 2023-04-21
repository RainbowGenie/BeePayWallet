import {PixelRatio} from 'react-native';
import {extendTheme} from 'native-base';

const pr = PixelRatio.get();

export const theme = extendTheme({
  breakpoints: {
    sm: 300,
    md: pr >= 3 ? 370 : 380,
    lg: 430,
    xl: 480,
  },
  colors: {
    primary: {
      50: '#FF5E9D00',
      100: '#FF5E9D99',
      200: '#FFEBF3',
      300: '#FF5E9D',
    },
    gray: {
      50: '#F7F6F6',
      100: '#EFEDEE',
      200: '#E3E1E2',
      300: '#CDC9CA',
      400: '#7A7074',
      500: '#7A7074',
      600: '#575153',
      700: '#353133',
      800: '#201E1F',
      900: '#4C4E52',
      1000: '#000000',
    },
    danger: {
      200: '#FBE0E0',
      600: '#CD2E2E',
    },
    warning: {
      200: '#FBE9E0',
      600: '#EB8F65',
    },
    success: {
      200: '#D3F4E7',
      600: '#17B578',
    },
    highlight: {
      200: '#D4E2FC',
      600: '#276EF1',
    },
    darkGray: {
      300: '#7A7D83',
    },
    fillLight: {
      300: '#78788033', // Fill Color/Light/Primary 20%
      400: '#7676801F', // Fill Color/Light/Tertiary 12%
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: 'Montserrat-Thin',
        italic: 'Montserrat-ThinItalic',
      },
      200: {
        normal: 'Montserrat-ExtraLight',
        italic: 'Montserrat-ExtraLightItalic',
      },
      300: {
        normal: 'Montserrat-Light',
        italic: 'Montserrat-LightItalic',
      },
      400: {
        normal: 'Montserrat-Regular',
        italic: 'Montserrat-Italic',
      },
      500: {
        normal: 'Montserrat-Medium',
        italic: 'Montserrat-MediumItalic',
      },
      600: {
        normal: 'Montserrat-SemiBold',
        italic: 'Montserrat-SemiBoldItalic',
      },
      700: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
      800: {
        normal: 'Montserrat-ExtraBold',
        italic: 'Montserrat-ExtraBoldItalic',
      },
      900: {
        normal: 'Montserrat-Black',
        italic: 'Montserrat-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
  fontSizes: {
    '3xs': 8,
    '3xl': 32,
    '4xl': 40,
  },
  components: {
    Button: {
      baseStyle: () => ({
        borderRadius: 4,
      }),
    },
    Actionsheet: {
      defaultProps: {
        pt: 2,
      },
    },
    ActionsheetContent: {
      baseStyle: {
        px: 0,
        roundedTop: 12,
        maxHeight: '100%',
        _dragIndicator: {
          bg: 'gray.300',
          height: 1,
          width: 20,
          borderRadius: 2,
          marginTop: -1,
        },
      },
    },
    Progress: {
      baseStyle: {
        bg: 'gray.100',
        _filledTrack: {
          bg: 'primary.300',
          borderRadius: 'full',
        },
      },
    },
    ModalContent: {
      baseStyle: {
        maxHeight: '100%',
      },
    },
  },
});
