import React from 'react';
import { View,ScrollView,Text,StyleSheet,Image,StatusBar,TextInput,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import connection from '../../Redux/Constants';
import storage from '../../config/storage';
import Spinner from 'react-native-loading-spinner-overlay';
import {takeEvery,put,call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs';
import Axios from 'axios';
var token='';
 class Login extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          Email:'',
          Password:'',
          token:'',
          spinner:false,
        };
        this.loaddata();
      }

   loaddata=async()=> {
         let token= await AsyncStorage.getItem(storage.Token)
         this.setState({
           token:token
         })
   }
      doLogin=()=>{
            const {Email,Password,token} = this.state;
                 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
                 if (Email == '') {
                 Toast.show('Please enter valid e-mail address.');
                 } else if(Password== ''){
                     Toast.show('Please enter password.')
                 }else{
                  
 this.setState({
      spinner:true
    })
 const data = qs.stringify({
                    User_Name: Email,
                   Password: Password,
                   Company_Name:'BRAND'
                });
                console.log("ppp"+data)
                console.log("ppp"+token)
                const headers = {
                   'Authorization': 'bearer ' + token,
                    // 'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded',
                };
                Axios.post(connection.LoginUrl,
                    data,
                    {headers}
                ).then(p => {
                  console.log("rrrrrrrrrrr"+JSON.stringify(p))
                    if (p.data.Status == true) {
                       this.props.navigation.navigate('AppStack')
                      console.log("rrrrrrrrrrr"+JSON.stringify(p.data.data.UserID))
                      AsyncStorage.setItem(storage.UserID,JSON.stringify(p.data.data.UserID));  
                      AsyncStorage.setItem(storage.UserName,(p.data.data.UserName));  
                       Toast.show(p.data.message) 
                  this.setState({
                    spinner:false
                  })
                  
                    } else {
                        Toast.show(p.data.message);
                        this.setState({
                          spinner:false
                        })
                      
                    }
                }).catch(Error);
                console.log('ddddddd'+(Error))
  
           }
      }
  
  render(){
    return(
      <View style={{ flex:1,padding:14}}>
       <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={{color:'#fff'}}
                />
        <View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('FirstPage')}>
          <Image source={require('../../assets/icons/arrow.png')} 
           resizeMode={'stretch'}

          style={{width:20,height:15,color:'grey'}}/>
          </TouchableOpacity>
          <Text style={{fontWeight:'300',fontFamily:'Poppins-SemiBold',fontSize:22,marginTop:10}}>
            Login Now
          </Text>
          <Text style={{color:'#000',fontSize:14}}>Please login to continue our app</Text>
        </View>
         <View style={{justifyContent:'center',alignItems:'center',padding:10,marginTop:100}}>
           <Text style={{color:'#000'}}>
             Login with
           </Text>
         </View>
         <ScrollView style={{flex:1}}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Other')}
                style={{alignItems:'center',borderColor :'#000', justifyContent:'center',borderWidth:1,paddingHorizontal:72,borderRadius:8,padding:8}}>
                  <Image source={require('../../assets/icons/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',borderColor :'#000',alignItems:'center',borderWidth:1,paddingHorizontal:65,borderRadius:10,padding:8}}>
                  <Image source={require('../../assets/icons/google.png')} />
                </TouchableOpacity>
         </View>
         <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
            <Text style={{color:'#000'}}>
              or login with email/mobile
            </Text>
         </View>
         <View>
           <Text style={{color:'#000'}}>
             E-mail ID or Mobile Number
           </Text>
           <View style={{borderWidth:1,width:'100%',height:40,borderRadius:10,marginTop:10}}>
            
                        <TextInput
                            placeholder="Enter Username"
                          
                            //labelFontSize={14}
                            value={this.state.Email}
                            style={{ color: '#001630', fontSize: 14 }}
                            keyboardType='email-address'
                            onChangeText={(Email) => {
                                this.setState({Email})
                            }}
                        />
           </View>
         </View>
         <View style={{marginTop:10}}>
           <Text style={{color:'#000'}}>
            Password
           </Text>
           <View style={{borderWidth:1,width:'100%',borderRadius:10,
           marginTop:10,height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingRight:10}}>
            <TextInput
                            placeholder="Enter Password"
                            value={this.state.Password}
                            //labelFontSize={14}
                            style={{ color: '#001630', fontSize: 14 }}
                            secureTextEntry={true}
                            onChangeText={(Password) => {
                        this.setState({ Password })
                            }}
                        />
             <Image 
            source={require('../../assets/icons/eye.png')} 
            
           />
           </View>
         </View>
         <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
              <View style={{flexDirection:'row'}}>
             
                <Text style={{marginLeft:2,marginTop:5}}>Remember me</Text>
              </View>
              <TouchableOpacity>
                <Text style={{color:'#5F85E5'}}>
                  ForgotPassword?
                </Text>
              </TouchableOpacity>
         </View>
         {/* onPress={()=>this.props.navigation.navigate('Dashboard') */}
         <TouchableOpacity onPress={this.doLogin}
         style={{backgroundColor:'#5F85E5',borderRadius:5,padding:10,alignItems:'center',marginTop:35}}>
                    <Text style={{color:'white'}}>Login</Text>
                </TouchableOpacity>
         
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
           <Text style={{color:'#000'}}>Don't have an account ?</Text>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('RegistrationOne')}>
             <Text style={{color:'#6496CA'}}>Register Now</Text>
           </TouchableOpacity>
         </View>
         </ScrollView>
          <StatusBar
      backgroundColor="#fff"
      barStyle='dark-content'
    />
      </View>
    )
  }
}

const mapStateToProps=(state)=>{
    console.log('Details'+JSON.stringify(state.isFetching))
      return{
          isFetching:state.isFetching,
      }
    }
    
    export default connect(mapStateToProps)(Login)
  