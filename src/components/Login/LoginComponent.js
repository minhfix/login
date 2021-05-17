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
  closeReef,
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
        // closeReef={closeReef}
        onFileSelected={onFileSelected}
        localFile={localFile}
      />
      {/* <View style={{flex: 9.5}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LinearGradient
            style={{
              borderRadius: scale(120) / 2,
              height: scale(120),
              width: scale(120),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['#E35A6B', '#BDB8D4', '#D4E3F5']}>
            <TouchableOpacity
              style={{
                display: 'flex',
                width: '98%',
                height: '98%',
                borderRadius: (scale(120) * 0.98) / 2,
                backgroundColor: '#FDFDFC',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={openSheet}>
              {localFile && (
                <ImageBackground
                  source={{
                    uri:
                      localFile &&
                      `data:${localFile.mime};base64,${localFile.data}`,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: (scale(120) * 0.98) / 2,
                  }}
                  imageStyle={{
                    borderRadius: (scale(120) * 0.98) / 2,
                  }}
                />
              )}
              {!localFile && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    borderRadius: (scale(120) * 0.98) / 2,
                  }}>
                  <FontAwesome
                    name="camera"
                    size={scale(120) * 0.3}
                    color="#C4C4C4"
                  />
                </View>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <InformationComponent />
      </View> */}
      <FooterComponent onNext={onNext} />
      {/* <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} /> */}
    </View>
  );
};

export default LoginComponent;
