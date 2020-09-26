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
    console.log('bdb' + userid);
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
    console.log('jseajdjdhjhjhjhsjdsjds'+search)
    this.props.dispatch({
      type: 'User_CopyRight_Request',
      url: '/NewTMApi/CRDetail?UserId=7&PageNo=1&Nor=10&search='+search,
      token: this.state.Token,
    });
  }
  getVisible(item) {
    if (this.state.visible == false) {
      console.log('rohit12' + this.state.visible);
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
            style={{
              flexDirection: 'column',
              marginBottom: 10,
              backgroundColor: '#FFF',
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              marginHorizontal: 20,
              paddingHorizontal: 15,
              paddingRight: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Full Prop Name
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.FullPropName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Dairy No
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.Dairy_No}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                APPpro Office
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  marginLeft: 10,
                  fontFamily: 'Poppins',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Delhi
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Journal No.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                1990-20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Vaild Upto
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                17/11/2020
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Class
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
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
        <View
          style={{
            backgroundColor: 'white',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
              {isFetching ? <Loader /> : null}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={require('../../assets/icons/arrow.png')}
                style={{width: 20, height: 15, marginEnd: 15}}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Copy Right
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={{
                width: 18,
                height: 18,
                marginRight: 15,
                justifyContent: 'center',
              }}
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
          style={{
            backgroundColor: 'white',
            padding: 12,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              height: 45,
              width: '88%',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 42,
                width: 305,
                borderLeftWidth: 0.5,
                marginLeft: 5,
              }}>
              <TextInput
                placeholder={'Tm search ...'}
                //labelFontSize={14}
                value={this.state.Email}
               style={{
                   backgroundColor: 'transparent',
                   height: 42,
                   width: '100%',
                 }}
                //keyboardType="email-address"
                onChangeText={Email => {
                  this.loadsearch(Email)
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '12%',
              alignItems: 'center',
            }}>
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
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                    padding: 10,
                    justifyContent: 'space-between',
                    paddingVertical: 20,

                    marginHorizontal: 20,
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'Title     :'}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Bold',
                          fontSize: 14,
                          marginLeft: 21,
                        }}>
                        {item.Title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {'Work  :'}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: 14,
                          marginLeft: 20,
                        }}>
                        {item.Work}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={{height: 25, width: 25, marginRight: 10}}
                    source={require('../../assets/icons/arrow_down.png')}
                  />
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
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(CopyRightPage);
