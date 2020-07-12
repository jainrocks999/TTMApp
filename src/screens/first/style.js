import React from 'react';
import {StyleSheet} from 'react-native';
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SourceSansPro',
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  linearGradient: {borderRadius: 50},
  buttonText: {
    fontSize: 18,
    fontFamily: 'SourceSansPro',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 50,
  },
}));
