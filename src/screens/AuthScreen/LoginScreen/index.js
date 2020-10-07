import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box'
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import storage from '../../../config/storage';

import AsyncStorage from '@react-native-community/async-storage';
import Color from '../../../common/Colors';
import styles from './style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      token: '',
      isSelected: false,
     
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
    }
    this.loaddata();
  }

  loaddata = async () => {
    let token = await AsyncStorage.getItem(storage.Token);
    let user = await AsyncStorage.getItem(storage.user);
    let pass = await AsyncStorage.getItem(storage.Passwrod);
    this.setState({
      Email: user,
      Password: pass,
      token: token,
    });
  };
  doLogin = () => {
    const { Email, Password, token, isSelected } = this.state;
    if (isSelected == true) {
      AsyncStorage.setItem(storage.user, Email);
      AsyncStorage.setItem(storage.Passwrod, Password);
      AsyncStorage.setItem(storage.check,"true");
    }else{
      AsyncStorage.setItem(storage.user, '');
      AsyncStorage.setItem(storage.Passwrod, '');
      AsyncStorage.setItem(storage.check,'');
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email == '') {
      Toast.show('Please enter valid e-mail address.');
    } else if (Password == '') {
      Toast.show('Please enter password.');
    } else {     
      console.log('rohit chck ' + isSelected)
      this.props.dispatch({
        type: 'User_Login_Request',
        url: 'NewTMApi/Login',
        Email,
        Password,
        token: token,
      });
      this.props.navigation.navigate('AppStack');

    }
  };
  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  render() {
    return (
      <View style={styles.main}>
        
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/arrow.png')}
              resizeMode={'center'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text
            style={styles.loginNow}>
            Login Now
          </Text>
          <Text style={styles.please}>
            Please login to continue our app
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/icons/group1.png')}
              style={styles.image}
              resizeMode={'center'}
            />
          </View>
          <View
            style={styles.loginWithUser}>
            <Text style={{ color: Color.black }}>
              Login with Username/Mobile Number
            </Text>
          </View>
          <View>
            <Text style={{ color: '#000' }}>Username</Text>
            <View
              style={styles.inputView}>
              <TextInput
                placeholder="Enter Username"
                value={this.state.Email}
                style={styles.input}
                keyboardType="email-address"
                onChangeText={Email => {
                  this.setState({ Email });
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 4 }}>
            <Text style={{ color: Color.black }}>Password</Text>
            <View
              style={styles.passwordView}>
              <TextInput
                placeholder="Enter Password"
                value={this.state.Password}
                style={styles.passwordInput}
                secureTextEntry={this.state.showPassword}
                onChangeText={Password => {
                  this.setState({ Password });
                }}
              />
              <TouchableOpacity onPress={this.toggleSwitch}>
              <Image
                source={require('../../../assets/icons/eye.png')} />
                </TouchableOpacity>
            </View>
          </View>
          <View
            style={styles.remember}>
            <View style={styles.checkbox}>
              <CheckBox
                style={{ padding: 4 }}
                onClick={() => {
                  this.setState({
                    isSelected: !this.state.isSelected
                  })
                }}
                isChecked={this.state.isSelected}
              />
              <Text style={{ marginTop: 4, padding: 4 }}>Remember me ?</Text>
            </View>

            <TouchableOpacity>
              <Text style={{ color: Color.blue }}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={this.doLogin}
            style={styles.button}>
            <Text style={{ color: Color.white }}>Login</Text>
          </TouchableOpacity>

          <View
            style={styles.dont}>
            <Text style={{ color: Color.black }}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegistrationOne')}>
              <Text style={{ color: Color.green, marginLeft: 5 }}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(Login);
