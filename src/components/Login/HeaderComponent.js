import React from 'react';
import {View,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent = () => {
  return (
    <View style={{flex: 0.5, justifyContent:'flex-end'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{height:1}}
        colors={['#E35A6B', '#BDB8D4', '#BDB8D4', '#89B6EA']}
      />
    </View>
  );
};

export default HeaderComponent;
