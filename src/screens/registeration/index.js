import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import LoginButton from '../../component/Button';

export default class Registration extends React.Component {
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
        <Icon
          style={{color: 'black'}}
          onPress={() => this.props.navigation.goBack()}
          name="arrow-back"
          size={30}
        />

        <Text
          style={{
            fontSize: 25,
            marginVertical: 10,
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro',
          }}>
          Registration
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon
            style={{color: 'black'}}
            onPress={() => this.props.navigation.toggleDrawer()}
            name="person-outline"
            size={20}
          />

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
          <Icon
            style={{color: 'black'}}
            onPress={() => this.props.navigation.toggleDrawer()}
            name="mail-open-outline"
            size={20}
          />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Email'}
            placeholderTextColor={'black'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon
            style={{color: 'black'}}
            onPress={() => this.props.navigation.toggleDrawer()}
            name="call-outline"
            size={20}
          />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Phone Number'}
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon
            style={{color: 'black'}}
            onPress={() => this.props.navigation.navigate('AuthNavigator')}
            name="lock-closed-outline"
            size={20}
          />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Password'}
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Icon
            style={{color: 'black'}}
            onPress={() => this.props.navigation.toggleDrawer()}
            name="lock-closed-outline"
            size={20}
          />

          <TextInput
            style={{paddingLeft: 10}}
            placeholder={'Repeat Password'}
            placeholderTextColor={'black'}
            secureTextEntry={this.state.showPassword}
          />
        </View>
        <Text
          style={{marginTop: 20, fontSize: 16, fontFamily: 'SourceSansPro'}}>
          Alternative login methods
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            width: 70,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/images/twitter.png')}
          />
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/images/fb.png')}
          />
          <Image
            style={{height: 20, width: 20}}
            source={require('../../assets/images/google.png')}
          />
        </View>
        <LoginButton title={'Register'} />
      </View>
    );
  }
}
