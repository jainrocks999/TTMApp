import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../common/Colors';

export default function FlatButton({title, onPress, bgcolor, colorText}) {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 4,

        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          //justifyContent: 'center',
          backgroundColor: Colors.buttonColor,
          justifyContent: 'center',
          borderRadius: 5,
          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
