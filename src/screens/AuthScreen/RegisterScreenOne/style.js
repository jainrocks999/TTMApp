
import React from 'react';
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  register: {
    fontWeight: 'normal',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 8,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    paddingRight: 19,
  },
  image: {
    width: 350,
    height: 225,
  },

  spinnerTextStyle: {
    color: '#fff',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
   // height: 40,
  },
  input: {
    borderColor: '#A4A7AC',
    // marginVertical: 10,
    width: '100%',
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  inputt: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  input1: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'center',
  },

  inputContainer1: {
   // marginTop: 20,
    width: '48%',
    //height: 40,
  },
  input2: {
    borderColor: '#A4A7AC',
    borderWidth: 1,
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 5,
    height: 40,
  },
  password: {
    width: 30,
    height: 22,
    alignSelf: 'center',
    marginRight: 10,
  },
  font: {},
  button: {
    backgroundColor: '#5F85E5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 35,
  },
  nextButton: {
    backgroundColor: '#343A40',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 43,
  },
  exit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  please: {
    color: '#98999a',
  },
});