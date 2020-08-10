import React from 'react';
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

 class Login extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          navigateTo:props.navigation.getParam('navigateTo'),
          Email:'webapi_ttm',
          Password:'hIrBPBcLiP@Ax9wBIR9CrjQ',
        };
      }
      doLogin=()=>{
            const {Email,Password,navigateTo} = this.state;
                // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
                 if (Email == '') {
                 Toast.show('Please enter valid e-mail address.');
                 } else if(Password== ''){
                     Toast.show('Please enter password.')
                 }
                 else{
                 console.log('Login Detail'+Email+Password)
                 
                     this.props.dispatch({type:'User_Login_Request',
                     Email:Email,Password:Password,
                      navigation:this.props.navigation,navigateTo})
                 }
           }
  render(){
    return(
      <View style={{ flex:1,padding:10}}>
        <View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('any')}>
          <Image source={require('../../assets/icons/arrow.png')} style={{width:24,height:15,color:'grey'}}/>
          </TouchableOpacity>
          <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:22,marginTop:10}}>
            Login now
          </Text>
          <Text style={{color:'#98999a'}}>Please login to continue our app</Text>
        </View>
         <View style={{justifyContent:'center',alignItems:'center',padding:10,marginTop:100}}>
           <Text style={{color:'#98999a'}}>
             Login with
           </Text>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Other')}
                style={{alignItems:'center',justifyContent:'center',borderWidth:1,paddingHorizontal:72,borderRadius:10,padding:8}}>
                  <Image source={require('../../assets/icons/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,paddingHorizontal:65,borderRadius:10,padding:8}}>
                  <Image source={require('../../assets/icons/google.png')} />
                </TouchableOpacity>
         </View>
         <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
            <Text style={{color:'#98999a'}}>
              or login with email/mobile
            </Text>
         </View>
         <View>
           <Text style={{color:'#98999a'}}>
             E-mail ID or Mobile Number
           </Text>
           <View style={{borderWidth:1,width:'100%',height:40,borderRadius:10,marginTop:10}}>
           <TextInput 
           
           />
           </View>
         </View>
         <View style={{marginTop:10}}>
           <Text style={{color:'#98999a'}}>
            Password
           </Text>
           <View style={{borderWidth:1,width:'100%',borderRadius:10,
           marginTop:10,height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingRight:10}}>
           <TextInput 
           secureTextEntry={true}
           keyboardType='numeric'
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
                <Text style={{color:'blue'}}>
                  ForgotPassword?
                </Text>
              </TouchableOpacity>
         </View>
         {/* onPress={()=>this.props.navigation.navigate('Dashboard') */}
         <TouchableOpacity onPress={this.doLogin}
         style={{backgroundColor:'#5f85e5',borderRadius:5,padding:10,alignItems:'center',marginTop:35}}>
                    <Text style={{color:'white'}}>Login</Text>
                </TouchableOpacity>
         
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
           <Text style={{color:'#98999a'}}>Don't have an account ?</Text>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
             <Text style={{color:'blue'}}>Register Now</Text>
           </TouchableOpacity>
         </View>
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
  