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
    let userid = await AsyncStorage.getItem(storage.UserID);
 this.props.dispatch({type:'User_Token_Request',url:'token',usermail,password})
  
  //   const data = qs.stringify({
  //     User_Name: 'webapi_ttm',
  //     Password: 'hIrBPBcLiP@Ax9wBIR9CrjQ',
  //   });
  //   const headers = {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   };
  //   Axios.post(connection.TokenUrl, data, {headers})
  //     .then(p => {
  //       console.log('jdnjdnjdn' + userid);
  //       console.log('jdnjdnjdn' + p.data.data);
  //       if (p.data.data !== '401') {
  //         if (userid == null) {
  //           setTimeout(() => this.props.navigation.navigate('Other'), 1000);
  //         } else {
  //           setTimeout(() => this.props.navigation.navigate('AppStack'), 1000);
  //         }
  //         AsyncStorage.setItem(storage.Token, p.data.data);
  //       } else {
  //         Toast.show(p.data.error_description);
  //       }
  //     })
  //     .catch(Error);
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
            source={require('../../../assets/images/ttm_logo.png')}
            resizeMode={'contain'}
          />
        </View>
        <Statusbar />
      </LinearGradient>
    );
  }
}
const mapStateToProps=(state)=>{
  console.log('Kapil jain'+JSON.stringify(state))
  return{
      isFetching:state.Auth.isFetching,
      Token:state.Auth.Token,
  }
}

export default connect(mapStateToProps)(SplashScreen)
