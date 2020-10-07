import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Color from '../../common/Colors';
export default class other extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.first}>
          <Text
            style={styles.get}>
            Get Started Now
          </Text>
        </View>
        <View
          style={styles.imageView}>
          <Image
            source={require('../../assets/icons/group2.png')}
            style={styles.image}
            resizeMode={'center'}
          />
        </View>
        <View
          style={styles.touchView}>
          <TouchableOpacity
            style={styles.touch}>
            <Image
              source={require('../../assets/icons/facebook.png')}
              style={styles.fb}
            />
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ggl}>
            <Image
              source={require('../../assets/icons/google.png')}
              style={styles.gglImage}
            />
            <Text>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegistrationOne')}
            style={styles.sign}>
            <Text style={{color: Color.white}}>Signup with Email</Text>
          </TouchableOpacity>
          <View
            style={styles.exist}>
            <Text style={{color: Color.please}}>Existing User?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{color: Color.blue}}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
