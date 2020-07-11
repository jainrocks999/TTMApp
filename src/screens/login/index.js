import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import LoginButton from '../../component/Button';
import Statusbar from '../../common/Statusbar';

export default class Login extends React.Component {
  state = {
    password: '',
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
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <Text
          style={{
            fontFamily: 'SourceSansPro-Bold',
            fontSize: 22,
            marginVertical: 10,
            fontWeight: 'bold',
            marginTop: 100,
          }}>
          Log in
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 10,
            fontFamily: 'SourceSansPro',
          }}>
          To Start Using My day have to login
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon style={{color: 'black'}} name="person-outline" size={20} />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'User Name'}
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon style={{color: 'black'}} name="lock-closed-outline" size={20} />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Password'}
            placeholderTextColor={'black'}
          />
        </View>

        <Text
          style={{
            marginVertical: 20,
            fontSize: 14,
            fontFamily: 'SourceSansPro',
          }}>
          Forgot Your Password
        </Text>
        <LoginButton title={'Login'} />
        <Text
          style={{
            marginTop: 20,
            fontSize: 14,
            fontFamily: 'SourceSansPro',
          }}>
          Alternative Login Methods
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            width: 80,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/images/twitter.png')}
          />
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/images/fb.png')}
          />
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/images/google.png')}
          />
        </View>
      </View>
    );
  }
}
