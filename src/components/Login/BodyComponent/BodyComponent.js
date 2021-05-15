import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AvartarComponent from './AvartarComponent';
import InformationComponent from './InformationComponent';

const BodyComponent = () => {
  return (
    <View
      style={{flex: 9.5}}>
      <AvartarComponent />
      <InformationComponent />
    </View>
  );
};

export default BodyComponent;
