import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';



export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: [
        require('../../assets/images/pppp.png'),
        require('../../assets/images/logo.png'),
        require('../../assets/images/logo.png'),
      ],
    };
  }

  

  render() {
    return (
      <View>
        <Text style={{fontFamily:'SinhalaSangamMN-Bold'}}>Hey</Text>
        <Text style={{fontFamily:'Poppins-BoldItalic'}}>Hey</Text>
      </View>
    );
  }
}
