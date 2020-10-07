import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Feather';
import ExpandableItemComponent from '../../config/expendableList.js';
import {connect} from 'react-redux';

class CopyRight extends Component {
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
    this.state = {};
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={styles.menu}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{width: 20, height: 15}}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={styles.my}>
              {'My Trade Details'}
            </Text>
          </View>
          <View
            style={styles.main}>
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
        <View
          style={styles.first}>
          <View
            style={styles.icon}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.view}>
              <TextInput
                style={styles.input}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={styles.filterView}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>

        <FlatList
          data={this.state.MappingListArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={styles.tmView}>
              <View
                style={styles.tm}>
                <Text
                  style={styles.tText}>
                  T.M. No :996866222
                </Text>
              </View>
              <View
                style={styles.view1}>
                <Text
                  style={styles.trade}>
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
                  style={styles.text}>
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
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};
export default connect(mapStateToProps)(CopyRight);
