import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../../common/Statusbar';
import styles from './style';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('FirstPage'), 500);
  }
  render() {
    return (
      <LinearGradient
        colors={['#373b44', '#4286f4']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Statusbar />

        <Image
          style={styles.image}
          source={require('../../assets/images/ttm_logo.png')}
          resizeMode={'center'}
        />
      </LinearGradient>
    );
  }
}
