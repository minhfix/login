import React, {useState} from 'react';
import {HomeMainCss} from '../../Css/HomeMainCss';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Thanh ngang */
export const LinearGradientStyle = props => {
  return (
    <View style={HomeMainCss.linearStyle}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={props.item.color}
        style={{height: props.item.height}}>
        {props.children}
      </LinearGradient>
    </View>
  );
};
