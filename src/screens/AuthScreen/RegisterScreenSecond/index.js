import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Picker,
  StatusBar,Alert
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style.js';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../config/storage';
import qs from 'qs';
import Axios from 'axios';
import RNPickerSelect  from 'react-native-picker-select';
import Spinner from 'react-native-loading-spinner-overlay';
import connection from '../../../Redux/Constants';
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
      CountryId: '',
      Company_Name: 'BRAND',
    };

    this.loaddata();
  }
  loaddata = async () => {
    const UserId = this.props.navigation.getParam('UserId');

    const FirstName = this.props.navigation.getParam('FirstName');
    const lastname = this.props.navigation.getParam('lastname');
    const Email = this.props.navigation.getParam('Email');
    const company = this.props.navigation.getParam('company');
    let token = await AsyncStorage.getItem(storage.Token);
    console.log('userId' + UserId);
    console.log('userId' + FirstName);
    console.log('userId' + Email);
    console.log('userId' + lastname);
    console.log('userId' + company);
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
    // Alert.alert('API is missing')
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
        CountryId: 99,
        Company_Name: Company_Name,
      });
      console.log('ppp' + data);
      console.log('ppp' + token);
      const headers = {
        Authorization: 'bearer ' + token,
        // 'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
     // console.log('dkaskflaskfld'+connection.Signup)
      Axios.post(connection.Signup, data, {headers})
    
        .then(p => {
          console.log('rrrrrrrrrrr' + JSON.stringify(p));
          if (p.data.Status == true) {
            console.log('rrrrrrrrrrr' + p.data.Status);
            Toast.show(p.data.message);
            setTimeout(() => this.props.navigation.navigate('Login'), 2000);
             AsyncStorage.setItem(storage.Token,p.data.data);
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
    }
  };
  getCountry = () => {
    const {
     name,
     Id,
     token
    } = this.state;
      const headers = {
        Authorization: 'bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      Axios.get(connection.Country,{headers})
    
        .then(p => {
          console.log('country data' + JSON.stringify(p));
          if (p.data.Status == true) {
            console.log('country status' + p.data.Status);
            Toast.show(p.data.message);
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
      console.log('PPPPPP' + Error);
    }
  
/////State
    getState = () => {
      const {
        Id,
        State,
        token
      } = this.state;
        const headers = {
          Authorization: 'bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        Axios.get(connection.State,{headers})
      
          .then(p => {
            console.log('State data' + JSON.stringify(p));
            if (p.data.Status == true) {
              console.log('state status' + p.data.Status);
              Toast.show(p.data.message);
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
        console.log('PPPPPP' + Error);
      }
    
  //
  
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
              source={require('../../../assets/icons/arrow.png')}
              resizeMode={'stretch'}
              style={{width: 20, height: 15, color: 'grey'}}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.register}>New User Registration</Text>
          <Text style={styles.please}>Please the details to register</Text>

          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/images/registration_two.png')}
              style={styles.image}
              resizeMode={'stretch'}
            />
          </View>
           
          <View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={[styles.inputContainer1]}>
                <Text >Country</Text>
              
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholder="Country"
                  value={this.state.CountryId}
                  onChangeText={CountryId => {
                    this.setState({CountryId: 99});
                  }}
                />
              
              </View>
              <View style={[styles.inputContainer1]}>
                <Text >State</Text>
                <TextInput
                  style={styles.input}
                  placeholder="state"
                  value={this.state.state}
                  onChangeText={state => {
                    this.setState({state: state});
                  }}
                />
      
              
              </View>
              
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.inputContainer1}>
                <Text>City</Text>
                <TextInput
                  style={styles.input}
                  placeholder="City"
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          </View>

          <TouchableOpacity style={styles.button} onPress={this.doRegister}>
            <Text style={[{color: 'white'}, styles.font]}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
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