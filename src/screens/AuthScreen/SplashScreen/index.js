import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';

import connection from '../../../Redux/Constants';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../config/storage';
import qs from 'qs';
import Axios from 'axios';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      usermail: 'webapi_ttm',
      password: 'hIrBPBcLiP@Ax9wBIR9CrjQ',
    };
    this.loaddata();
  }

  loaddata = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('isSignedIn : ', isSignedIn);
    const {usermail, password} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    this.props.dispatch({
      type: 'User_Token_Request',
      url: 'token',
      usermail,
      password,
    });
    console.log('kya hua ' + userid);

    if (isSignedIn == true || userid != null) {
      setTimeout(() => this.props.navigation.navigate('AppStack'), 1000);

      try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({userInfo});
        console.log('userInformation : ', userInfo.user.name);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
          console.log('user has not signed in yet : ', error.code);
        } else {
          console.log('some other error : ', error);

          // some other error
        }
      }
    } else {
      setTimeout(() => this.props.navigation.navigate('Demo'), 1000);
    }
  };

  render() {
    return (
      // <LinearGradient
      //   colors={['#373b44', '#4286f4']}
      //   style={styles.container}
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 1}}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/app_iocn.png')}
            resizeMode={'stretch'}
          />
        </View>
        <Statusbar />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('Kapil jain' + JSON.stringify(state));
  //console.log('Kapil jain'+JSON.stringify(Token))
  return {
    isFetching: state.isFetching,
    Token: state.Token,
  };
};

export default connect(mapStateToProps)(SplashScreen);
