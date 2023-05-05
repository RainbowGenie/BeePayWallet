import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'config';
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthStackParamList, RootStackParamList } from 'types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputBox: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    padding: 10,
    width: 5,
    height: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    minWidth: 60,
    minHeight: 60,
  },
  itemText: {
    fontSize: 30,
    color: '#333',
  },
});

const AccountConfirmPasscode = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [isPasscodeSet, setIsPasscodeSet] = useState('false');
  useEffect(() => {
    loadStoredValue();
  }, []);
  const loadStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem('isPasscodeSet');
      if (value != null) {
        setIsPasscodeSet(value);
      }
    } catch (error) {
      console.log('Error loading stored value:', error);
    }
  };
  const { params } =
    useRoute<RouteProp<AuthStackParamList, 'AccountSetupPasscode'>>();
  const { passcode } = params;
  const [confirmPasscode, setConfirmPasscode] = useState('');

  const handlePress = async (value: string) => {
    if (confirmPasscode.length < 6) {
      if (confirmPasscode + value === passcode) {
        try {
          await AsyncStorage.setItem('isPasscodeSet', 'true');
          await AsyncStorage.setItem('passcode', passcode);
          navigate('HomeNavigation', { screen: 'Wallet' });
        } catch (error) {
          console.log('Error saving value:', error);
        }
      }
      setConfirmPasscode(confirmPasscode + value);
    }
  };

  const handleDelete = () => {
    if (confirmPasscode.length > 0) {
      setConfirmPasscode(confirmPasscode.slice(0, -1));
    }
  };

  interface Item {
    // Define the properties of your item here.
    key: string;
    label: string;
  }

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={
          item.key === 'delete' ? handleDelete : () => handlePress(item.label)
        }>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
        {isPasscodeSet === 'true' ? 'Enter Passcode' : 'Confirm Passcode'}
      </Text>
      {/* <View>
        <Icon name="rocket" size={30} color="#900" />
      </View> */}
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 0 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 1 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 2 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 3 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 4 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            confirmPasscode.length > 5 && { backgroundColor: Colors.misc.blue },
          ]}></View>
      </View>
      <View style={{ width: '60%', display: 'flex', left: '20%' }}>
        <FlatList
          data={[
            { key: '1', label: '1' },
            { key: '2', label: '2' },
            { key: '3', label: '3' },
            { key: '4', label: '4' },
            { key: '5', label: '5' },
            { key: '6', label: '6' },
            { key: '7', label: '7' },
            { key: '8', label: '8' },
            { key: '9', label: '9' },
            { key: 'submit', label: 'OK' },
            { key: '0', label: '0' },
            { key: 'delete', label: 'DEL' },
          ]}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
      <View
        style={{
          width: '60%',
          display: 'flex',
          left: '20%',
          bottom: 20,
          position: 'absolute',
        }}>
        <Text style={{ textAlign: 'center', color: 'black' }}>
          Passcode adds an extra layer of security when using the app
        </Text>
      </View>
    </View>
  );
};

export default AccountConfirmPasscode;
