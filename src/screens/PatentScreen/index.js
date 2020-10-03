import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
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
import {connect} from 'react-redux';
import storage from '../../config/storage';
import Loader from '../../config/loader';
import AsyncStorage from '@react-native-community/async-storage';
import style from './style';

class PatentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      Token:'',
    };

    this.loaddata();
  }
  renderItemView = item => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.Rowno) {
        return (
          <View
            style={styles.first}>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Status
              </Text>
              <Text
                style={styles.status1}>
                {item.App_Status}
              </Text>
            </View>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Short Prop Name
              </Text>
              <Text
                style={styles.status1}>
                {item.ShortPropName}
              </Text>
            </View>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Full Prop Name
              </Text>
              <Text
                style={styles.status1}>
                {item.FullPropName}
              </Text>
            </View>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Full Trademark
              </Text>
              <Text
                style={styles.status1}>
                {item.FullTrade_Mark}
              </Text>
            </View>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Row No.
              </Text>
              <Text
                style={styles.status1}>
                {item.Rowno}
              </Text>
            </View>
            <View
              style={styles.second}>
              <Text
                style={styles.status}>
                Class
              </Text>
              <Text
                style={styles.status1}>
                {item.Class_Class}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={this.props.onclickview}
                style={styles.touch}>
                  <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('MyTradeDetailViewPage')}>
                <Text style={{color: 'white', fontSize: 14}}>View More</Text>
                </TouchableOpacity>
              </TouchableOpacity>
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
})
let search ='';
this.loadsearch(search);
  };

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
      <View style={{flex: 1}}>
        <ScrollView>
          {isFetching ? <Loader /> : null}
        <View
          style={styles.main}>
          <View
            style={styles.arrowView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <View>
              <Text
                style={styles.patent}>
                Patent
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
        <View
          style={styles.view}>
          <View
            style={styles.view1}>
            <View>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.inputView}>
              <TextInput
               placeholder={'Tm search ...'}
               value={this.state.Email}
              style={style.input}
               onChangeText={Email => {
                 this.loadsearch(Email)
               }}  
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
          data={DesignDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.getVisible(item)}>
                <View
                  style={styles.visible}>
                  <View>
                    <View
                      style={styles.app}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'App No :'}
                      </Text>
                      <Text
                        style={styles.text}>
                        {item.App_No}
                      </Text>
                    </View>
                    <View
                      style={styles.trade}>
                      <Text
                        style={{
                        //  width:'29%',
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'Trademark :'}
                      </Text>
                      <Text
                        style={styles.item}>
                        {item.ShortTrade_Mark}
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
export default connect(mapStateToProps)(PatentScreen);
