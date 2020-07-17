import React from 'react';
import {View,Image} from 'react-native';
import styles from './styles';
//import Colors from '../../Config/Colors';
const loading=require('../../assets/images/imageloading.gif')

export default class Loader extends React.Component{
    render(){
        return(
            <View style={ styles.container }>
              <Image source={loading} style={{width:120,height:80}}/>    
            </View>
        )
    }
}