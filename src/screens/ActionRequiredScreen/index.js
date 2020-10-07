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
//import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import styles from './style'
import AsyncStorage from '@react-native-community/async-storage';
import style from './style';

class ActionRequieredScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      Proposed_OppositionCount:'',
      Intimation_Of_Notice_Of_PublicationCount:'',
      Proposed_RectificationCount:'',
      Certificate_of_RegistrationCount:'',
      Proceeding_CertificateCount:'',
      Renewal_ProceedingName:'',
      Renewal_ProceedingCount:'',
    };

    this.loaddata();
  }
  
  getVisible(item) {
    if (this.state.visible == false) {
      this.setState({
        visible: true,
        itemValue: item.Rowno,
      });
    } else {
      this.setState({
        visible: false,
        itemValue: item.Rowno,
      });
    }
  }

  loaddata = async () => {

    const {Nor, PageNo} = this.state;
    const PC = this.props.navigation.getParam('Proceeding_CertificateCount');
    const RP = this.props.navigation.getParam('Renewal_ProceedingCount');
    const CR = this.props.navigation.getParam('Certificate_of_RegistrationCount'); 
    const PO= this.props.navigation.getParam('Proposed_OppositionCount');
    const Int= this.props.navigation.getParam('Intimation_Of_Notice_Of_PublicationCount');
    const PR= this.props.navigation.getParam('Proposed_RectificationCount');
  
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    this.setState({
      Proceeding_CertificateCount:PC,
  Renewal_ProceedingCount:RP,
  Certificate_of_RegistrationCount:CR,
  Proposed_OppositionCount:PO,
  Intimation_Of_Notice_Of_PublicationCount:Int,
  Proposed_RectificationCount:PR,
    })
    this.props.dispatch({
      type: 'User_Design_Details_Request',
      url: '/NewTMApi/DDetail?UserId=7&PageNo=1&Nor=10&search=',
      token: token,
    });
  };
  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

  render() {
    const {DesignDetails} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={styles.header}>
          <View
            style={styles.go}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={styles.action}>
                Action Required
              </Text>
            </View>
          </View>
          <View
            style={styles.bellView}>
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

        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View
            style={styles.first}>
            <Text
              style={styles.own}>
              Own
            </Text>
            <View style={{marginLeft: 20}}>
              <View
                style={styles.text}>
                <Text
                  style={styles.text1}>
                  Proceeding Certificate
                </Text>
              <Text>{this.state.Proceeding_CertificateCount}</Text>
              </View>
              <View
                style={styles.text}>
                <Text
                  style={style.text1}>
                  Renewal Proceeding
                </Text>
              <Text>{this.state.Renewal_ProceedingCount}</Text>
              </View>
              <View
                style={styles.text}>
                <Text
                  style={styles.text1}>
                  Certificate of Registration
                </Text>
              <Text>{this.state.Certificate_of_RegistrationCount}</Text>
              </View>
            </View>
          </View>

          <View
            style={styles.first}>
            <Text
              style={styles.own}>
              Similar
            </Text>
            <View style={{marginLeft: 20}}>
              <View
                style={styles.text}>
                <Text
                  style={styles.text1}>
                  Proposed Opposition
                </Text>
              <Text>{this.state.Proposed_OppositionCount}</Text>
              </View>
              <View
                style={styles.text}>
                <Text
                  style={styles.text1}>
                  Intimation of Notice of Publication
                </Text>
              <Text>{this.state.Intimation_Of_Notice_Of_PublicationCount}</Text>
              </View>
              <View
                style={styles.text}>
                <Text
                  style={styles.text1}>
                  Proposed Rectification
                </Text>
              <Text>{this.state.Proposed_RectificationCount}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    DesignDetails: state.DesignDetails,
  };
};
export default connect(mapStateToProps)(ActionRequieredScreen);
