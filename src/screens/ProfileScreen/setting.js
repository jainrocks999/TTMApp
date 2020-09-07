import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          paddingLeft: 20,
          paddingRight: 10,
        }}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={{color: 'grey'}}>Name </Text>
            <Text style={{marginBottom: 10, marginTop: 5}}>Ram Sharma</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'grey'}}>Phone </Text>
              <Text style={{marginBottom: 10, marginTop: 5}}>987654321</Text>
            </View>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'grey'}}>Location </Text>
              <Text style={{marginBottom: 10, marginTop: 5}}>
                Bucharest, Romania
              </Text>
            </View>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
          </View>
        </View>
      </View>
    );
  }
}
