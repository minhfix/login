import React from 'react';
import {View, Text} from 'react-native';

import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent/BodyComponent';
import FooterComponent from './FooterComponent';

const LoginComponent = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FCFCFD'}}>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent/>
    </View>
  );
};

export default LoginComponent;
