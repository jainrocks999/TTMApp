import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Constants from '../../config/constants';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

GoogleSignin.configure();

export default class other extends React.Component {
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '1081701070616-8qee66fb0m3dvn4vo6bdpdcuogt803h7.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }

  fbLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo: userInfo, loggedIn: true});
      console.log('UserInfo :     ', this.state.userInfo);
      console.log(
        'Name : ',
        this.state.userInfo &&
          this.state.userInfo.user &&
          this.state.userInfo.user.name,
      );
      if (this.state.userInfo && this.state.userInfo.user !== '') {
        console.log('kya');

        this.props.navigation.navigate('AppStack');
        //this.props.navigation.navigate('newscreen')
      }

      let userDetails = {
        name:
          this.state.userInfo &&
          this.state.userInfo.user &&
          this.state.userInfo.user.name,
        email:
          this.state.userInfo &&
          this.state.userInfo.user &&
          this.state.userInfo.user.email,
        id:
          this.state.userInfo &&
          this.state.userInfo.user &&
          this.state.userInfo.user.id,
      };
      AsyncStorage.setItem('user', JSON.stringify(userDetails));

      // this.setState({isModalVisible: true});
      // this.setState({spinner: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo});
      console.log('currentUser :      ', userInfo);
      console.log('UserInfo :     ', this.state.userInfo);
      console.log(
        'Name : ',
        this.state.userInfo &&
          this.state.userInfo.user &&
          this.state.userInfo.user.name,
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({loggedIn: false});
      } else {
        // some other error
        this.setState({loggedIn: false});
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('SignOut');

      this.setState({user: null, loggedIn: false}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'normal',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
            }}>
            Get Started Now
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 75,
          }}>
          <Image
            source={require('../../assets/icons/group2.png')}
            style={{width: 340, height: 250}}
            resizeMode={'center'}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 80,
            marginTop: 40,
          }}>
          <TouchableOpacity
            onPress={this.fbLogin}
            style={{
              backgroundColor: '#eef1f4',
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/icons/facebook.png')}
              style={{
                width: 10,
                height: 18,
                marginRight: 10,
              }}
            />
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._signIn}
            style={{
              backgroundColor: '#eef1f4',
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/icons/google.png')}
              style={{
                width: 17,
                height: 18,
                marginRight: 10,
              }}
            />
            <Text>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegistrationOne')}
            style={{
              backgroundColor: '#5f85e5',
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
              marginTop: 35,
            }}>
            <Text style={{color: 'white'}}>Signup with Email</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: '#98999a'}}>Existing User?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{color: '#5f85e5'}}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
