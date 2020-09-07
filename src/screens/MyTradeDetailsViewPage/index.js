import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyTradedetailsViewPage extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'My Trade Details',
    // drawerLabel: 'Details',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#fff',
      size: 20,
    },
    headerLeft: (
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="md-menu" style={{marginLeft: 10}} size={30} color="#000" />
      </TouchableOpacity>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      // listDataSource: CONTENT,
      images: [
        require('../../assets/images/pppp.png'),
        require('../../assets/images/logo.png'),
        require('../../assets/images/logo.png'),
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'column',
              marginEnd: 10,
              elevation: 10,
              margin: 10,
              backgroundColor: '#FAFAFA',
              borderRadius: 8,
              padding: 10,
              marginBottom: 4,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginBottom: 4,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  marginTop: 4,
                }}>
                T.M. No :996866222
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                TradeMark :{' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Liyouess
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                STATUS
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Registered
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                APP.Date
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                14-02-2020
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                TM Type
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Colone
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                APPpro Office
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  marginLeft: 10,
                  fontFamily: 'Poppins',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Delhi
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Journal No.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                1990-20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Vaild Upto
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                17/11/2020
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Class
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                30
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
