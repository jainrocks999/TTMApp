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
import {connect} from 'react-redux';
import storage from '../../config/storage';

import AsyncStorage from '@react-native-community/async-storage';

let data = [
  {
    id: 1,
    title: 'Applications',
    number: 7,
  },
  {
    id: 2,
    title: 'Proprietors',
    number: 1,
  },
];

class StatusDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.loaddata();
  }
  renderItemView = item => {
    const {RegisteredDetails, isFetching} = this.props;

    if (this.state.visible == true) {
      if (this.state.itemValue == item.id) {
        return (
          <View
            style={{
              marginTop: -10,
              flex: 1,
              flexDirection: 'column',
              borderRadius: 8,
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <FlatList
              data={RegisteredDetails}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 10,
                    flex: 1,

                    backgroundColor: '#FFF',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#000',
                        fontFamily: 'Poppins-Bold',
                        width: '40%',
                      }}>
                      App no
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
                      {item.App_No}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      marginTop: 10,
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
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#000',
                        fontFamily: 'Poppins-Bold',
                        width: '40%',
                      }}>
                      Trademark
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
                      {item.Trade_Mark}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#000',
                        fontFamily: 'Poppins-Bold',
                        width: '40%',
                      }}>
                      Office
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
                      {item.Appropriate_Office}
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
                      Prop Name
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
                      {item.PropName}
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
                      Prop Address
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
                      {item.Prop_Address}
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
                      Valid Upto
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
                      {item.Valid_upto}
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
                      App Date
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
                      {item.App_Date_New}
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
                      <Text style={{color: 'white', fontSize: 14}}>
                        View More
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {this.renderItemView(item)}
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
      console.log('rohit12' + this.state.visible);
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
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);

    console.log('bdb' + userid);
    this.props.dispatch({
      type: 'User_ApplicationStatus_Details_Request',
      url:
        'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=PropStatus&As=&search=&Status=',
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
    const {RegisteredDetails, isFetching} = this.props;
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
                Status
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
        {/* <View
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
        </View> */}

        <ScrollView style={{marginVertical: 20}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('RegScreenDetails', {
                        btnValue: item.title,
                      })
                    }
                    style={{
                      paddingVertical: 5,
                      marginLeft: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '80%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-SemiBold',
                        marginTop: 6,
                      }}>
                      {item.title}
                    </Text>
                    <Text>{item.number}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    RegisteredDetails: state.RegisteredDetails,
  };
};
export default connect(mapStateToProps)(StatusDetail);
