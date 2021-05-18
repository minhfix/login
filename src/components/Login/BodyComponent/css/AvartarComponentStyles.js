import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const AvartarComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  linearGradient: {
    borderRadius: scale(120) / 2,
    height: scale(120),
    width: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
  },

  chooseImageButton: {
    display: 'flex',
    width: '98%',
    height: '98%',
    borderRadius: (scale(120) * 0.98) / 2,
    backgroundColor: '#FDFDFC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageBackground: {
    height: '100%',
    width: '100%',
    borderRadius: (scale(120) * 0.98) / 2,
  },

  cameraIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: (scale(120) * 0.98) / 2,
  },
});
