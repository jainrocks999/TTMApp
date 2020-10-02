import React from 'react';
import {Image, View} from 'react-native';
import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../config/storage';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import Color from '../../../common/Colors';
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
        }
      }
    } else {
      setTimeout(() => this.props.navigation.navigate('Other'), 1000);
    }
  };

  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/app_iocn.png')}
            resizeMode={'stretch'}
          />
        </View>
        <Statusbar backgroundColor={Color.white} barStyle="dark-content" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    Token: state.Token,
  };
};
export default connect(mapStateToProps)(SplashScreen);
