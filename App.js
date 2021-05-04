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
  TouchableOpacity,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';

const App = () => {
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (event, newDate) => {
    if (newDate !== undefined) {
      setDate(newDate);
    }
    setShow(false);
  };

  const onPressMale = () => {
    if (gender !== 0) {
      setGender(0);
    }
  };

  const onPressFemale = () => {
    if (gender !== 1) {
      setGender(1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FCFCFD" />
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.line}
            colors={['#E35A6B', '#BDB8D4', '#BDB8D4', '#89B6EA']}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.avartar}>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['#E35A6B', '#BDB8D4', '#D4E3F5']}
              style={styles.avatarLinear}>
              <View style={styles.avatarContent}>
                <FontAwesome name="user" size={60} color="#C4C4C4" />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.information}>
            <View style={styles.infoLeft} />
            <View style={styles.infoBody}>
              <View>
                <Text style={styles.txtTitle}>What's your name? (*)</Text>
                <TextInput
                  style={styles.name}
                  textAlign={'center'}
                  // onChangeText={}
                  // value={}
                  placeholder="Name"
                />
              </View>
              <View style={styles.birthControl}>
                <Text style={styles.txtTitle}>What's your date of birth?</Text>
                <TouchableOpacity
                  onPress={() => {
                    setShow(true);
                  }}>
                  <TextInput
                    style={styles.name}
                    textAlign={'center'}
                    editable={false}
                    // onTouchStart={() => {
                    //   setShow(true);
                    // }}
                    value={format(date, 'dd/MM/yyyy')}
                    placeholder={format(date, 'dd/MM/yyyy')}
                  />
                </TouchableOpacity>
                <View>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      display="default"
                      showSoftInputOnFocus={false}
                      onChange={onDateChange}
                    />
                  )}
                </View>
              </View>
              <View>
                <Text style={styles.txtTitle}>What’s your gender? (*) </Text>
                <View style={styles.gender}>
                  <LinearGradient
                    style={[styles.genderLinear, styles.genderBoxShadow]}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    locations={[0, 0.6, 0.7, 0.8]}
                    colors={
                      gender === 1
                        ? ['#E35A6B', '#F7E0E2', '#DBEDF8', '#E3E0EF']
                        : ['#E35A6B', '#E35A6B', '#E35A6B', '#E35A6B']
                    }>
                    <TouchableOpacity
                      style={[
                        styles.genderStyle,
                        gender === 0
                          ? styles.bgColorTransparent
                          : styles.bgColorWhite,
                      ]}
                      onPress={onPressMale}>
                      <FontAwesome
                        name="mars"
                        size={30}
                        color={gender === 0 ? '#1C0B0D' : '#E35A6B'}
                      />
                      <Text
                        style={[
                          styles.genderText,
                          gender === 0
                            ? styles.colorActive
                            : styles.colorNotActive,
                        ]}>
                        Nam
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                  <LinearGradient
                    style={[styles.genderLinear]}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    locations={[0, 0.6, 0.7, 0.8]}
                    colors={
                      gender === 0
                        ? ['#E35A6B', '#F7E0E2', '#DBEDF8', '#E3E0EF']
                        : ['#E35A6B', '#E35A6B', '#E35A6B', '#E35A6B']
                    }>
                    <TouchableOpacity
                      style={[
                        styles.genderStyle,
                        gender === 1
                          ? styles.bgColorTransparent
                          : styles.bgColorWhite,
                      ]}
                      onPress={onPressFemale}>
                      <FontAwesome
                        name="venus"
                        size={30}
                        color={gender === 1 ? '#1C0B0D' : '#E35A6B'}
                      />
                      <Text
                        style={[
                          styles.genderText,
                          gender === 1
                            ? styles.colorActive
                            : styles.colorNotActive,
                        ]}>
                        Nữ
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
            <View style={styles.infoRight} />
          </View>
        </View>
        <View style={styles.footer}>
          <FontAwesome name="angle-double-right" size={50} color="#E35A6B" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  line: {
    height: 1,
  },
  body: {
    flex: 8,
  },
  avartar: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLinear: {
    width: 122,
    height: 122,
    borderRadius: 122 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContent: {
    height: 120,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 120 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    flex: 7,
    flexDirection: 'row',
  },
  txtTitle: {
    color: '#C4C4C4',
    fontSize: 20,
    marginBottom: 10,
  },

  birthControl: {
    marginBottom: 20,
    marginTop: 20,
  },
  infoLeft: {
    flex: 1,
  },
  infoBody: {
    flex: 8,
  },
  name: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 5,
    fontSize: 20,
  },

  infoRight: {
    flex: 1,
  },

  gender: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  genderLinear: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  genderStyle: {
    width: '96%',
    height: '96%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  genderBoxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 30},
        shadowOpacity: 0.8,
      },
      android: {
        shadowColor: '#000',
        elevation: 10,
      },
    }),
  },

  bgColorWhite: {
    backgroundColor: '#fff',
  },
  bgColorTransparent: {
    backgroundColor: 'transparent',
  },
  colorActive: {
    color: '#1C0B0D',
  },
  colorNotActive: {
    color: '#E35A6B',
  },
  genderText: {
    fontSize: 18,
    marginTop: 2,
  },
  // genderFemale: {
  //   // width: '96%',
  //   // height: '96%',
  //   backgroundColor: '#fff',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 5,
  // },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
  },
});

export default App;
