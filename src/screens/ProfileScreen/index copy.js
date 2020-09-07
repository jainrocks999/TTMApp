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
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingVertical: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={{
                  width: 24,
                  height: 15,
                  marginEnd: 10,
                  tintColor: 'black',
                }}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  marginLeft: 10,
                  fontWeight: 'bold',
                }}>
                Profile
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            borderWidth: 0.5,
            borderRadius: 100,
            height: 200,
            width: 200,
          }}>
          <TouchableOpacity
            style={{
              height: 170,
              width: 170,
              borderRadius: 100,

              backgroundColor: '#F2F1F5',
            }}></TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          <View
            style={{
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 10}}>Name :</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>Yogendra</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 10}}>UserId :</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>Yogendra</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 10}}>Email :</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>Yogendra</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 10}}>Phone :</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>Yogendra</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 10}}>Name :</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>Yogendra</Text>
          </View>
        </View>
      </View>
    );
  }
}
