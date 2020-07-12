import React from 'react';
import {StyleSheet} from 'react-native';
export default (styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15},
  logo: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {marginTop: 20, fontSize: 16, fontFamily: 'SourceSansPro'},
  headText: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
    fontFamily: 'SourceSansPro',
  },

  subHeadText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'SourceSansPro',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  icons: {height: 22, width: 22},
  iconContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
}));
