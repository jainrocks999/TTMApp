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

import AsyncStorage from '@react-native-community/async-storage';

class ActionRequieredScreen extends Component {
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
            style={{
              marginTop: -10,
              flex: 1,
              flexDirection: 'column',
              marginHorizontal: 20,
              backgroundColor: '#FFF',
              borderRadius: 8,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingVertical: 10,
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
                Status
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#82C2EC',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                }}>
                {item.App_Status}
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
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Short Prop Name
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                }}>
                {item.ShortPropName}
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
                  marginLeft: 10,
                  fontFamily: 'Poppins',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                  width: '55%',
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
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Full Trademark
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                }}>
                {item.FullTrade_Mark}
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
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Row No.
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                }}>
                {item.Rowno}
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
                  fontSize: 13,
                  color: '#000',
                  fontFamily: 'Poppins-Bold',
                  width: '40%',
                }}>
                Class
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#5A6779',
                  fontFamily: 'Poppins',
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55%',
                }}>
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
                style={{
                  backgroundColor: '#5F85E5',
                  borderRadius: 5,
                  padding: 4,
                  width: '30%',
                  borderRadius: 10,

                  right: 10,
                  bottom: 10,
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 14}}>View More</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    }
  };
  getVisible(item) {
    if (this.state.visible == false) {
      console.log('rohit12' + this.state.visible);
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

    console.log('bdb' + userid);
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
          style={{
            backgroundColor: 'white',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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
                style={{width: 24, height: 15, marginEnd: 10}}
              />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  marginLeft: 10,
                }}>
                Action Required
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
                width: 22,
                height: 22,
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
              width: '88%',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              height: 45,
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
                width: '68%',
                borderLeftWidth: 0.5,
                marginLeft: 5,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  height: 42,
                  width: '100%',
                }}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={{
              width: '12%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                marginVertical: 10,
              }}>
              Own
            </Text>
            <View style={{marginLeft: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Proceeding Certificate
                </Text>
                <Text>4</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Renewal Proceeding
                </Text>
                <Text>3</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Certificate of Registration
                </Text>
                <Text>3</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                marginVertical: 10,
              }}>
              Similar
            </Text>
            <View style={{marginLeft: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Proposed Opposition
                </Text>
                <Text>3</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Intimation of Notice of Publication
                </Text>
                <Text>3</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '80%',
                }}>
                <Text
                  style={{fontSize: 16, fontFamily: 'Poppins', marginTop: 6}}>
                  Proposed Rectification
                </Text>
                <Text>3</Text>
              </View>
            </View>
          </View>
        </View>

        {/* <FlatList
          data={DesignDetails}
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
                        {'Status :'}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Bold',
                          fontSize: 14,
                          marginLeft: 20,
                        }}>
                        Status
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
        /> */}
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    DesignDetails: state.DesignDetails,
  };
};
export default connect(mapStateToProps)(ActionRequieredScreen);
