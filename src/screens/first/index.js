import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../../common/Statusbar';
import ImageSlider from 'react-native-image-slider';
import Slideshow from 'react-native-image-slider-show';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './style';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     position: 1,
  //     interval: null,
  //     dataSource: [
  //       {
  //         title: 'Title 1',
  //         caption: 'Caption 1',
  //         url: require('../../assets/images/pro.png'),
  //       },
  //       {
  //         title: 'Title 2',
  //         caption: 'Caption 2',
  //         url: require('../../assets/images/logo.png'),
  //       },
  //       {
  //         title: 'Title 3',
  //         caption: 'Caption 3',
  //         url: require('../../assets/images/probo1.png'),
  //       },
  //       {
  //         title: 'Title 4',
  //         caption: 'Caption 4',
  //         url: require('../../assets/images/probo1.png'),
  //       },
  //     ],
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/logo.png'),
        require('../../assets/images/pppp.png'),
        require('../../assets/images/probo2.png'),
        require('../../assets/images/logo.png'),
      ],
    };
  }

  login() {
    this.props.navigation.navigate('Registration');
  }
  showAlert = () => {
    Alert.alert('You need to...');
  };
  //background: linear-gradient(to right, #373b44, #4286f4);

  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];
    return (
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={{flex: 1}}>
        <View>
          <Statusbar />
          <Image
            style={{
              height: 150,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            source={require('../../assets/images/ttm_logo.png')}
            resizeMode={'center'}
          />
          <SliderBox
            //ImageComponent={require('../../assets/images/logo.png')}
            images={this.state.images}
            sliderBoxHeight={200}
            // onCurrentImagePressed={index =>
            //   console.warn(`image ${index} pressed`)
            // }
            dotColor="red"
            inactiveDotColor="white"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'center'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'white',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Registration')}>
              <LinearGradient
                colors={['#373b44', '#4286f4']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={styles.text}>Already have an account step?</Text>
            <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Log in
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
// Later on in your styles..
