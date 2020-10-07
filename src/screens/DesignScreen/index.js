import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  FlatList,
  Text,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import Loader from '../../config/loader';

import AsyncStorage from '@react-native-community/async-storage';

class DesignDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      UserID:'',
      Token:'',
    };

    this.loaddata();
  }
  renderItemView = item => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.Rowno) {
        return (
          <View
            style={styles.cardView}>
            <View
              style={styles.shortView}>
              <Text
                style={styles.short1}>
                ShortTrade Mark
              </Text>
              <Text
                style={styles.short}>
                {item.ShortTrade_Mark}
              </Text>
            </View>
            <View
              style={styles.tradeView}>
              <Text
                style={styles.trade1}>
                FullTrade Mark
              </Text>
              <Text
                style={styles.trade}>
                {item.FullTrade_Mark}
              </Text>
            </View>
            <View
              style={styles.appView}>
              <Text
                style={styles.app1}>
                App Status
              </Text>
              <Text
                style={styles.app}>
                {item.App_Status}
              </Text>
            </View>
            <View
              style={styles.fullView}>
              <Text
                style={styles.full2}>
                Full Prop Name
              </Text>
              <Text
                style={styles.full}>
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
this.setState({
Token:token,
UserID:userid,
})
    let search ='';
this.loadsearch(search);
    
  }

  loadsearch(search){
    this.props.dispatch({
      type: 'User_Design_Details_Request',
      url: '/NewTMApi/DDetail?UserId=7&PageNo=1&Nor=10&search='+search,
      token: this.state.Token,
    });
  }
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
    const {DesignDetails,isFetching} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
         {isFetching ? <Loader /> : null}
        <View
          style={styles.view1}>
          <View
            style={styles.view2}>
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
                style={styles.design}>
                Design
              </Text>
            </View>
          </View>
          <View
            style={styles.viewWell}>
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
          style={styles.view3}>
          <View
            style={styles.view4}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.searchView}>
             <TextInput
               placeholder={'Tm search ...'}
               value={this.state.Email}
              style={styles.input}
               onChangeText={Email => {
                 this.loadsearch(Email)
               }}/>
            </View>
          </View>
          <View
            style={styles.iconView}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
        <FlatList
          data={DesignDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.getVisible(item)}>
                <View
                  style={styles.card}>
                  <View>
                    <View
                      style={styles.card2}>
                      <Text
                        style={styles.text}>
                        {'App No :'}
                      </Text>
                      <Text
                        style={styles.text2}>
                        {item.App_No}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.down}
                    source={require('../../assets/icons/arrow_down.png')}
                  />
                </View>
              </TouchableOpacity>

              {this.renderItemView(item)}
            </View>
          )}
        />
        </ScrollView>
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
export default connect(mapStateToProps)(DesignDetails);
