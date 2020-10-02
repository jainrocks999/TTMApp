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

// import React, {Component} from 'react';
// import {View, StyleSheet, ImageBackground, Button, Text} from 'react-native';
// import {exp} from 'react-native-reanimated';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   static navigationOptions = ({navigation}) => {
//     const params = navigation.state.params || {};

//     return {
//       headerLeft: () => (
//         <Button
//           onPress={() => navigation.navigate('MyModal')}
//           title="Info"
//           color="#fff"
//         />
//       ),
//       /* the rest of this config is unchanged */
//     };
//   };

//   /* render function, etc */

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{fontSize: 30}}>This is Home</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{fontSize: 30}}>This is DetailsScreen</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }
// class ModalScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{fontSize: 30}}>This is a modal!</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }

// const MainStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     /* Same configuration as before */
//   },
// );

// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );

// export default createAppContainer(RootStack);
