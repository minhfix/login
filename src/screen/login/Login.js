import React, {useRef, useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginComponent from '../../components/Login/LoginComponent';

const Login = () => {
  const [loginInfor, setLoginInfor] = useState({
    avatar: '',
    name: '',
    birth: new Date(),
    gender: 0,
  });

  useEffect(() => {
    const getLoginData = async () => {
      try {
        const loginData = await AsyncStorage.getItem('loginInfor_key').then(
          value => value,
        );
        if (loginData !== null) {
          setLoginInfor({...loginInfor, loginData});
        }
      } catch (e) {
        console.log('get data error: ', e);
      }
    };

    getLoginData();
  },[]);

  const onChangeText = ({fieldName, fieldValue}) => {
    setLoginInfor({...loginInfor, [fieldName]: fieldValue});
  };

  const onNextHandler = () => {
    if (loginInfor) {
      saveLoginData({...loginInfor});
    }
  };

  // const getLoginData = async () => {
  //   try {
  //     const loginData = await AsyncStorage.getItem('loginInfor_key').then(
  //       value => value,
  //     );
  //     if (loginData !== null) {
  //       setLoginInfor({...loginInfor, loginData});
  //     }
  //   } catch (e) {
  //     console.log('get data error: ', e);
  //   }
  // };

  const saveLoginData = async value => {
    try {
      // console.log('saving');
      await AsyncStorage.setItem('loginInfor_key', JSON.stringify(value));
      // console.log('save done');
    } catch (err) {
      console.log('save appsync storage err: ' + err);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FCFCFD" />
      <LoginComponent
        loginInfor={loginInfor}
        setLoginInfor={setLoginInfor}
        onChangeText={onChangeText}
        onNext={onNextHandler}
      />
    </View>
  );
};

export default Login;
