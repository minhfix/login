import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const InfomationComponentStyles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
  },

  inputViewContainer: {
    flex: 1,
    paddingTop: scale(20),
  },

  inputTitle: {
    fontSize: scale(14),
    marginBottom: scale(2),
  },

  inputName: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 5,
    fontSize: scale(14),
  },

  birthInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 5,
    fontSize: scale(14),
  },

  genderViewContainer: {
    flex: 2,
    marginTop: scale(20),
  },

  genderViewContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: scale(5),
    justifyContent: 'space-evenly',
  },

  genderLinear: {
    height: scale(80),
    width: scale(80),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  genderSelectButton: {
    width: '96%',
    height: '96%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  genderText: {
    fontSize: scale(18),
    marginTop: scale(2),
  },

  fontSize14: {
    fontSize: scale(14),
  }
});
