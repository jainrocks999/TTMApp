
import React from 'react';
import {StyleSheet} from 'react-native';
import Color from '../../../common/Colors';
export default styles = StyleSheet.create({
  container: {
  flex: 1, 
  padding: 20, 
  backgroundColor: Color.white},
  login: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    marginTop: 10,
  },
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
  },
  loginText: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 65,
    borderRadius: 10,
    padding: 5,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingRight: 19,
  },
  image: {
    width: 340,
    height: 190,
  },
  icon:{
    width: 20, 
    height: 15, 
    color: Color.grey, 
    marginTop: 4
  },
  loginNow:{
    fontWeight: '300',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 2,
  },
  please:{
    color: Color.black, 
    fontSize: 14
  },
  loginWithUser:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  inputView:{
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginTop: 4,
  },
  input:{
    color: Color.grey,
    fontSize: 14,
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  passwordView:{
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  passwordInput:{
    color: Color.grey,
    fontSize: 14,
    height: 40,
    width: '80%',
    paddingHorizontal: 10,
  },
  remember:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 6,
  },
  button:{
    backgroundColor: Color.blue,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  dont:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  }
});
