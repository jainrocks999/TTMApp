import React, {Component} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Loader from '../../config/loader';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-community/async-storage';
import connection from '../../Redux/Constants';
import {connect} from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import storage from '../../config/storage';

class CopyRightPage extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      PageNo: '1',
      Nor: '10',
      visible: false,
      Token:'',
      UserID:'',
    };

    this.loaddata();
  }
  loaddata = async () => {
    const {Nor, PageNo} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    this.setState({
      Token:token,
      UserID:'',
    })
    let search ='';
this.loadsearch(search);
    this.props.dispatch({
      type: 'User_CopyRight_Request',
      url: '/NewTMApi/CRDetail?UserId=7&PageNo=1&Nor=10&search=',
      token: token,
    });
  };
  loadsearch(search){
    this.props.dispatch({
      type: 'User_CopyRight_Request',
      url: '/NewTMApi/CRDetail?UserId=7&PageNo=1&Nor=10&search='+search,
      token: this.state.Token,
    });
  }
  getVisible(item) {
    if (this.state.visible == false) {
      this.setState({
        visible: true,
        itemValue: item.Id,
      });
    } else {
      this.setState({
        visible: false,
        itemValue: item.Id,
      });
    }
  }
  renderItemView = item => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.Id) {
        return (
          <View
            style={styles.view1}>
            <View
              style={styles.fullView}>
              <Text
                style={styles.full1}>
                Full Prop Name
              </Text>
              <Text
                style={styles.full}>
                {item.FullPropName}
              </Text>
            </View>
            <View
              style={styles.dairyView}>
              <Text
                style={styles.dairy1}>
                Dairy No
              </Text>
              <Text
                style={styles.dairy}>
                {item.Dairy_No}
              </Text>
            </View>
            <View
              style={styles.office}>
              <Text
                style={styles.office1}>
                APPpro Office
              </Text>
              <Text
                style={styles.office2}>
                Delhi
              </Text>
            </View>
            <View
              style={styles.journal}>
              <Text
                style={styles.journal1}>
                Journal No.
              </Text>
              <Text
                style={styles.journal2}>
                1990-20
              </Text>
            </View>
            <View
              style={styles.valid}>
              <Text
                style={styles.valid1}>
                Vaild Upto
              </Text>
              <Text
                style={styles.valid2}>
                17/11/2020
              </Text>
            </View>
            <View
              style={styles.class}>
              <Text
                style={styles.class1}>
                Class
              </Text>
              <Text
                style={styles.class2}>
                30
              </Text>
            </View>
          </View>
        );
      } else {
      }
    } else {
    }
  };

  render() {
    const {CopyRight,isFetching} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        {isFetching ? <Loader /> : null}
        <View
          style={styles.loaderView}> 
          <View
            style={styles.arrowView}>
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
                style={styles.text}>
                Copy Right
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
          style={styles.view2}>
          <View
            style={styles.view3}>
            <View>
              <Icon1 
              name="search" size={25} 
              style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                placeholder={'Tm search ...'}

                value={this.state.Email}
               style={styles.input}
                onChangeText={Email => {
                  this.loadsearch(Email)
                }}
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
          data={CopyRight}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.getVisible(item)}>
                <View
                  style={styles.main}>
                  <View>
                    <View
                      style={styles.title}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'Title     :'}
                      </Text>
                      <Text
                        style={styles.work}>
                        {item.Title}
                      </Text>
                    </View>
                    <View
                      style={styles.workView}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'Work  :'}
                      </Text>
                      <Text
                        style={styles.item}>
                        {item.Work}
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
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(CopyRightPage);
