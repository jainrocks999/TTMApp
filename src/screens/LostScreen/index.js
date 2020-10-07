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
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

class LostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.loaddata();
  }
  renderItemView = item => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.Rowno) {
        return (
          <View
            style={styles.drop}>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                ShortTrade Mark
              </Text>
              <Text
                style={styles.same2}>
                {item.ShortTrade_Mark}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                FullTrade Mark
              </Text>
              <Text
                style={styles.same2}>
                {item.FullTrade_Mark}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                App Status
              </Text>
              <Text
                style={styles.same2}>
                {item.App_Status}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Full Prop Name
              </Text>
              <Text
                style={styles.same2}>
                {item.FullPropName}
              </Text>
            </View>
          </View>
        );
      }
    }
  };
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
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    this.props.dispatch({
      type: 'User_Lost_Details_Request',
      url:
        'NewTMApi/TMAPI?UserId=122&ASA&Ag=Lost&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',
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
    const {LostDetails} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={styles.main}>
          <View
            style={styles.arrow}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={styles.lost}>
                Lost
              </Text>
            </View>
          </View>
          <View
            style={styles.view}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.bell}
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
          style={styles.search}>
          <View
            style={styles.search1}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={styles.filter}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
        <FlatList
          data={LostDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.getVisible(item)}>
                <View
                  style={styles.card}>
                  <View
                    style={styles.card1}>
                    <Text
                      style={styles.app}>
                      App No
                    </Text>
                    <Text
                      style={styles.no}>
                      {item.App_No}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              {this.renderItemView(item)}
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
    LostDetails: state.LostDetails,
  };
};
export default connect(mapStateToProps)(LostDetails);
