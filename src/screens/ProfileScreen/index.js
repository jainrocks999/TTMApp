import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import About from './about';
import Setting from './setting';
import RootApp from '../../navigation';
import {createAppContainer} from 'react-navigation';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'INTROGATIONS',
    tabBarIcon: ({tintColor}) => (
      // <Image
      //   style={{height: 20, width: 20}}
      //   source={require('../../assets/Images/book.jpg')}
      // />
      <Icon name="book-open" size={25} color="#1865A8" />
    ),
  };
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
            alignItems: 'center',
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

          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              Profile Settings
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            borderRadius: 100,
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: '#F2F1F5',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              borderRadius: 100,
              height: 170,
              width: 170,
            }}>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
              }}
              source={require('../../assets/images/p1.jpg')}
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: -20,
              height: 40,
              width: 40,
              borderRadius: 100,
              backgroundColor: '#FF8F6B',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
              }}
              source={require('../../assets/icons/camera.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>RAM SHARMA</Text>
        </View>
        <RootNav />
        {/* <View style={{marginTop: 20}}>
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
        </View> */}
      </View>
    );
  }
}
const TabNavigator = createMaterialTopTabNavigator(
  {
    About: {
      screen: About,
    },
    Setting: {
      screen: Setting,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'grey',
      color: '#000',
      backgroundColor: '#000',
      style: {
        marginLeft: 20,
        marginTop: 50,
        fontSize: 14,
        color: 'black',
        backgroundColor: 'transparent',
      },
      indicatorStyle: {
        backgroundColor: '#FF8F6B',
      },
    },
  },
);

const RootNav = createAppContainer(TabNavigator);
