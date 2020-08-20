import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from '../../config/constants';

export default StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'white'
  },
  continue:{
    backgroundColor:'#5f85e5',
    borderRadius:5,
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  login:{
    marginTop:80,
    width: '100%',
    height: 40,
    backgroundColor: '#eef1f4',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText:{
    color: 'black',
    fontSize: 16,
  
    fontFamily:'Poppins',

    alignItems: 'center',
    
  },
  headerText:{
    fontWeight:'700',
    fontFamily:'Poppins',
    fontSize:20
  },
  imageView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
    paddingRight:19
  },
  image:{
    width:350,
    height:250
  },
  text:{
    color:'white',
    fontWeight:'normal',
    fontFamily:'Poppins'
  },
  email:{
    color:'#98999a',
    color:'grey',
    fontFamily:'Poppins',
    fontWeight:'normal'
   
  }
}) 
  