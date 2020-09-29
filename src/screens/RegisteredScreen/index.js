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
  Alert,
} from 'react-native';
//import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import Loader from '../../screens/Util/loading';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

let initialCount = 0;
let finalCount = 0;
// var token = '';

class RegisteredDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      productData: [],
      spinner: true,
      fullList: [],
      RegisteredDetails: [],
      isFirstTime: true,
      Btn: '',
    };

    this.ApiCall();
  }

  ApiCall = async () => {
    let token = '';
    token = await AsyncStorage.getItem(storage.Token);

    const BtnName = this.props.navigation.getParam('btnValue');
    this.setState({
      Btn: BtnName,
    });

    console.log('button value :', BtnName);

    console.log('new token' + token);

    console.log('API Call running');

    initialCount = 0;
    finalCount = 0;
    let buttonValue = 'Lost';

    console.log('tokennnn : ' + token);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + token);

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'http://api.tajtrademark.in/api/NewTMApi/TMAPI?UserId=122&ASA&Ag=' +
        BtnName +
        '&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',

      requestOptions,
    )
      .then(response => response.text())
      .then(res => {
        let Data = JSON.parse(res);
        let Apidata = Data.data;

        console.log('Datatatat : ', Data);
        let sectionData = [];

        if (Data.data && Data.data.length > 0) {
          let allProducts = Data.data;
          if (allProducts.length > 10) {
            for (let i = 0; i < 10; i++) {
              sectionData.push(allProducts[i]);
            }
          } else {
            for (let j = 0; j < allProducts.length; j++) {
              sectionData.push(allProducts[j]);
            }
          }
          initialCount = 1;
          finalCount = sectionData.length;
        }

        this.setState({
          spinner: false,
          productData: sectionData,
          fullList: Data.data ? Data.data : [],
        });
        console.log('final res', res);
      })
      .catch(error => console.log('error', error));

    this.setState({});
  };

  onNext = () => {
    const {fullList, productData} = this.state;
    let sectionData = [];
    let index = null;
    for (let i = 0; i < fullList.length; i++) {
      if (
        productData[productData.length - 1].App_Status &&
        fullList[i].App_Status
      ) {
        if (
          productData[productData.length - 1].App_Status ==
          fullList[i].App_Status
        ) {
          index = i;
        }
      }
    }
    if (index) {
      console.log('next index', index);
      initialCount =
        finalCount + 1 > fullList.length ? fullList.length : finalCount + 1;
      finalCount =
        initialCount + 5 > fullList.length ? fullList.length : initialCount + 5;
      for (let j = index; j < index + 6; j++) {
        sectionData.push(fullList[j]);
      }
    }
    if (sectionData.length > 0) {
      this.setState({productData: sectionData});
    }
  };

  onPrevious = () => {
    const {fullList, productData} = this.state;
    let sectionData = [];
    let index = null;
    for (let i = 0; i < fullList.length; i++) {
      if (productData[0].App_Status && fullList[i].App_Status) {
        if (productData[0].App_Status == fullList[i].App_Status) {
          index = i;
        }
      }
    }
    console.log('index', index);
    if (index) {
      if (index <= 5) {
        initialCount = 1;
        finalCount = index + 6 > fullList.length ? fullList.length : index + 1;
        // if (fullList.length <= 5) {
        for (let k = 0; k < index + 1; k++) {
          sectionData.push(fullList[k]);
        }
        sectionData.reverse();
        //}
      } else {
        initialCount =
          index + 2 > fullList.length ? fullList.length : index + 2;
        finalCount = index + 6 > fullList.length ? fullList.length : index + 6;
        for (let j = index; j > index - 6; j--) {
          sectionData.push(fullList[j]);
        }
      }
    }
    console.log('sectionData... previous', sectionData);
    if (sectionData.length > 0) {
      this.setState({productData: sectionData.reverse()});
    }
  };

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
                App. Date
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
                TM Type
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
                {item.Tm_Type}
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
                APPro Office
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
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MyTradeDetailViewPage')
                  }>
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
    const {productData, fullList} = this.state;
    console.log('productData', productData);

    const {RegisteredDetails, isFetching} = this.props;

    const BtnName = this.props.navigation.getParam('btnValue');

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {isFetching ? <Loader /> : null}

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
                  this.props.navigation.navigate('DashboardScreen');
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
                  {this.state.Btn}
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

          {productData.length > 0 ? (
            <FlatList
              data={productData}
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
                            {'App No :'}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Poppins-Bold',
                              fontSize: 14,
                              marginLeft: 20,
                            }}>
                            {item.App_No}
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
                            {'Trademark :'}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: 14,
                              marginLeft: 20,
                            }}>
                            {item.Trade_Mark}
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
          ) : (
            <View />
          )}

          {productData.length > 0 ? (
            <View>
              <View
                style={{
                  marginVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{fontSize: 12}}>{`Showing : ${initialCount}- ${finalCount} of ${fullList.length}`}</Text> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                }}>
                {productData &&
                fullList &&
                productData[0] &&
                fullList[0] == fullList[0] ? (
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="chevron-left"
                      onPress={() => this.onPrevious()}
                      size={12}
                      style={{marginLeft: 10, marginTop: 5}}
                    />
                    <Text
                      onPress={() => this.onPrevious()}
                      style={{marginLeft: 10}}>
                      PREV
                    </Text>
                  </View>
                ) : null}

                {/* <Text style={{marginLeft: 10}}>{fullList.length > 3 ? `1 2 3 ... ${fullList.length}` :`1 2 3`} </Text> */}
                <Text style={{marginLeft: 10}}>
                  {`${initialCount}- ${finalCount} of ${fullList.length}`}{' '}
                </Text>
                {productData &&
                fullList &&
                productData[productData.length - 1] &&
                fullList[fullList.length - 1] ==
                  fullList[fullList.length - 1] ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      onPress={() => this.onNext()}
                      style={{marginLeft: 10}}>
                      NEXT{' '}
                    </Text>
                    <Icon
                      name="chevron-right"
                      size={12}
                      onPress={() => this.onNext()}
                      style={{marginLeft: 10, marginTop: 5}}
                    />
                  </View>
                ) : null}
              </View>
            </View>
          ) : null}
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
export default connect(mapStateToProps)(RegisteredDetails);

// import React, {Component} from 'react';
// import {
//   View,
//   Image,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Text,
//   ScrollView,
//   Platform,
//   LayoutAnimation,
//   UIManager,
//   TouchableOpacity,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import styles from './style';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {SliderBox} from 'react-native-image-slider-box';
// import Icon1 from 'react-native-vector-icons/Feather';
// import {connect} from 'react-redux';
// import storage from '../../config/storage';
// import Loader from '../../screens/Util/loading';

// import AsyncStorage from '@react-native-community/async-storage';

// let initialCount = 0;
// let finalCount = 0;

// class RegisteredDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       productData: [],
//       spinner: true,
//       fullList: [],
//       RegisteredDetails: [],
//       isFirstTime: true,
//     };

//     this.loaddata();
//   }

//   componentWillReceiveProps = props => {
//     if (this.state.isFirstTime) {
//       this.myMethod(props);
//     }
//   };
//   renderItemView = item => {
//     if (this.state.visible == true) {
//       if (this.state.itemValue == item.Rowno) {
//         return (
//           <View
//             style={{
//               marginTop: -10,
//               flex: 1,
//               flexDirection: 'column',
//               marginHorizontal: 20,
//               backgroundColor: '#FFF',
//               borderRadius: 8,
//               justifyContent: 'space-between',
//               paddingHorizontal: 15,
//               paddingVertical: 10,
//             }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 Status
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#82C2EC',
//                   fontFamily: 'Poppins',
//                   marginLeft: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                 }}>
//                 {item.App_Status}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 App. Date
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#5A6779',
//                   fontFamily: 'Poppins',
//                   marginLeft: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                 }}>
//                 {item.App_Date_New}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 TM Type
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#5A6779',
//                   marginLeft: 10,
//                   fontFamily: 'Poppins',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                   width: '55%',
//                 }}>
//                 {item.Tm_Type}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 Valid Upto
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#5A6779',
//                   fontFamily: 'Poppins',
//                   marginLeft: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                 }}>
//                 {item.Valid_upto}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 APPro Office
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#5A6779',
//                   fontFamily: 'Poppins',
//                   marginLeft: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                 }}>
//                 {item.Appropriate_Office}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 marginTop: 8,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: '#000',
//                   fontFamily: 'Poppins-Bold',
//                   width: '40%',
//                 }}>
//                 Class
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#5A6779',
//                   fontFamily: 'Poppins',
//                   marginLeft: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '55%',
//                 }}>
//                 {item.Class_Class}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex: 1,
//                 width: '100%',
//                 justifyContent: 'flex-end',
//                 alignItems: 'flex-end',
//               }}>
//               <TouchableOpacity

//                 style={{
//                   backgroundColor: '#5F85E5',
//                   borderRadius: 5,
//                   padding: 4,
//                   width: '30%',
//                   borderRadius: 10,

//                   right: 10,
//                   bottom: 10,
//                   alignItems: 'center',
//                   marginTop: 10,
//                 }}>
//                   <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('MyTradeDetailViewPage')}>
//                 <Text style={{color: 'white', fontSize: 14}}>View More</Text>
//                 </TouchableOpacity>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       }
//     }
//   };
//   getVisible(item) {
//     if (this.state.visible == false) {
//       console.log('rohit12' + this.state.visible);
//       this.setState({
//         visible: true,
//         itemValue: item.Rowno,
//       });
//     } else {
//       this.setState({
//         visible: false,
//         itemValue: item.Rowno,
//       });
//     }
//   }

//   loaddata = async () => {
//     const BtnName = this.props.navigation.getParam('btnValue');
//     console.log('Button Value : ' + BtnName);
//     const {Nor, PageNo} = this.state;
//     switch (BtnName) {
//       case 'Lost':
//         {
//           console.log('data of btn' + BtnName);
//           const {Nor, PageNo} = this.state;
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Lost_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA&Ag=Lost&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',
//             token: token,
//           });
//         }
//         break;
//       case 'Registered':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Registered_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA&Ag=Registered&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',
//             token: token,
//           });
//         }
//         break;

//       case 'Litigation':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Litigation_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=123&ASA=&Ag=Litigation&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=&As=&search=&Status=',
//             token: token,
//           });
//         }
//         break;

//       case 'Pending':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Pending_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA&Ag=Pending&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',
//             token: token,
//           });
//         }
//         break;

//       case 'Applications':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_ApplicationStatus_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=PropStatus&As=&search=&Status=',
//             token: token,
//           });
//         }
//         break;

//       case 'Proprietors':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Proprieter_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=Proprieter Summary&As=&search=&Status=',
//             token: token,
//           });
//         }
//         break;

//       case 'Opposition':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_Opposition_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=Proposed Opposition&As=FourMonthSixDaysAfter&search=',
//             token: token,
//           });
//         }
//         break;

//       case 'MyTrademark':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_MyTrademark_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=&As&search=',
//             token: token,
//           });
//         }
//         break;

//       case 'Lapsed Renewal':
//         {
//           console.log('data of btn' + BtnName);
//           let userid = await AsyncStorage.getItem(storage.UserID);
//           let token = await AsyncStorage.getItem(storage.Token);
//           console.log('bdb' + userid);
//           this.props.dispatch({
//             type: 'User_LapsedRenewal_Details_Request',
//             url:
//               'NewTMApi/TMAPI?UserId=122&ASA=&Ag=&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead=&As=Lapsed Renewal&search=&Status=',
//             token: token,
//           });
//         }
//         break;

//       default:
//         // Alert.alert('blank');
//         break;
//     }
//     console.log('case');
//   };

//   updateLayout = index => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     const array = [...this.state.listDataSource];
//     array[index]['isExpanded'] = !array[index]['isExpanded'];
//     this.setState(() => {
//       return {
//         listDataSource: array,
//       };
//     });
//   };

//   render() {
//     const {RegisteredDetails, isFetching} = this.props;

//     const BtnName = this.props.navigation.getParam('btnValue');

//     return (
//       <View style={{flex: 1}}>
//         <ScrollView>
//         {isFetching ? <Loader /> : null}

//         <View
//           style={{
//             backgroundColor: 'white',
//             padding: 12,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'flex-start',
//             }}>
//             <TouchableOpacity
//               onPress={() => {
//                 this.props.navigation.goBack(null);
//               }}>
//               <Image
//                 source={require('../../assets/icons/arrow.png')}
//                 style={{width: 24, height: 15, marginEnd: 10}}
//               />
//             </TouchableOpacity>

//             <View style={{}}>
//               <Text
//                 style={{
//                   fontSize: 22,
//                   textAlign: 'center',
//                   marginLeft: 10,
//                 }}>
//                 {BtnName}
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Image
//               source={require('../../assets/icons/bell_one.png')}
//               style={{
//                 width: 22,
//                 height: 22,
//                 marginRight: 15,
//                 justifyContent: 'center',
//               }}
//             />
//             <View style={{alignItems: 'center'}}>
//               <Image
//                 source={require('../../assets/icons/profile.png')}
//                 style={{width: 31, height: 31}}
//               />
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'white',
//             padding: 12,
//             width: '100%',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{
//               width: '88%',
//               borderWidth: 1,
//               borderRadius: 10,
//               flexDirection: 'row',
//               height: 45,
//               alignItems: 'center',
//               backgroundColor: '#fff',
//             }}>
//             <View style={{}}>
//               <Icon1 name="search" size={25} style={{marginLeft: 5}} />
//             </View>
//             <View
//               style={{
//                 backgroundColor: 'transparent',
//                 height: 42,
//                 width: '68%',
//                 borderLeftWidth: 0.5,
//                 marginLeft: 5,
//               }}>
//               <TextInput
//                 style={{
//                   backgroundColor: 'transparent',
//                   height: 42,
//                   width: '100%',
//                 }}
//                 placeholder={'Tm search ...'}
//               />
//             </View>
//           </View>

//           <View
//             style={{
//               width: '12%',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <View style={{alignItems: 'center', marginLeft: 10}}>
//               <Icon name="filter" size={35} />
//             </View>
//           </View>
//         </View>
//         <FlatList
//           data={RegisteredDetails}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item}) => (
//             <View style={{flex: 1}}>
//               <TouchableOpacity onPress={() => this.getVisible(item)}>
//                 <View
//                   style={{
//                     marginTop: 15,
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     backgroundColor: '#FFFFFF',
//                     borderRadius: 10,

//                     padding: 10,
//                     justifyContent: 'space-between',
//                     paddingVertical: 20,

//                     marginHorizontal: 20,
//                   }}>
//                   <View>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         paddingHorizontal: 5,
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 14,
//                           fontFamily: 'Poppins-Bold',
//                         }}>
//                         {'App No :'}
//                       </Text>
//                       <Text
//                         style={{
//                           fontFamily: 'Poppins-Bold',
//                           fontSize: 14,
//                           marginLeft: 20,
//                         }}>
//                         {item.App_No}
//                       </Text>
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         paddingHorizontal: 5,
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 14,
//                           fontFamily: 'Poppins-Bold',
//                         }}>
//                         {'Trademark :'}
//                       </Text>
//                       <Text
//                         style={{
//                           fontFamily: 'Poppins',
//                           fontSize: 14,
//                           marginLeft: 20,
//                         }}>
//                         {item.Trade_Mark}
//                       </Text>
//                     </View>
//                   </View>
//                   <Image
//                     style={{height: 25, width: 25, marginRight: 10}}
//                     source={require('../../assets/icons/arrow_down.png')}
//                   />
//                 </View>
//               </TouchableOpacity>

//               {this.renderItemView(item)}
//             </View>
//           )}
//         />
//         </ScrollView>
//       </View>

//     );
//   }
// }
// const mapStateToProps = state => {
//   console.log('Details' + JSON.stringify(state.isFetching));
//   return {
//     isFetching: state.isFetching,
//     RegisteredDetails: state.RegisteredDetails,
//   };
// };
// export default connect(mapStateToProps)(RegisteredDetails);
