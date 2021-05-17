import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  launchCamera,
  launchImageLibrary,
  showImagePicker,
} from 'react-native-image-picker';
import {format} from 'date-fns';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InformationComponent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState(0);

  const onChangeNameHandler = (e) => {
    setName(e.target.value)
  }

  const onDateChange = (event, newDate) => {
    if (newDate !== undefined) {
      setDate(newDate);
    }
    setShow(false);
  };

  const chooseMale = () => {
    if (gender !== 0) {
      setGender(0);
    }
  };

  const chooseFemale = () => {
    if (gender !== 1) {
      setGender(1);
    }
  };

  return (
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 1}} />
      <View style={{flex: 10, boxSizing: 'border-box'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: scale(14), marginBottom: scale(2)}}>What's your name? (*)</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'red',
              borderRadius: 5,
              fontSize: scale(14),
            }}
            textAlign={'center'}
            onChangeText={onChangeNameHandler}
            // value={}
            placeholder="Name"
          />
        </View>
        <View style={{flex: 1, paddingTop: scale(20)}}>
          <Text style={{fontSize: scale(14), marginBottom: scale(2)}}>What's your date of birth?</Text>
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}>
            <TextInput
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'red',
                borderRadius: 5,
                fontSize: scale(14),
              }}
              textAlign={'center'}
              editable={false}
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
        <View style={{flex: 2, marginTop: scale(20)}}>
          <Text style={{fontSize: scale(14)}}>What’s your gender? (*) </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: scale(5),
              justifyContent: 'space-evenly',
            }}>
            <LinearGradient
              style={{
                height: scale(80),
                width: scale(80),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              locations={[0, 0.6, 0.7, 0.8]}
              colors={
                gender === 1
                  ? ['#E35A6B', '#F7E0E2', '#DBEDF8', '#E3E0EF']
                  : ['#E35A6B', '#E35A6B', '#E35A6B', '#E35A6B']
              }>
              <TouchableOpacity
                style={{
                  width: '96%',
                  height: '96%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: gender === 0 ? 'transparent' : '#fff',
                }}
                onPress={chooseMale}>
                <FontAwesome
                  name="mars"
                  size={scale(30)}
                  color={gender === 0 ? '#1C0B0D' : '#E35A6B'}
                />
                <Text
                  style={{
                    fontSize: scale(18),
                    marginTop: scale(2),
                    color: gender === 0 ? '#1C0B0D' : '#E35A6B',
                  }}
                >
                  Nam
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={{
                height: scale(80),
                width: scale(80),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              locations={[0, 0.6, 0.7, 0.8]}
              colors={
                gender === 0
                  ? ['#E35A6B', '#F7E0E2', '#DBEDF8', '#E3E0EF']
                  : ['#E35A6B', '#E35A6B', '#E35A6B', '#E35A6B']
              }>
              <TouchableOpacity
                style={{
                  width: '96%',
                  height: '96%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: gender === 1 ? 'transparent' : '#fff',
                }}
                onPress={chooseFemale}>
                <FontAwesome
                  name="venus"
                  size={scale(30)}
                  color={gender === 1 ? '#1C0B0D' : '#E35A6B'}
                />
                <Text
                style={{
                    fontSize: scale(18),
                    marginTop: scale(2),
                    color: gender === 1 ? '#1C0B0D' : '#E35A6B',
                  }}
                >
                  Nữ
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
