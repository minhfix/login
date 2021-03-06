import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  LogBox,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {format} from 'date-fns';
import {scale} from 'react-native-size-matters';

import {InfomationComponentStyles as styles} from './css/InfomationComponentStyles';

const InformationComponent = ({loginInfor, onChangeText}) => {
  
  const [show, setShow] = useState(false);
  const { name , birth, gender } = loginInfor ;

  const onDateChange = (event, newDate) => {
    setShow(false);
    if (newDate) {
      onChangeText({fieldName: 'birth', fieldValue: newDate});
    }
  };

  // const chooseMale = () => {
  //   if (gender !== 0) {
  //     setGender(0);
  //   }
  // };

  // const chooseFemale = () => {
  //   if (gender !== 1) {
  //     setGender(1);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 10}}>
        <View style={{flex: 1}}>
          <Text style={styles.inputTitle}>What's your name? (*)</Text>
          <TextInput
            style={styles.inputName}
            textAlign={'center'}
            onChangeText={value => {
              onChangeText({fieldName: 'name', fieldValue: value});
            }}
            value={name}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputViewContainer}>
          <Text style={styles.inputTitle}>What's your date of birth?</Text>
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}>
            <TextInput
              style={styles.birthInput}
              textAlign={'center'}
              editable={false}
              value={format(new Date(birth), 'dd/MM/yyyy')}
              placeholder={format(new Date(birth), 'dd/MM/yyyy')}
            />
          </TouchableOpacity>
          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={birth}
                mode="date"
                display="default"
                showSoftInputOnFocus={false}
                onChange={newDate => {
                  onChangeText({fieldName: 'birth', fieldValue: newDate});
                }}
                onChange={onDateChange}
              />
            )}
          </View>
        </View>
        <View style={styles.genderViewContainer}>
          <Text style={styles.fontSize14}>What???s your gender? (*) </Text>
          <View style={styles.genderViewContent}>
            <LinearGradient
              style={styles.genderLinear}
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
                  styles.genderSelectButton,
                  {
                    backgroundColor: gender === 0 ? 'transparent' : '#fff',
                  },
                ]}
                onPress={() => {
                  onChangeText({fieldName: 'gender', fieldValue: 0});
                }}>
                <FontAwesome
                  name="mars"
                  size={scale(30)}
                  color={gender === 0 ? '#1C0B0D' : '#E35A6B'}
                />
                <Text
                  style={[
                    styles.genderText,
                    {
                      color: gender === 0 ? '#1C0B0D' : '#E35A6B',
                    },
                  ]}>
                  Nam
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={styles.genderLinear}
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
                  styles.genderSelectButton,
                  {
                    backgroundColor: gender === 1 ? 'transparent' : '#fff',
                  },
                ]}
                onPress={() => {
                  onChangeText({fieldName: 'gender', fieldValue: 1});
                }}>
                <FontAwesome
                  name="venus"
                  size={scale(30)}
                  color={gender === 1 ? '#1C0B0D' : '#E35A6B'}
                />
                <Text
                  style={[
                    styles.genderText,
                    {
                      color: gender === 1 ? '#1C0B0D' : '#E35A6B',
                    },
                  ]}>
                  N???
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default InformationComponent;
