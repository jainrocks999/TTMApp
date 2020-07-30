import React from 'react';
import {View, Text, Image} from 'react-native';
import Toast from '../../component/Toast';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import LoginButton from '../../component/Button';
import styles from './styles';
import { connect } from 'react-redux';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      navigateTo:props.navigation.getParam('navigateTo'),
      showPassword: true,
      User_Name:'',
      Email:'',
      Phone_Number:'',
      Password:'',
      Repeat_Password:''
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }
  doRegister=()=>{
    const {User_Name,Email,Password,Phone_Number,navigateTo} = this.state;
        // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
         if (Email == '') {
         Toast.show('Please enter valid e-mail address.');
         } else if(Password== ''){
             Toast.show('Please enter password.')
         }
         else if(Phone_Number==''){
           Toast.show('Please enter phone number')
         }
          else if(User_Name==''){
            Toast.show('Please enter name')
          }
         else{
         console.log('Register Detail'+Email+User_Name+Password+Phone_Number)
         
             this.props.dispatch({type:'User_Register_Request',
             User_Name:User_Name,Password:Password,
              navigation:this.props.navigation,navigateTo})
         }
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
            onChangeText={(User_Name)=>this.setState({User_Name:User_Name})}
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
            onChangeText={(Email)=>{this.setState({Email:Email})}}
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
            onChangeText={(Phone_Number)=>{this.setState({Phone_Number:Phone_Number})}}
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
            onChangeText={(Password)=>{this.setState({Password:Password})}}
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
            onChangeText={(Repeat_Password)=>this.setState({Repeat_Password:Repeat_Password})}
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
        <LoginButton title={'Register'} onPress={this.doRegister} />
      </View>
    );
  }
}
const mapStateToProps=(state)=>{
  console.log('Details'+JSON.stringify(state.isFetching))
    return{
        isFetching:state.isFetching,
    }
  }
  
  export default connect(mapStateToProps)(Registration)