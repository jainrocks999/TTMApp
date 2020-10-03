import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import storage from '../../../config/storage';
import Spinner from 'react-native-loading-spinner-overlay';
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
      spinner: false,
      isSelected: false,
    };
    this.loaddata();
  }

  loaddata = async () => {
    let token = await AsyncStorage.getItem(storage.Token);
    console.log('token check login' + token);
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

  render() {
    return (
      <View style={{flex: 1, paddingRight: 10, paddingLeft: 10, marginTop: 4}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{color: Color.white}}
        />
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

        <ScrollView style={{flex: 1}}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/icons/group1.png')}
              style={styles.image}
              resizeMode={'center'}
            />
          </View>
          <View
            style={styles.loginWithUser}>
            <Text style={{color: Color.black}}>
              Login with Username/Mobile Number
            </Text>
          </View>
          <View>
            <Text style={{color: '#000'}}>Username</Text>
            <View
              style={styles.inputView}>
              <TextInput
                placeholder="Enter Username"
                value={this.state.Email}
                style={styles.input}
                keyboardType="email-address"
                onChangeText={Email => {
                  this.setState({Email});
                }}
              />
            </View>
          </View>
          <View style={{marginTop: 4}}>
            <Text style={{color: Color.black}}>Password</Text>
            <View
              style={styles.passwordView}>
              <TextInput
                placeholder="Enter Password"
                value={this.state.Password}
                style={styles.passwordInput}
                secureTextEntry={true}
                onChangeText={Password => {
                  this.setState({Password});
                }}
              />
              <Image 
              source={require('../../../assets/icons/eye.png')} />
            </View>
          </View>
          <View
            style={styles.remember}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 2, marginTop: 4}}>Remember me ?</Text>
              <CheckBox value={this.state.isSelected} style={styles.checkbox} />
            </View>
            <TouchableOpacity>
              <Text style={{color: Color.blue}}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={this.doLogin}
            style={styles.button}>
            <Text style={{color: Color.white}}>Login</Text>
          </TouchableOpacity>

          <View
            style={styles.dont}>
            <Text style={{color: Color.black}}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegistrationOne')}>
              <Text style={{color: Color.green, marginLeft: 5}}>
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
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(Login);
