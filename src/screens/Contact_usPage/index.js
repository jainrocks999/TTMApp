import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import storage from '../../config/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import Loader from '../../config/loader';

class DashBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isVisible: false,
      isVisibleAction: false,
      isVisibleApplication: false,
      isVisibleStatus: false,
      isVisibleUpcoming: false,

    };

  }


  render() {
    const { isFetching } = this.props
    return (
      <View style={styles.container}>
        {isFetching ? <Loader /> : null}
        <View
          style={styles.menu}>
          <View
            style={styles.menu2}>
            <TouchableOpacity
              style={{ width: 25, height: 20 }}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{ width: '99%', height: '99%' }}
              />
            </TouchableOpacity>

            <Text
              style={styles.title}>
              Contact
            </Text>
          </View>
          <View
            style={styles.bell}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.bellIcon}
            />
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('ProfileStack');
              }}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{ width: 31, height: 31 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.firstView}>
            <Text style={styles.title}>Head Office</Text>
            <Text style={styles.second}>Taj Trade Mark</Text>
            <Text style={styles.third} numberOfLines={2}>Anand Vrindavan,Sanjay Place,</Text>
            <Text style={styles.third} numberOfLines={2}>Agra - 282002 (U.P) india</Text>
            <Text style={styles.third}>+91-562-4007024,+91-562-4007025</Text>
            <Text style={styles.third}>+91-562-2855024,+91-562-2971024</Text>
            <Text style={styles.third}>+91-562-2854341,+91-8057500024</Text>
          </View>
            <View style={styles.firstView}>
            <Text style={styles.title}>Branch Office</Text>
            <Text style={styles.third}>67, Sector 15 A,</Text>
            <Text style={styles.third}>Noida (Delhi NCR) India</Text>
            <Text style={styles.third}>Tel.: +91-120-4110024</Text>
            <Text style={styles.third}>EMail: info@tajtrademark.in</Text>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    DashboardDetails: state.DashboardDetails,
  };
};
export default connect(mapStateToProps)(DashBoardPage);