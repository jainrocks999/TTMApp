import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  StatusBar,Alert
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style.js';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../config/storage';
import qs from 'qs';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import connection from '../../../Redux/Constants';
import Toast from 'react-native-simple-toast';
import Color from '../../../common/Colors';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';

class Registration extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      language: 'java',
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
      countryName:[],
      selectedCountry:'',
      stateName:[],
      selectedState:'',
      selectedValue:'java'
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
    this.getCountry();
    this.getState();
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
      const headers = {
        Authorization: 'bearer ' + token,
        // 'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      Axios.post(connection.Signup, data, {headers})
        .then(p => {
          if (p.data.Status == true) {
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
    // this.props.dispatch({
    //   type: 'User_Register_Success',
    //   url:'NewTMApi/Register',
    //   token: token,
    //   data:data
    // });
  };

  getCountry = () => {
    const {
      token,
    } = this.state;
      this.props.dispatch({
        type: 'User_Country_Request',
        url:'NewTMApi/CountryMst',
        token: token,
      });
    }
  //   getState = () => {
  //     const {
  //       token
  //     } = this.state;
  //     this.props.dispatch({
  //       type: 'User_State_Request',
  //       url:'NewTMApi/StateMst?CountryID=9',
  //       token: token,
  //     }); 
  //  }
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
              stateName:p.data.data
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
    
    let myCountry = this.props.CountryName.map((myValue,myIndex)=>{
      return(
      <Picker.Item label={myValue.name} value={myIndex} key={myIndex}/>
      )
      });
      let myState = this.state.stateName.map((myValue,myIndex)=>{
        return(
        <Picker.Item label={myValue.state} value={myIndex} key={myIndex}/>
        )
        });

    return (
      <View style={styles.view}>
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
              style={styles.arrow}
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
              style={styles.countryView}>
              <View style={styles.inputContainer1}>
                <Text >Country</Text>
               
                <View style={styles.input}>
                <Picker 
                selectedCountry={this.state.selectedCountry} 
                onValueChange={(value) =>this.setState({selectedCountry:value})}>
                  
            {myCountry}
           </Picker>
            </View>
            
              </View>
               
              <View style={[styles.inputContainer1]}>
                <Text >State</Text>
                <View style={styles.input}>
           <Picker 
           selectedState={this.state.selectedState} 
           onValueChange={(value)=>this.setState({selectedState:value})} >
            {myState}
           </Picker>
            </View>
            
              </View>
            </View>
            <View
              style={styles.countryView}>
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
              style={styles.countryView}>
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
            <Text style={[{color: Color.white}, styles.font]}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
        <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CountryName:state.CountryName,
    // User:state.User
    // stateName:state.stateName
  };
};

export default connect(mapStateToProps)(Registration);