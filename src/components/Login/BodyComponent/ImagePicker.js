import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePickerCrop from 'react-native-image-crop-picker';
import {scale} from 'react-native-size-matters';

const picker = {
  width: 300,
  height: 300,
  cropping: true,
  freeStyleCropEnabled: true,
  date: 'base64',
  includeBase64:true,
}

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from Camera',
      icon: <FontAwesome name="camera" size={21} color="grey" />,
      onPress: () => {
        ImagePickerCrop.openCamera(picker)
          .then(image => {
            onFileSelected(image);
          })
          .catch(err => {
            console.log('err', err);
          });
      },
    },
    {
      name: 'Choose from Galley',
      icon: <FontAwesome name="image" size={21} color="grey" />,
      onPress: () => {
        ImagePickerCrop.openPicker(picker)
          .then(image => {
            onFileSelected(image);
          })
          .catch(err => {
            console.log('err', err);
          });
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={scale(150)}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}>
      <View style={{paddingHorizontal: scale(20)}}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            key={name}
            style={{
              flexDirection: 'row',
              paddingTop: scale(20),
              alignItems: 'center',
            }}
            onPress={onPress}>
            {icon}
            <Text style={{fontSize: scale(18), paddingLeft: scale(18)}}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
