import React from 'react';
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
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
    width: 350,
    height: 250,
  },
});
