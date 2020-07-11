import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../../common/Statusbar';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('FirstPage'), 500);
  }

  //background: linear-gradient(to right, #373b44, #4286f4);

  render() {
    return (
      <LinearGradient
        colors={['#373b44', '#4286f4']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Statusbar />

        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/images/ttm_logo.png')}
          resizeMode={'center'}
        />
      </LinearGradient>
    );
  }
}
// Later on in your styles..

const styles = StyleSheet.create({
  headText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subHeadText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: '500',
    fontSize: 15,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
