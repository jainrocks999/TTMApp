import React from 'react';
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export default class TMsearch extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: '#f6f8f9', flex: 1}}>
            <View style={{backgroundColor:'white',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row'}}>
            <Icon
               style={{paddingLeft: 1, color: 'black'}}
               onPress={() => this.props.navigation.toggleDrawer()}
               name="menu"
               size={30}
             />
             <Text style={{fontWeight:'bold',fontSize:22,marginLeft:6}}>TM Search </Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <Image source={require('../../assets/images/noti.png')} style={{width:30,height:30,marginRight:10}}/>
               <View style={{borderWidth:1,borderRadius:15}}>
               <Image source={require('../../assets/icons/profile.png')} style={{width:30,height:30}}/>
               </View>
             </View>
            </View>
            <View style={{padding:15}}>
            <View>
           <Text style={{color:'#98999a'}}>
            TM Name
           </Text>
           <View style={{borderWidth:1,width:'100%',borderRadius:10,
           marginTop:10,height:40,paddingRight:10}}>
           <TextInput 
           />
            
           </View>
         </View>
         <View style={{marginTop:10}}>
         <Text style={{color:'#98999a'}}>
            Goods/Service
           </Text>
           <View style={{borderWidth:1,width:'100%',borderRadius:10,
           marginTop:10,height:40,paddingRight:10}}>
           <TextInput 
           
           />
            
           </View> 
         </View>
         <View style={{paddingHorizontal:70,marginTop:50}}>
         <TouchableOpacity style={{
        backgroundColor:'#5f85e5',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    
    }}>
                   
                   <Text style={{color:'#fff'}}>Send message</Text>
                </TouchableOpacity>
                </View>
         </View>
            </View>
        )
    }
}