/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  launchCamera,
  launchImageLibrary,
  showImagePicker,
} from 'react-native-image-picker';
import {format} from 'date-fns';

import Login from './src/screen/login/Login';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // const onDateChange = (event, newDate) => {
  //   if (newDate !== undefined) {
  //     setDate(newDate);
  //   }
  //   setShow(false);
  // };

  // const cameraOptions = {
  //   title: 'Capture Image',
  //   quality: 1.0,
  //   cameraType: 'back',
  //   rotation: 0,
  //   maxHeight: 675,
  //   maxWidth: 900,
  //   mediaType: 'photo',
  // };
  // let options = {
  //   mediaType: 'photo',
  //   maxWidth: 300,
  //   maxHeight: 550,
  //   quality: 1,
  //   videoQuality: 'low',
  //   durationLimit: 30, //Video max duration in seconds
  //   saveToPhotos: true,
  // };
  // const onPressAvatar = () => {
  //   launchImageLibrary(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }
  //     console.log('base64 -> ', response.base64);
  //     console.log('uri -> ', response.uri);
  //     console.log('width -> ', response.width);
  //     console.log('height -> ', response.height);
  //     console.log('fileSize -> ', response.fileSize);
  //     console.log('type -> ', response.type);
  //     console.log('fileName -> ', response.fileName);
  //     setFilePath(response);
  //   });
  // };

  // const onPressMale = () => {
  //   if (gender !== 0) {
  //     setGender(0);
  //   }
  // };

  // const onPressFemale = () => {
  //   if (gender !== 1) {
  //     setGender(1);
  //   }
  // };

  return (
    <View style={{flex: 1}}>
      <Login />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FCFCFD',
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'red',
//   },
//   line: {
//     height: 1,
//   },
//   body: {
//     flex: 10,
//     backgroundColor: 'yellow',
//   },
//   avartar: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatarLinear: {
//     width: windowWidth * 0.3,
//     height: windowWidth * 0.3,
//     borderRadius: (windowWidth * 0.3) / 2,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatarContent: {
//     height: '98%',
//     width: '98%',
//     backgroundColor: '#fff',
//     borderRadius: (windowWidth * 0.3 * 0.98) / 2,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   information: {
//     flex: 7,
//     flexDirection: 'row',
//   },
//   txtTitle: {
//     color: '#C4C4C4',
//     fontSize: 20,
//     marginBottom: 10,
//   },

//   birthControl: {
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   infoLeft: {
//     flex: 1,
//   },
//   infoBody: {
//     flex: 8,
//   },
//   name: {
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: 'red',
//     borderRadius: 5,
//     fontSize: 20,
//   },

//   infoRight: {
//     flex: 1,
//   },

//   gender: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   genderLinear: {
//     width: 100,
//     height: 100,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   genderStyle: {
//     width: '96%',
//     height: '96%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },

//   genderBoxShadow: {
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: {width: 10, height: 30},
//         shadowOpacity: 0.8,
//       },
//       android: {
//         shadowColor: '#000',
//         elevation: 10,
//       },
//     }),
//   },

//   bgColorWhite: {
//     backgroundColor: '#fff',
//   },
//   bgColorTransparent: {
//     backgroundColor: 'transparent',
//   },
//   colorActive: {
//     color: '#1C0B0D',
//   },
//   colorNotActive: {
//     color: '#E35A6B',
//   },
//   genderText: {
//     fontSize: 18,
//     marginTop: 2,
//   },
//   // genderFemale: {
//   //   // width: '96%',
//   //   // height: '96%',
//   //   backgroundColor: '#fff',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   borderRadius: 5,
//   // },
//   footer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     paddingRight: 30,
//   },
// });

export default App;
