import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Picker,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import resstyle from './style.js';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../config/storage';
import qs from 'qs';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import connection from '../../Redux/Constants';
import RNPickerSelect from 'react-native-picker-select';
import Toast from 'react-native-simple-toast';

class Registration extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
      token: '',
      UserId: '',
      FirstName: '',
      lastname: '',
      Email: '',
      company: '',
      state: '',
      city: '',
      pincode: '',
      spinner: false,
      address: '',
      NationalCode: '+91',
      Phone: '',
      CountryId: '99',
      Company_Name: 'BRAND',
    };

    this.loaddata();
  }
  loaddata = async () => {
    let token = await AsyncStorage.getItem(storage.Token);
    this.setState({
      token: token,
    });
  };
  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }
  renderview = () => {
    if (this.state.ResponseArray == undefined) {
    } else {
      return this.state.ResponseArray.map((item, key) => (
        <Picker.Item
          label={item.RESPONSE_CODE}
          value={item.RESPONSE_CODE}
          key={key}
        />
      ));
    }
  };
  doRegister = () => {
    const {
      FirstName,
      UserId,
      lastname,
      Email,
      company,
      state,
      token,
      city,
      pincode,
      address,
      NationalCode,
      Phone,
      CountryId,
      Company_Name,
      navigateTo,
    } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (UserId == '') {
      Toast.show('Please enter User ID.');
    } else if (FirstName == '') {
      Toast.show('Please enter First name.');
    } else if (lastname == '') {
      Toast.show('Please enter last name.');
    } else if (Email == '') {
      Toast.show('Please enter e-mail address');
    } else if (company == '') {
      Toast.show('Please enter company name');
    } else {
      this.props.navigation.navigate('RegistrationTwo', {
        UserId: UserId,
        FirstName: FirstName,
        lastname: lastname,
        Email: Email,
        company: company,
      });
    }
  };
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, padding: 14, backgroundColor: '#fff'}}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={resstyle.spinnerTextStyle}
          />
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                resizeMode={'stretch'}
                style={{width: 20, height: 15, color: 'grey'}}
              />
            </TouchableOpacity>
            <Text style={resstyle.register}>New User Registration</Text>
            <Text style={resstyle.please}>Please fill detail for register</Text>
          </View>
          <View style={{marginTop: 50, marginBottom: 30}}>
            <View style={resstyle.inputContainer}>
              <Text>User Id</Text>
              <TextInput
                value={this.state.UserId}
                style={resstyle.input}
                placeholder={'User ID'}
                placeholderTextColor={'#B0B3B7'}
                onChangeText={UserId => {
                  this.setState({UserId: UserId});
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={resstyle.inputContainer1}>
                <Text>First Name</Text>
                <TextInput
                  style={resstyle.input2}
                  placeholder={'First Name'}
                  value={this.state.FirstName}
                  onChangeText={firstname => {
                    this.setState({FirstName: firstname});
                  }}
                />
              </View>
              <View style={resstyle.inputContainer1}>
                <Text>Last Name</Text>
                <TextInput
                  style={resstyle.input2}
                  placeholder={'Last Name'}
                  value={this.state.lastname}
                  onChangeText={lastname => {
                    this.setState({lastname: lastname});
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <View style={resstyle.inputContainer1}>
                <Text>Email</Text>
                <TextInput
                  style={resstyle.input2}
                  placeholder={'Email'}
                  value={this.state.Email}
                  onChangeText={Email => {
                    this.setState({Email: Email});
                  }}
                />
              </View>
              <View style={resstyle.inputContainer1}>
                <Text>Company Name</Text>
                <TextInput
                  style={resstyle.input2}
                  placeholder={'Company'}
                  value={this.state.company}
                  onChangeText={company => {
                    this.setState({company: company});
                  }}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: '#343A40',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 100,
                width: 70,
                height: 70,
              }}
              onPress={this.doRegister}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  // tintColor: '#ffff',
                  alignSelf: 'center',
                }}
                resizeMode={'center'}
                source={require('../../assets/icons/next.png')}
              />
            </TouchableOpacity>
          </View>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        </View>
      </ScrollView>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isFetching: state.isFetching,
//   };
// };

export default Registration;
