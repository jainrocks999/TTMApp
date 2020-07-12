import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import LoginButton from '../../component/Button';
import styles from './styles';

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
      <View style={styles.container}>
        <Icon
          style={{color: 'black'}}
          onPress={() => this.props.navigation.navigate('FirstPage')}
          name="arrow-back"
          size={30}
        />

        <Text style={styles.headText}>Registration</Text>
        <View style={styles.textInputContainer}>
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
        <View style={styles.textInputContainer}>
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

        <View style={styles.textInputContainer}>
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
        <View style={styles.textInputContainer}>
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
        <View style={styles.textInputContainer}>
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
        <Text style={styles.text}>Alternative login methods</Text>
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
        <LoginButton title={'Register'} />
      </View>
    );
  }
}
