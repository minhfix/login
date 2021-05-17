import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AvartarComponent from './AvartarComponent';
import InformationComponent from './InformationComponent';

const BodyComponent = ({
  sheetRef,
  openSheet,
  closeReef,
  localFile,
  onFileSelected,
}) => {
  return (
    <View style={{flex: 9.5}}>
      <AvartarComponent
        sheetRef={sheetRef}
        openSheet={openSheet}
        onFileSelected={onFileSelected}
        localFile={localFile}
      />
      <InformationComponent />
    </View>
  );
};

export default BodyComponent;
