import React from 'react';
import {Image, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
export default class FirstScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Hop on the Hype Train!</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/icons/group1.png')}
            style={styles.image}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.login}>
          <Text style={styles.loginText}>Login Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continue}>
          <View
            style={{
              width: 20,
              height: 20,
              marginRight: 6,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 11, height: 11}}
              resizeMode={'stretch'}
              source={require('../../assets/icons/facebook.png')}
            />
          </View>
          <Text style={styles.text}>Continue with Faceook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 8}}
          onPress={() => this.props.navigation.navigate('RegistrationOne')}>
          <Text style={styles.email}>Signup with Email</Text>
        </TouchableOpacity>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}
