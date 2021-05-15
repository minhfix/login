import React from 'react';
import {View, StatusBar} from 'react-native';

import LoginComponent from '../../components/Login/LoginComponent';

const Login = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FCFCFD" />
      <LoginComponent />
    </View>
  );
};

export default Login;
