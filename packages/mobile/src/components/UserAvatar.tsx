import React from 'react';
import { Avatar, Pressable, IAvatarProps, Image, Box } from 'native-base';
import { Colors } from 'common/src/config/colors';
import { Images } from 'common/src/config/images';
// import { Camera } from 'assets';
type Props = IAvatarProps & {
  photo?: string;
  showAdd?: boolean;
  openImagePicker?: (() => void) | null;
  sz?: 'small' | 'medium' | 'large' | 'xLarge';
};

const avatarSizes = {
  small: '32px',
  medium: '48px',
  large: '56px',
  xLarge: '136px',
};

const UserAvatar = ({
  photo,
  showAdd,
  openImagePicker,
  sz = 'large',
  color = Colors.primary.orange,
  ...rest
}: Props) => {
  const size = avatarSizes[sz];

  return (
    <Box>
      <Pressable onPress={openImagePicker}>
        <Avatar
          bg={color}
          width={size}
          height={size}
          alignItems="center"
          justifyContent="center"
          {...rest}>
          {showAdd && (
            <Image source={Images.CameraImage} size="6" color={Colors.white} />
          )}
        </Avatar>
        <Avatar
          width={size}
          height={size}
          source={!photo ? Images.PilotAvatar : { uri: photo }}
          alignItems="center"
          justifyContent="center"
          position={'absolute'}
          opacity={!photo ? 0.5 : 1.0}
          {...rest}
        />
      </Pressable>
    </Box>
  );
};

export default UserAvatar;
