import React from 'react';
import {StyleSheet} from 'react-native';
export default (styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 15
  },
  register:{
    fontWeight:'normal',
    fontFamily:'Poppins-SemiBold',
    fontSize:20,
    marginTop:10
  },
  input:{
    borderWidth:1,
    width:'100%',
    borderRadius:10,
    marginTop:10,
    height:40
  },
  input1:{
    borderWidth:1,
    width:'100%',
    borderRadius:10,
    height:40,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10,
    alignItems:'center'
  },
  password:{
    width:30,
    height:22,
    alignSelf:'center',
    marginRight:10
  },
  font:{
    
  },
  button:{
    backgroundColor:'#5f85e5',
    borderRadius:10,
    padding:10,
    alignItems:'center',
    marginTop:43
  },
  exit:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    flexDirection:'row'
  },
  please:{
    color:'#98999a',
    
  }
  }));
