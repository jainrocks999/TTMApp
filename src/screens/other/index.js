import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import Constants from '../../config/constants';

export default class other extends React.Component{
    render(){
        return(
            <View style={{flex:1,padding:10,backgroundColor:'white'}}>
                <View style={{
        alignItems:'center',
        marginTop:20
    }}>
                    <Text style={{
       fontWeight:'normal',
       fontFamily:'Poppins-SemiBold',
       fontSize:20
    }}>
                        Get Started Now
                    </Text>
                </View>
                <View style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:75
    }}>
                    <Image 
                    source={require('../../assets/icons/group2.png')} 
                    style={{width:340,height:250}}/>
                </View>  
                <View style={{
        paddingHorizontal:80,
        marginTop:40
    }}>
                <TouchableOpacity style={{
        backgroundColor:'#eef1f4',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    }}>
                    <Image source={require('../../assets/icons/facebook.png')}
                    style={{
                        width:10,
                        height:18,
                        marginRight:10
                    }}/>
                   <Text>Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
        backgroundColor:'#eef1f4',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center'
    }}>
                <Image 
                source={require('../../assets/icons/google.png')}
                style={{
                    width:17,
                    height:18,
                    marginRight:10
                }}/>
                   <Text>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
        backgroundColor:'#5f85e5',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        marginTop:35
    }}>
                    <Text style={{color:'white'}}>Signup with Email</Text>
                </TouchableOpacity>
                <View style={{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    }}>
                    <Text  style={{color:'#98999a'}}>
                        Existing User?
                    </Text>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={{color:'#5f85e5'}}>
                            Login Now
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}