import React from 'react';
import { View,Text,Image,TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './style';

export default class TMsearch extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.second}>
              <View style={{flexDirection:'row'}}>
            <Icon
               style={styles.icon}
               onPress={() => this.props.navigation.toggleDrawer()}
               name="menu"
               size={30}
             />
             <Text style={styles.tm}>TM Search </Text>
             </View>
             <View style={styles.noti}>
               <Image 
               source={require('../../assets/images/noti.png')} 
               style={styles.image}/>
               <View style={styles.profile}>
               <Image 
               source={require('../../assets/icons/profile.png')} style={{width:30,height:30}}/>
               </View>
             </View>
            </View>
            <View style={{padding:15}}>
            <View>
           <Text style={{color:'#98999a'}}>
            TM Name
           </Text>
           <View style={styles.input}>
           <TextInput 
           />
            
           </View>
         </View>
         <View style={{marginTop:10}}>
         <Text style={{color:'#98999a'}}>
            Goods/Service
           </Text>
           <View style={styles.goods}>
           <TextInput/>
            
           </View> 
         </View>
         <View style={{paddingHorizontal:70,marginTop:50}}>
         <TouchableOpacity style={styles.button}>
                   <Text style={{color:'#fff'}}>Send message</Text>
                </TouchableOpacity>
                </View>
         </View>
            </View>
        )
    }
}