import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text,Image,View,TextInput,TouchableOpacity,Alert,SafeAreaView} from 'react-native';

import LoginButton from '../../component/Button';
import Statusbar from '../../common/Statusbar';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import Loader from '../../component/Loader';


 class Logindata extends React.Component {
  constructor(props){
        super(props)
        this.state = {
            navigateTo:props.navigation.getParam('navigateTo'),
            name:'webapi_ttm',
            password:'hIrBPBcLiP@Ax9wBIR9CrjQ',
               }
  }
doLogin=()=>{
   const {name,password,Token,navigateTo} = this.state;
       // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (name == '') {
        Toast.show('Please enter valid e-mail address.');
        } else if(password == ''){
            Toast.show('Please enter password.')
        } else{
        console.log('name'+name)
        console.log('pass'+password)
            this.props.dispatch({type:'User_Login_Request',url:'token',
            User_Name:name,Password:password,
            name,password,navigation:this.props.navigation,navigateTo})
        }
}
  render() {
    const {password,name,eyewidth} = this.state;
   const {navigation,isFetching} = this.props
    return (
     <SafeAreaView style={{flex:1}}>
     <View style={{flex:1}}>
                 {isFetching
                ?<Loader/> 
                :null}
      <View style={styles.container}>
        <Text style={styles.headText}>Log in</Text>
        <Text style={styles.subHeadText}>
          To Start Using My day have to login
        </Text>
        <View style={styles.textInputContainer}>
          <Icon style={{color: 'black'}} name="person-outline" size={20} />

          <TextInput
          value={name}
            style={{paddingLeft: 10}}
            placeholder={'User Name'}
            placeholderTextColor={'black'}
             onChangeText={(text)=>this.setState({name:text})}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Icon style={styles.icons} name="lock-closed-outline" size={20} />

          <TextInput
          value={password}
            style={{paddingLeft: 10}}
            placeholder={'Password'}
            placeholderTextColor={'black'}
             onChangeText={(text)=>this.setState({password:text})}
          />
        </View>

        <Text style={styles.text}>Forgot Your Password</Text>
        <LoginButton title={'Login'} onPress={()=>this.doLogin()}/>
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

            </View>
            </SafeAreaView>
    );
  }
}

  const mapStateToProps=(state)=>{
  console.log('ggggggggggggggggggg'+JSON.stringify(state.isFetching))
    return{
        isFetching:state.isFetching,
    }
  }
  
  export default connect(mapStateToProps)(Logindata)