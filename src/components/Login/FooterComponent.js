import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FooterComponent = () => {
  return (
    <View style={{flex: 2}}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(204,204,204, 0.3)',
        }}>
        <FontAwesome
          name="angle-double-right"
          size={scale(40)}
          color="#E35A6B"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;
