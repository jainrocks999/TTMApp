import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Picker,
  StatusBar,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style.js';
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
    const UserId = navigation.getParam('UserId');
    const FirstName = navigation.getParam('FirstName');
    const lastname = navigation.getParam('lastname');
    const Email = navigation.getParam('Email');
    const company = navigation.getParam('company');
    let token = await AsyncStorage.getItem(storage.Token);
    this.setState({
      token: token,
      UserId: UserId,
      FirstName: FirstName,
      lastname: lastname,
      Email: Email,
      company: company,
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
    if (city == '') {
      Toast.show('Please enter city name.');
    } else if (pincode == '') {
      Toast.show('Please enter Pin Code.');
    } else if (address == '') {
      Toast.show('Please enter  address');
    } else if (Phone == '') {
      Toast.show('Please enter Phone number');
    } else {
      this.setState({
        spinner: true,
      });
      const data = qs.stringify({
        UserId: UserId,
        firstname: FirstName,
        lastname: lastname,
        email: Email,
        company: company,
        state: state,
        city: city,
        pincode: pincode,
        address: address,
        NationalCode: '+91',
        Phone: Phone,
        CountryId: CountryId,
        Company_Name: Company_Name,
      });
      console.log('ppp' + data);
      console.log('ppp' + token);
      const headers = {
        Authorization: 'bearer ' + token,
        // 'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      Axios.post(connection.Registeruser, data, {headers})
        .then(p => {
          console.log('rrrrrrrrrrr' + JSON.stringify(p));
          if (p.data.Status == true) {
            console.log('rrrrrrrrrrr' + p.data.Status);
            Toast.show(p.data.message);
            // setTimeout(() => this.props.navigation.navigate('FirstPage'), 2000);
            //  AsyncStorage.setItem(storage.Token,p.data.data);
            this.setState({
              spinner: false,
            });
          } else {
            Toast.show(p.data.message);
            this.setState({
              spinner: false,
            });
          }
        })
        .catch(Error);
      console.log('ddddddd' + Error);

      //   this.props.dispatch({
      //     type: 'User_Register_Request',
      //

      //   });
    }
  };
  render() {
    return (
      <View style={{flex: 1, padding: 14, backgroundColor: '#fff'}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegistrationOne')}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              resizeMode={'stretch'}
              style={{width: 20, height: 15, color: 'grey'}}
            />
          </TouchableOpacity>
          <Text style={styles.register}>New User Registration</Text>
          <Text style={styles.please}>Please fill detail for register</Text>
        </View>

        <View style={styles.imageView}>
          <Image
            source={require('../../assets/images/registration_two.png')}
            style={styles.image}
          />
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.inputContainer1]}>
              <Text>Country</Text>
              <View
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.ResponseCode}
                  style={{
                    fontSize: 14,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  itemTextStyle={{
                    fontSize: 14,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  textStyle={{
                    fontSize: 16,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.resposecode(itemValue)
                  }>
                  <Picker.Item
                    label="-- Country --"
                    value="Frequency"
                    color="#3386FF"
                  />
                  {this.renderview()}
                </Picker>
              </View>
            </View>
            <View style={[styles.inputContainer1]}>
              <Text>State</Text>
              <View
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.ResponseCode}
                  style={{
                    fontSize: 14,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  itemTextStyle={{
                    fontSize: 14,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  textStyle={{
                    fontSize: 16,
                    color: '#4E5764',
                    fontFamily: 'Gilroy-Medium',
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.resposecode(itemValue)
                  }>
                  <Picker.Item
                    label="-- state --"
                    value="Frequency"
                    color="#3386FF"
                  />
                  {this.renderview()}
                </Picker>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.inputContainer1}>
              <Text>City</Text>
              <TextInput
                style={styles.input}
                placeholder="city"
                value={this.state.city}
                onChangeText={city => {
                  this.setState({city: city});
                }}
              />
            </View>
            <View style={styles.inputContainer1}>
              <Text>Pincode</Text>
              <TextInput
                style={styles.input}
                placeholder="Pincode"
                keyboardType="numeric"
                value={this.state.pincode}
                onChangeText={pincode => {
                  this.setState({pincode: pincode});
                }}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text>Address</Text>
            <TextInput
              style={styles.input}
              placeholder={'Address'}
              value={this.state.address}
              onChangeText={address => {
                this.setState({address: address});
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.inputContainer1}>
              <Text>Country Code</Text>
              <TextInput
                style={[styles.input, {backgroundColor: '#E9ECEF'}]}
                placeholder={'+91'}
                placeholderTextColor={'black'}
                keyboardType="numeric"
                onChangeText={Phone_Number => {
                  this.setState({Phone_Number: Phone_Number});
                }}
              />
            </View>
            <View style={styles.inputContainer1}>
              <Text>Mobile number</Text>
              <TextInput
                style={styles.input}
                placeholder={'Mobile number'}
                value={this.state.Phone}
                keyboardType="phone-pad"
                onChangeText={Phone => {
                  this.setState({Phone: Phone});
                }}
              />
            </View>
          </View>
          <ScrollView />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.doRegister}>
          <Text style={[{color: 'white'}, styles.font]}>Register</Text>
        </TouchableOpacity>

        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isFetching: state.isFetching,
//   };
// };

export default Registration;
