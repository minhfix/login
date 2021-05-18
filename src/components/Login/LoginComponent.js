import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent/BodyComponent';
import FooterComponent from './FooterComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginComponent = ({
  sheetRef,
  openSheet,
  localFile,
  onFileSelected,
  onNext,
}) => {

  return (
    <View style={{flex: 1, backgroundColor: '#FCFCFD'}}>
      <HeaderComponent />
      <BodyComponent
        sheetRef={sheetRef}
        openSheet={openSheet}
        onFileSelected={onFileSelected}
        localFile={localFile}
      />
      <FooterComponent onNext={onNext} />
    </View>
  );
};

export default LoginComponent;
