import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import LoginButton from '../../component/Button';
import Statusbar from '../../common/Statusbar';
import styles from './styles';

export default class Login extends React.Component {
  state = {
    password: '',
  };

  showAlert = () => {
    Alert.alert('You need to...');
  };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Log in</Text>
        <Text style={styles.subHeadText}>
          To Start Using My day have to login
        </Text>
        <View style={styles.textInputContainer}>
          <Icon style={{color: 'black'}} name="person-outline" size={20} />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'User Name'}
            placeholderTextColor={'black'}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Icon style={styles.icons} name="lock-closed-outline" size={20} />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Password'}
            placeholderTextColor={'black'}
          />
        </View>

        <Text style={styles.text}>Forgot Your Password</Text>
        <LoginButton title={'Login'} />
        <Text style={styles.text}>Alternative Login Methods</Text>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/twitter.png')}
          />
          <Image
            style={styles.icons}
            source={require('../../assets/images/fb.png')}
          />
          <Image
            style={styles.icons}
            source={require('../../assets/images/google.png')}
          />
        </View>
      </View>
    );
  }
}
