import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyTradedetailsViewPage extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'My Trade Details',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#fff',
      size: 20,
    },
    headerLeft: (
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="md-menu" style={{marginLeft: 10}} size={30} color="#000" />
      </TouchableOpacity>
    ),
  });

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
      <View style={{flex: 1}}>
        <View
          style={styles.header}>
          <View
            style={styles.headerView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>

            <View>
              <Text
                style={styles.details}>
                Details
              </Text>
            </View>
          </View>
          <View
            style={styles.view}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.image}
            />
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{width: 31, height: 31}}
              />
            </View>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View
            style={styles.first}>
            <View
              style={styles.tm}>
              <Text
                style={styles.tmText}>
                T.M. No :996866222
              </Text>
            </View>
            <View
              style={styles.mark}>
              <Text
                style={styles.trademark}>
                TradeMark :{' '}
              </Text>
              <Text
                style={styles.liy}>
                Liyouess
              </Text>
            </View>
            <View
              style={styles.status}>
              <Text
                style={styles.status1}>
                STATUS
              </Text>
              <Text
                style={styles.reg}>
                Registered
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                APP.Date
              </Text>
              <Text
                style={styles.same2}>
                14-02-2020
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                TM Type
              </Text>
              <Text
                style={styles.same2}>
                Colone
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                APPpro Office
              </Text>
              <Text
                style={styles.same2}>
                Delhi
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Journal No.
              </Text>
              <Text
                style={styles.same2}>
                1990-20
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Vaild Upto
              </Text>
              <Text
                style={styles.same2}>
                17/11/2020
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Class
              </Text>
              <Text
                style={styles.same2}>
                30
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
