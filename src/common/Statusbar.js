import React, {Component} from 'react';

import {StatusBar, StyleSheet} from 'react-native';

export default function Status() {
  return (
    //     <LinearGradient
    //     colors={['#373b44', '#4286f4']}
    //     style={styles.container}
    //     start={{ x: 0, y: 0 }}
    //     end={{ x: 1, y: 1 }}
    //   >
    //       <StatusBar
    //         backgroundColor={SColor.darkblue}
    //         barStyle='light-content'
    //     />
    //       </LinearGradient>

    <StatusBar
            backgroundColor={'#373b44'}
            barStyle='light-content'
        />
  );
}

const styles = StyleSheet.create({
  headText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subHeadText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: '500',
    fontSize: 15,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
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
});
