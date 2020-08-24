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
    marginTop: 10,
  },
    image: {
  
   // resizeMode: "stretch",
   // justifyContent: "center"
  },
  spinnerTextStyle: {
    color: '#fff',
  },
  inputContainer: {
    borderColor: '#A4A7AC',
    width: '100%',
    marginVertical: 20,
    height: 40,
  },
  input: {
    marginVertical: 10,
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
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
    marginVertical: 20,
    borderColor: '#A4A7AC',
    width: '48%',
    height: 40,
  },
  input2: {
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
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
    backgroundColor: '#343A40',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 100,
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
