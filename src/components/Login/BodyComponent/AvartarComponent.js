import React, {useRef} from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import ImagePicker from './ImagePicker';
import {AvartarComponentStyles as styles} from './css/AvartarComponentStyles';

const AvartarComponent = ({
  loginInfor,
  setLoginInfor,
}) => {
  const {avatar, name, birth, gender} = loginInfor;

  const sheetRef = useRef(null);

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
    if (image) {
      const imgBase64 = `data:${image.mime};base64,${image.data}`;
      setLoginInfor({...loginInfor, avatar: imgBase64});
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#E35A6B', '#BDB8D4', '#D4E3F5']}>
        <TouchableOpacity style={styles.chooseImageButton} onPress={openSheet}>
          {(avatar !== '' && (
            <ImageBackground
              source={{
                uri: loginInfor.avatar,
              }}
              style={styles.imageBackground}
              imageStyle={{
                borderRadius: (scale(120) * 0.98) / 2,
              }}
            />
          )) || (
            <View style={styles.cameraIconView}>
              <FontAwesome
                name="camera"
                size={scale(120) * 0.3}
                color="#C4C4C4"
              />
            </View>
          )}
        </TouchableOpacity>
      </LinearGradient>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef}></ImagePicker>
    </View>
  );
};

export default AvartarComponent;
