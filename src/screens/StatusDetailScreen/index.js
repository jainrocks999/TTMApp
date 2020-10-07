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
import {connect} from 'react-redux';
import storage from '../../config/storage';

import AsyncStorage from '@react-native-community/async-storage';

class StatusDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      ProprietorsCoun:'',
      Applicaticount:'',
    };

    this.loaddata();
  }
  renderItemView = item => {
    const {RegisteredDetails, isFetching} = this.props;

    if (this.state.visible == true) {
      if (this.state.itemValue == item.id) {
        return (
          <View
            style={styles.view}>
            <FlatList
              data={RegisteredDetails}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={styles.view1}>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      App no
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.App_No}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Status
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.App_Status}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Trademark
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.Trade_Mark}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Office
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.Appropriate_Office}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Prop Name
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.PropName}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Prop Address
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.Prop_Address}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Valid Upto
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.Valid_upto}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      Class
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.Class_Class}
                    </Text>
                  </View>
                  <View
                    style={styles.view2}>
                    <Text
                      style={styles.text}>
                      App Date
                    </Text>
                    <Text
                      style={styles.item}>
                      {item.App_Date_New}
                    </Text>
                  </View>
                  <View
                    style={styles.button}>
                    <TouchableOpacity
                      onPress={this.props.onclickview}
                      style={styles.toucha}>
                      <Text style={styles.more}>
                        View More
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* {this.renderItemView(item)} */}
                </View>
              )}
              ItemSeparatorComponent={() => {
                return <View style={{height: 10}}></View>;
              }}
            />
          </View>
        );
      }
    }
  };
  getVisible(item) {
    if (this.state.visible == false) {
      this.setState({
        visible: true,
        itemValue: item.id,
      });
    } else {
      this.setState({
        visible: false,
        itemValue: item.id,
      });
    }
  }

  loaddata = async () => {
    const {Nor, PageNo} = this.state;
    const  Applicaticount = this.props.navigation.getParam('Applicaticount');
    const ProprietorsCoun = this.props.navigation.getParam('ProprietorsCount');
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
this.setState({
  Applicaticount:Applicaticount,
  ProprietorsCoun:ProprietorsCoun,
})
    // this.props.dispatch({
    //   type: 'User_ApplicationStatus_Details_Request',
    //   url:
    //     'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=PropStatus&As=&search=&Status=',
    //   token: token,
    // });
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
    const {RegisteredDetails, isFetching} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={styles.container}>
          <View
            style={styles.arrow}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.arrowp}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={styles.status}>
                Status
              </Text>
            </View>
          </View>
          <View
            style={styles.bellView}>
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
       
        <ScrollView style={{marginVertical: 20}}>
              <View style={{flex: 1}}>
                <View
                  style={styles.card}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('RegScreenDetails', {
                        btnValue: 'Applications',
                      })
                    }
                    style={styles.touch}>
                      <View style={styles.touchView}>
                       <Image 
                         source={require('../../assets/icons/Applications.png')}
                         style={styles.png}/>
                    <Text
                      style={styles.title}>
                      Applications
                    </Text>
                    </View>
                    <Text>{this.state.Applicaticount}</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={styles.card}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('RegScreenDetails', {
                        btnValue: 'Proprietor',
                      })
                    }
                    style={styles.touch}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Image 
                         source={require('../../assets/icons/Proprieter.png')}
                         style={styles.png}/>
                    <Text
                      style={styles.title}>
                      Proprietors
                    </Text>
                    </View>
                    <Text>{this.state.ProprietorsCoun}</Text>
                  </TouchableOpacity>
                </View>
              </View>

        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
    return {
    isFetching: state.isFetching,
    RegisteredDetails: state.RegisteredDetails,
  };
};
export default connect(mapStateToProps)(StatusDetail);
