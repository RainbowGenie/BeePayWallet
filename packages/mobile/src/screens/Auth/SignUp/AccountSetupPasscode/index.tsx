import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from 'config';
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthStackParamList } from 'types';

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

const AccountSetupPasscode = () => {
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const [passcode, setPasscode] = useState('');

  const handlePress = (value: string) => {
    if (passcode.length < 6) {
      if ((passcode + value).length === 6) {
        navigate('AccountConfirmPasscode', { passcode: passcode + value });
      }
      setPasscode(passcode + value);
    }
  };

  const handleDelete = () => {
    if (passcode.length > 0) {
      setPasscode(passcode.slice(0, -1));
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
        Create Passcode
      </Text>
      {/* <View>
        <MaterialCommunityIcons name="bell" color={'black'} size={30} />
      </View> */}
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputBox,
            passcode.length > 0 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            passcode.length > 1 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            passcode.length > 2 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            passcode.length > 3 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            passcode.length > 4 && { backgroundColor: Colors.misc.blue },
          ]}></View>
        <View
          style={[
            styles.inputBox,
            passcode.length > 5 && { backgroundColor: Colors.misc.blue },
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

export default AccountSetupPasscode;
