import React, { useState } from 'react';
import {
  Stack,
  Center,
  useDisclose,
  Actionsheet,
  Box,
  Image,
} from 'native-base';
import { Label, P, Button } from 'components';
import { UserAvatar } from 'components';
import {
  ImageOrVideo,
  openCamera,
  openPicker,
  Options,
} from 'react-native-image-crop-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from 'types';
import { moveToBottom } from 'utils';
import { Colors, Images } from 'common/src/config';
import { useSignupProfilePicture } from 'common/src/services/signupServices';

// AccountSetupAvatar
const AccountSetupAvatar = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const [profilePicture, setProfilePicture] = React.useState<Blob | null>(null);
  const [profilePictureUri, setProfilePictureUri] = useState('');
  const [showExample, setShowExample] = useState(false);

  const signupService = useSignupProfilePicture();

  const onContinueHandler = async () => {
    if (!profilePictureUri) {
      navigate('AccountSetupCertificates');
    } else {
      const res = await signupService.handleSubmit(undefined, profilePicture);
      if (res) {
        navigate('AccountSetupCertificates');
      }
    }
  };

  const onSeeExampleHandler = async () => {
    setShowExample(!showExample);
  };

  const onEditAvatar = () => {
    onOpen();
  };

  const onOpenImagePicker = (type: string) => {
    onClose();
    const pickerOption: Options = {
      width: 300,
      height: 300,
      mediaType: 'photo',
      smartAlbums: ['UserLibrary'],
      cropping: true,
    };
    if (type === 'camera') {
      openCamera(pickerOption)
        .then(onSelectAvatar)
        .catch(e => console.log(e));
    } else {
      openPicker(pickerOption)
        .then(onSelectAvatar)
        .catch(e => console.log(e));
    }
  };

  const onSelectAvatar = async (assets: ImageOrVideo) => {
    if (assets?.size && assets?.path) {
      const filename = assets?.path.split('/').slice(-1)[0];
      const formData = new FormData();
      formData.append('image', {
        uri: assets?.path,
        type: assets?.mime,
        name: filename,
      });

      setProfilePictureUri(assets?.path);
      const img = await fetch(assets?.path);
      const bytes = await img.blob();
      setProfilePicture(bytes);
    }
  };

  return (
    <Box flex={1}>
      <Stack flex={1}>
        <Stack space="2" paddingTop={10}>
          <Center marginX={10}>
            <UserAvatar
              photo={profilePictureUri}
              showAdd={!profilePictureUri}
              sz={'xLarge'}
              openImagePicker={onEditAvatar}
            />
            <Label textAlign="center" color="black" sz="large" mt={6}>
              Profile Picture
            </Label>
            <P textAlign="center" color={Colors.content.des} sz="small">
              Uploading a profile photo will make your logbook's cover page
              beautiful and professional when you export and/or print it.
            </P>
            <Button
              marginTop={5}
              onPress={onSeeExampleHandler}
              sz="medium"
              type="underline"
              text={'See example'}
              flex={1}
              justifyContent={'flex-end'}
              marginBottom={12}
            />
            {showExample && (
              <Box borderWidth="1" borderColor="gray.500">
                <Image
                  h="200"
                  source={Images.CoverPageExample}
                  color={Colors.white}
                />
              </Box>
            )}
          </Center>
        </Stack>
        {moveToBottom(
          <Button
            text="Next"
            sz="large"
            type="primary"
            onPress={onContinueHandler}
            shadow="3"
            px={'8'}
          />
        )}
      </Stack>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={() => onOpenImagePicker('camera')}>
            Open Camera
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => onOpenImagePicker('library')}>
            Select Photo
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default AccountSetupAvatar;
