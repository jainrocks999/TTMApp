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
  text: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'SourceSansPro',
  },
  headText: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
    marginTop: 100,
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
