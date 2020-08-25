import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import connection from '../../../Redux/Constants';
import storage from '../../../config/storage';
import Spinner from 'react-native-loading-spinner-overlay';
import {takeEvery, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs';
import Axios from 'axios';

import styles from './style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: 'Airtel',
      Password: 'Airtel',
      token: '',
      spinner: false,
    };
    this.loaddata();
  }

  loaddata = async () => {
    let token = await AsyncStorage.getItem(storage.Token);
    console.log('token check login'+token)
    this.setState({
      token: token,
    });
  };
  doLogin = () => {
    const {Email, Password, token} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email == '') {
      Toast.show('Please enter valid e-mail address.');
    } else if (Password == '') {
      Toast.show('Please enter password.');
    } else {
     this.props.dispatch({type:'User_Login_Request',url:'NewTMApi/Login',Email,Password,token:token})
     this.props.navigation.navigate('AppStack');
     }
  };

  render() {
    return (
      <View style={{flex: 1,paddingRight:10,paddingLeft:10,marginTop:4}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{color: '#fff'}}
        />
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/arrow.png')}
              resizeMode={'stretch'}
              style={{width: 20, height: 15, color: 'grey',marginTop:4}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: '300',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 22,
              marginTop: 2,
            }}>
            Login Now
          </Text>
          <Text style={{color: '#000', fontSize: 14}}>
            Please login to continue our app
          </Text>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/icons/group1.png')}
              style={styles.image}
              resizeMode={"stretch"}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{color: '#000'}}>Login with</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Other')}
              style={{
                alignItems: 'center',
                borderColor: '#000',
                justifyContent: 'center',
                borderWidth: 1,
                paddingHorizontal: 72,
                borderRadius: 8,
                padding: 8,
              }}>
              <Image source={require('../../../assets/icons/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderColor: '#000',
                alignItems: 'center',
                borderWidth: 1,
                paddingHorizontal: 65,
                borderRadius: 10,
                padding: 4,
              }}>
              <Image source={require('../../../assets/icons/google.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{color: '#000'}}>
              or Login with Username/Mobile Number
            </Text>
          </View>
          <View>
            <Text style={{color: '#000'}}>Username or Mobile Number</Text>
            <View
              style={{
                borderWidth: 1,
                width: '100%',
               // height: 40,
                borderRadius: 10,
                marginTop: 4,
              }}>
              <TextInput
                placeholder="Enter Username"
                //labelFontSize={14}
                value={this.state.Email}
                style={{color: '#001630', fontSize: 14,height:40}}
                keyboardType="email-address"
                onChangeText={Email => {
                  this.setState({Email});
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 4}}>
            <Text style={{color: '#000'}}>Password</Text>
            <View
              style={{
                borderWidth: 1,
                width: '100%',
                borderRadius: 10,
                marginTop: 4,
              
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 10,
              }}>
              <TextInput
                placeholder="Enter Password"
                value={this.state.Password}
                //labelFontSize={14}
                style={{color: '#001630', fontSize: 14,height:40}}
                secureTextEntry={true}
                onChangeText={Password => {
                  this.setState({Password});
                }}
              />
              <Image source={require('../../../assets/icons/eye.png')} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 2, marginTop: 4}}>Remember me ?</Text>
            </View>
            <TouchableOpacity>
              <Text style={{color: '#5F85E5'}}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          {/* onPress={()=>this.props.navigation.navigate('Dashboard') */}
          <TouchableOpacity
            onPress={this.doLogin}
            style={{
              backgroundColor: '#5F85E5',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            <Text style={{color: '#000'}}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegistrationOne')}>
              <Text style={{color: '#6496CA', marginLeft: 5}}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(Login);
