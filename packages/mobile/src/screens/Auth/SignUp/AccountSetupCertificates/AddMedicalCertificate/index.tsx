import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Stack, StatusBar } from 'native-base';
import { Constants, Colors } from 'common/src/config';
import { Button, P } from 'components';
import { LabeledDatePicker, LabeledPicker } from 'components';
import { useMedicalCertificateCreate } from 'common/src/services/medicalCertificateServices';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'types';

const AddMedicalCertificate = () => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<AuthStackParamList>>();

  const certificateService = useMedicalCertificateCreate();

  const onSaveHandler = async () => {
    const res = await certificateService.handleSubmit();
    if (res) {
      goBack();
    }
  };

  return (
    <KeyboardAwareScrollView>
      <StatusBar backgroundColor="transparent" translucent />

      <Stack space="2" px="8" pt={5}>
        <LabeledPicker
          label="CERTIFICATE CLASS"
          placeHolder="Select class"
          onSelectItem={certificateService.setType}
          selectedItem={certificateService.type}
          items={Constants.medicalClasses}
          zIndex={100}
          error={certificateService.typeError}
        />
        <LabeledDatePicker
          label="DATE OF EXAMINATION"
          date={
            certificateService.examDate
              ? certificateService.examDate
              : new Date()
          }
          setDate={certificateService.setExamDate}
          hasMaxDate
          error={certificateService.examDateError}
        />
        {certificateService.type.toLowerCase() === 'basic med' && (
          <LabeledDatePicker
            label="COURSE COMPLETION"
            date={
              certificateService.courseDate
                ? certificateService.courseDate
                : new Date()
            }
            setDate={certificateService.setCourseDate}
            hasMaxDate
            error={certificateService.courseCompletionDateError}
          />
        )}
        <Stack alignItems="center">
          <Button
            marginTop="5"
            onPress={onSaveHandler}
            sz="medium"
            type="primary"
            text={'Next'}
          />
        </Stack>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default AddMedicalCertificate;
