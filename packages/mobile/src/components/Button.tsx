import React from 'react';
import { Pressable, HStack, Image, IBoxProps, Box } from 'native-base';
import { Label } from './Label';
import { Colors, Images } from 'common/src/config';
import { Google, Apple, Mail, EpicIcon, SteamIcon, DiscordIcon } from 'assets';
const colors = {
  primary: Colors.white,
  secondary: Colors.black,
  transparent: Colors.primary.blue,
  tertiary: Colors.tertiary.gray50,
  destructive: Colors.white,
  underline: Colors.primary.orange,
  apple: Colors.white,
  google: Colors.white,
  email: Colors.white,
};

const propsBySize = {
  large: {
    h: '40px',
    w: 'full',
  },
  medium: {
    h: '50px',
    w: '48',
  },
  small: {
    h: '30px',
    px: '4',
  },
  box: {
    h: '50px',
    w: 'full',
  },
};

const propsByType = {
  primary: {
    bg: Colors.primary.black,
    borderRadius: 2,
  },
  secondary: {
    bg: Colors.white,
    borderRadius: 2,
  },
  transparent: {
    bg: 'transparent',
  },
  tertiary: {
    bg: Colors.white,
    borderWidth: '1',
    borderRadius: 2,
    padding: 2,
    marginTop: 3,
    borderColor: Colors.tertiary.gray30,
  },
  destructive: {
    bg: Colors.misc.red,
  },
  apple: {
    borderRadius: 2,
    bg: Colors.white,
    padding: 2,
  },
  google: {
    borderRadius: 2,
    bg: Colors.white,
    padding: 2,
  },
  discord: {
    borderRadius: 2,
    bg: Colors.discord,
    padding: 2,
  },
  steam: {
    borderRadius: 2,
    bg: Colors.steam,
    padding: 2,
  },
  epic: {
    borderRadius: 2,
    bg: Colors.epic,
    padding: 2,
  },
  email: {
    borderRadius: 2,
    bg: Colors.primary.orange,
    padding: 2,
    marginTop: 3,
  },
};

type Props = IBoxProps & {
  type:
    | 'primary'
    | 'secondary'
    | 'transparent'
    | 'tertiary'
    | 'destructive'
    | 'underline'
    | 'apple'
    | 'google'
    | 'discord'
    | 'steam'
    | 'epic'
    | 'email';
  sz: 'large' | 'small' | 'medium' | 'box';
  text?: string;
  textSize?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

export const Button = ({
  type,
  sz,
  text,
  fontSize,
  textSize,
  disabled = false,
  loading = false,
  onPress,
  ...rest
}: Props) => {
  const renderLeftIcon = () => {
    if (type === 'email') {
      return <Mail />;
    }
    if (type === 'google') {
      return <Google />;
    }
    if (type === 'apple') {
      return <Apple />;
    }
    if (type === 'discord') {
      return <DiscordIcon />;
    }
    if (type === 'steam') {
      return <SteamIcon />;
    }
    if (type === 'epic') {
      return <EpicIcon />;
    }

    return null;
  };

  const renderRightIcon = () => {
    return null;
  };

  return (
    <Box {...rest}>
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        _disabled={{ opacity: 50 }}
        _pressed={{ opacity: 60 }}>
        {loading ? (
          <HStack
            rounded="large"
            alignItems="center"
            justifyContent="center"
            {...propsBySize[sz]}
            {...propsByType[type]}>
            {/* <AnimatedLogo
              width={36}
              height={36}
              color={'white'}
              backColor={'white'}
            /> */}
          </HStack>
        ) : (
          <HStack
            rounded="md"
            alignItems="center"
            justifyContent="center"
            space="2"
            {...propsBySize[sz]}
            {...propsByType[type]}>
            {renderLeftIcon()}
            {text && (
              <Label
                fontWeight="medium"
                fontSize={fontSize}
                textSize={textSize === 'large' ? 'medium' : 'small'}
                color={colors[type]}
                textDecorationLine={type === 'underline' ? 'underline' : ''}>
                {text}
              </Label>
            )}

            {renderRightIcon()}
          </HStack>
        )}
      </Pressable>
    </Box>
  );
};

export default Button;
