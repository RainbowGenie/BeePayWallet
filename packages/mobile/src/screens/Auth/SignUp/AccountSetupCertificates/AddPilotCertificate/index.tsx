import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Actionsheet,
  Box,
  HStack,
  Input,
  Stack,
  StatusBar,
  useDisclose,
} from 'native-base';
import { Constants } from 'common/src/config';
import { Button, LabeledInput, SelectableButton } from 'components';
import { Alert, Pressable, useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'types';
import {
  LabeledDatePicker,
  LabeledMultiPicker,
  LabeledPicker,
} from 'components';
import { usePilotCertificates } from 'common/src/services/pilotCertificateServices';

const AddPilotCertificate = () => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<AuthStackParamList>>();

  const { isOpen, onOpen, onClose } = useDisclose();

  const certificateService = usePilotCertificates();

  const categoryClasses =
    certificateService.category === 'Airplane'
      ? Constants.airplaneClasses
      : certificateService.category === 'Rotorcraft'
      ? Constants.rotorcraftClasses
      : certificateService.category === 'Lighter-than-air'
      ? Constants.lighterThanAirClasses
      : certificateService.category === 'Weight Shift Control'
      ? Constants.weightShiftClasses
      : undefined;

  const onAddAnother = () => {
    certificateService.setType('');
    certificateService.setCategory('');
    certificateService.setClasses([]);
    certificateService.setNumber('');
    certificateService.setDateOfIssue(new Date());
    certificateService.setRatings([]);
  };
  const onFinish = () => {
    goBack();
  };
  const onSaveHandler = async () => {
    const res = await certificateService.handleCreate();
    if (res) {
      Alert.alert('Would you like to add another?', '', [
        {
          text: 'Add another',
          onPress: onAddAnother,
          style: 'default',
        },
        {
          text: 'Finish',
          onPress: onFinish,
          style: 'cancel',
        },
      ]);
    }
  };

  const [ratings, setRatings] = useState(Constants.ratings);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const renderRating = (rating: string, _index: number) => {
    const isSelected = selectedRatings.some(r => r === rating);

    const pushRating = () => {
      if (!isSelected) {
        setSelectedRatings([...selectedRatings, rating]);
      } else {
        setSelectedRatings(selectedRatings.filter(r => r !== rating));
      }
    };
    return (
      <SelectableButton
        text={rating}
        isSelected={isSelected}
        setSelected={pushRating}
      />
    );
  };

  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customRating, setCustomRating] = useState('');

  const addCustomRating = () => {
    if (customRating) {
      setRatings([...ratings, customRating]);
      setSelectedRatings([...selectedRatings, customRating]);
      setShowCustomInput(!showCustomInput);
      setCustomRating('');
    }
  };

  const onSaveRatings = () => {
    certificateService.setRatings(selectedRatings);
    console.log(selectedRatings, certificateService.ratings);
    onClose();
  };

  return (
    <KeyboardAwareScrollView>
      <Box>
        <StatusBar backgroundColor="transparent" translucent />
        <Stack safeAreaTop px="8" space="2">
          <LabeledPicker
            label="CERTIFICATE TYPE"
            placeHolder="Select types"
            onSelectItem={certificateService.setType}
            items={Constants.certificateTypes}
            selectedItem={certificateService.type}
            error={certificateService.typeError}
            zIndex={100}
          />
          {certificateService.type && (
            <LabeledPicker
              label="CERTIFICATE CATEGORY"
              placeHolder="Select category"
              onSelectItem={certificateService.setCategory}
              items={Constants.certificateCategories}
              selectedItem={certificateService.category}
              error={certificateService.categoryError}
              zIndex={10}
            />
          )}
          {certificateService.category && categoryClasses && (
            <LabeledMultiPicker
              label="CERTIFICATE CLASS"
              placeHolder="Select class"
              setValues={certificateService.setClasses}
              items={categoryClasses}
              values={certificateService.classes}
              error={certificateService.classesError}
              zIndex={1}
            />
          )}

          <LabeledInput
            label="CERTIFICATE NUMBER"
            value={certificateService.number}
            error={certificateService.numberError}
            onChange={certificateService.setNumber}
            placeholder="Enter certificate number"
          />
          <LabeledDatePicker
            label="DATE OF ISSUANCE"
            date={
              certificateService.dateOfIssue
                ? certificateService.dateOfIssue
                : new Date()
            }
            setDate={certificateService.setDateOfIssue}
            error={certificateService.dateOfIssueError}
            hasMaxDate
          />
          <Pressable onPress={onOpen}>
            <LabeledMultiPicker
              label="CERTIFICATE RATINGS"
              placeHolder="Select ratings"
              setValues={certificateService.setRatings}
              items={ratings}
              values={certificateService.ratings}
              error={certificateService.ratingError}
              zIndex={1}
              disabled={true}
            />
          </Pressable>
          <Stack alignItems="center">
            <Button
              marginTop="10"
              onPress={onSaveHandler}
              sz="medium"
              type="primary"
              text={'Next'}
            />
          </Stack>
        </Stack>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Stack alignItems="center" space="4" mt="6">
              {ratings.map((rating, _index) => renderRating(rating, _index))}
              {showCustomInput && (
                <HStack
                  space="2"
                  alignItems="center"
                  justifyContent="space-between">
                  <Input
                    h="50"
                    w={250}
                    variant="underlined"
                    fontSize="md"
                    size="s"
                    placeholder="Enter custom rating"
                    value={customRating}
                    onChangeText={setCustomRating}
                  />
                  <Button
                    type="underline"
                    text="Add"
                    sz="small"
                    onPress={addCustomRating}
                  />
                </HStack>
              )}
              <Button
                sz="medium"
                type="underline"
                text="Add custom"
                onPress={() => setShowCustomInput(!showCustomInput)}
              />
              <Button
                sz="large"
                type="primary"
                text="Save"
                onPress={onSaveRatings}
              />
            </Stack>
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default AddPilotCertificate;
