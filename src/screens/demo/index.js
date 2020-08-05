import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/yogi.png'),
        require('../../assets/images/pppp.png'),
        require('../../assets/images/logo.png'),
        require('../../assets/images/logo.png'),
      ],
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.back}>
        <View style={styles.container} 
        onLayout={this.onLayout}>
          <SliderBox
            //ImageComponent={require('../../assets/images/logo.png')}
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'center'}
            paginationBoxStyle={styles.pagination}
            dotStyle={styles.dot}
            ImageComponentStyle={styles.image}
            imageLoadingColor="#2196F3"
          />
        </View>
      </ImageBackground>
    );
  }
}
