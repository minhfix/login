import React, {useRef, useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginComponent from '../../components/Login/LoginComponent';

const Login = () => {
  const [localFile, setLocalFile] = useState(null);
  const sheetRef = useRef(null);

  const closeReef = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
  };

  const onNextHandler = () => {
    if (localFile) {
      saveImage(`data:${localFile.mime};base64,${localFile.data}`);
    }
  };

  // const getImage = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('avatar_key').then(imageData => imageData);
  //     if (value !== null) {
  //       // console.log('value: ', value);
  //     }
  //     console.log('load done: ');
  //   } catch (e) {
  //     console.log('get data error: ', e);
  //   }
  // };

  const saveImage = async value => {
    try {
      // console.log('saving');
      await AsyncStorage.setItem('avatar_key', value);
      // console.log('save done');
    } catch (err) {
      console.log('save appsync storage err: ' + err);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FCFCFD" />
      <LoginComponent
        sheetRef={sheetRef}
        openSheet={openSheet}
        closeReef={closeReef}
        onFileSelected={onFileSelected}
        localFile={localFile}
        onNext={onNextHandler}
      />
    </View>
  );
};

export default Login;
