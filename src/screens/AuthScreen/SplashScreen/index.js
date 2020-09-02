import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../../../common/Statusbar';
import styles from './style';
import { connect } from 'react-redux';

import connection from '../../../Redux/Constants';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../config/storage';
import qs from 'qs';
import Axios from 'axios';
 class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      usermail:'webapi_ttm',
      password:'hIrBPBcLiP@Ax9wBIR9CrjQ'
    };
    this.loaddata();
  }

  loaddata = async () => {
     const {usermail, password} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
 this.props.dispatch({type:'User_Token_Request',url:'token',usermail,password})
         console.log('kya hua '+userid)
          if (userid == null) {
            setTimeout(() => this.props.navigation.navigate('Other'), 1000);
          } else {
            setTimeout(() => this.props.navigation.navigate('AppStack'), 1000);
          }
   };

  render() {
    return (
      <LinearGradient
        colors={['#373b44', '#4286f4']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/app_iocn.png')}
            resizeMode={'stretch'}
          />
        </View>
        <Statusbar />
      </LinearGradient>
    );
  }
}
const mapStateToProps=(state)=>{
  console.log('Kapil jain'+JSON.stringify(state))
  //console.log('Kapil jain'+JSON.stringify(Token))
  return{
      isFetching:state.isFetching,
      Token:state.Token,
  }
}

export default connect(mapStateToProps)(SplashScreen)
