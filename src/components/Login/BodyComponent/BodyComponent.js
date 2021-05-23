import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AvartarComponent from './AvartarComponent';
import InformationComponent from './InformationComponent';

const BodyComponent = ({
  loginInfor,
  setLoginInfor,
  onChangeText,
}) => {
  return (
    <View style={{flex: 9.5}}>
      <AvartarComponent
        loginInfor={loginInfor}
        setLoginInfor={setLoginInfor}
      />
      <InformationComponent
        loginInfor={loginInfor}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default BodyComponent;
