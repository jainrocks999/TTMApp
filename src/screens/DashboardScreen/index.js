import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CardView from 'react-native-cardview';
import styles from './style';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import Loader from '../../screens/Util/loading';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';


class DashBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner:true,
      isVisible: false,
      isVisibleAction: false,
      isVisibleApplication: false,
      isVisibleStatus: false,
      isVisibleUpcoming: false,
      Total_ApplicationsName:'',
      Total_ApplicationsCount:'',
      Proceeding_CertificateName:'',
      Proceeding_CertificateCount:'',
      Renewal_ProceedingName:'',
      Renewal_ProceedingCount:'',
      CopyRightCount:'',
      CopyRightName:'',
      MyTradeMarkName:'',
      MyTradeMarkCount:'',
      DesignName:'',
      DesignCount:'',
      ProprietorsName:'',
      ProprietorsCount:'',
      FullData:'',
      Proposed_OppositionCount:'',
      Intimation_Of_Notice_Of_PublicationCount:'',
      Proposed_RectificationCount:'',
      Certificate_of_RegistrationCount:'',


      //  spinner: true,
    };
    this.loaddata();
  }
// R
// "PursuanceName":"Pursuance",
// "PursuanceCount":"0","Formalities_Check_FailName":"
// Formalities Check Fail","Formalities_Check_FailCount"
// :"0","Certificate_of_RegistrationName":"Certificate of 
// Registration","Certificate_of_RegistrationCount":"0",
// "Proposed_OppositionName":"Proposed Opposition",
// "Proposed_OppositionCount":"0","Intimation_Of_Notice
// _Of_PublicationName":"Intimation Of Notice Of Publication"
// ,"Intimation_Of_Notice_Of_PublicationCount":"1","Proposed_R
// ectificationName":"Proposed Rectification","Proposed_Rectifica
// tionCount":"11","":"Proprietors","
// t":"1","Oppositions_LodgedName":"Oppositions Lodged","Oppositions_L
// odgedCount":"5","Objections_LodgedName":"Objections Lodged","Object
// ions_LodgedCount":"0","OwnName":"Own","O

  loaddata = async () => {
    let token = await AsyncStorage.getItem(storage.Token);
    let UserID = await AsyncStorage.getItem(storage.UserID);
    let ID = parseInt(UserID)
    console.log('llllllllllll'+ ID)
    axios.get('http://api.tajtrademark.in/api/NewTMApi/Dashboard?UserId=2382', {
    headers:{
        Authorization: 'bearer ' + token,
        // 'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then((res) => {
if(res.data.Status == true){
console.log('jjjjjjj'+JSON.stringify(res.data.data))
  this.setState({
    Total_ApplicationsName:res.data.data.Total_ApplicationsName,
    Total_ApplicationsCount:res.data.data.Total_ApplicationsCount,
    Proceeding_CertificateName:res.data.data.Proceeding_CertificateName,
    Proceeding_CertificateCount:res.data.data.Proceeding_CertificateCount,
    Renewal_ProceedingName:res.data.data.Renewal_ProceedingName,
    CopyRightName:res.data.data.CopyRightName,
    CopyRightCount:res.data.data.CopyRightCount,
    MyTradeMarkName:res.data.data.MyTradeMarkName,
    MyTradeMarkCount:res.data.data.MyTradeMarkCount,
    DesignName:res.data.data.DesignName,
    DesignCount:res.data.data.DesignCount,
    ProprietorsName:res.data.data.ProprietorsName,
    ProprietorsCount:res.data.data.ProprietorsCount,
    //own
    Renewal_ProceedingCount:res.data.data.Renewal_ProceedingCount,
    Proposed_OppositionCount:res.data.data.Proposed_OppositionCount,
    Intimation_Of_Notice_Of_PublicationCount:res.data.data.Intimation_Of_Notice_Of_PublicationCount,
    Proposed_RectificationCount:res.data.data.Proposed_RectificationCount,
    Certificate_of_RegistrationCount:res.data.data.Certificate_of_RegistrationCount,

spinner:false,






  })

}


      console.log('Hello dear resp' +JSON.stringify(res.data))
    })
    .catch((error) => {
      console.error(error)
    }) 
    // this.props.dispatch({type: 'User_Dashboard_Success',
    //   url:
    //     'NewTMApi/Dashboard?UserId=122',
    //   token: token,
    // });
  };
  tmdata = name => {
   if (name == 'Application') {
      this.setState({
        isVisibleApplication: true,
      });
    } else if (name == 'Upcoming') {
      this.setState({
        isVisibleUpcoming: true,
      });
    } else {
      this.setState({
        isVisible: true,
      });
    }
  };

  render() {
   // Alert.alert(this.props.DashboardDetails)
    return (
      <View style={{backgroundColor: '#f6f8f9', flex: 1}}>
         <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
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
            }}>
            <TouchableOpacity
              style={{width: 25, height: 20}}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{width: '99%', height: '99%'}}
              />
            </TouchableOpacity>

            <Text
              style={{
                textAlignVertical: 'center',
                marginLeft: 20,
                fontSize: 22,
                fontFamily: 'Poppins-Bold',
              }}>
              {'Dashboard'}
            </Text>
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
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('ProfileStack');
              }}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{width: 31, height: 31}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{paddingHorizontal: 10, flex: 1, marginTop: 15}}>
          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <TouchableOpacity
                onPress={() => this.tmdata()}
                style={styles.touchTm}>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/Image/trademark2x.png')}
                  resizeMode={'stretch'}
                />
                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#f8fbf5',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    {this.state.MyTradeMarkName}
                  </Text>
                  <Text
                    style={{
                      color: '#262626',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                    }}>
                    {this.state.MyTradeMarkCount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.secondView}>
              <TouchableOpacity
                style={styles.touchTm}
                onPress={() =>
                  this.props.navigation.navigate('CopyRightStack')
                }>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/Image/copyright_2x.png')}
                  resizeMode={'stretch'}
                />

                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#fffcf7',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    {this.state.CopyRightName}
                  </Text>
                  <Text
                    style={{
                      color: '#262626',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                    }}>
                    {this.state.CopyRightCount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <TouchableOpacity
                style={styles.touchTm}
                onPress={() =>
                  this.props.navigation.navigate('DesignPageStack')
                }>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/icons/design.png')}
                  resizeMode={'stretch'}
                />

                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#fff8f4',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    {this.state.DesignName}
                  </Text>
                  <Text
                    style={{
                      color: '#262626',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                    }}>
                    {this.state.DesignCount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.secondView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PatentStack')}
                style={styles.touchTm}>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/icons/Patent_New.png')}
                  resizeMode={'stretch'}
                />

                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#f4f6fb',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    Patent
                  </Text>
                  <Text
                    style={{
                      color: '#262626',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                    }}>
                    23
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TMSearchStack')}
                style={styles.touchTm}>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/icons/Rs_new.png')}
                  resizeMode={'stretch'}
                />

                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#f8f7ff',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    Request for
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 12,
                    }}>
                    TM Search
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.secondView}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CalendraPageStack')
                }
                style={styles.touchTm}>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/icons/calendra_new.png')}
                  resizeMode={'stretch'}
                />
                <View
                  style={{
                    width: '100%',
                    height: 52,
                    backgroundColor: '#f8f7ff',
                    marginTop: 40,
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    Calendar
                  </Text>
                  <Text style={{color: '#262626', fontFamily: 'Poppins'}}>
                    23
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '100%',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              padding: 10,
            }}>
            <TouchableOpacity
              // onPress={() => this.tmdata('status')}
              onPress={() => {
                this.props.navigation.navigate('Status',{
                  Applicaticount:this.state.Total_ApplicationsCount,
                  ProprietorsCount:this.state.ProprietorsCount,
                });
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/Image/Status_icon.png')}
              />
              <Text style={{fontSize: 12, color: 'gray', padding: 4}}>
                Status
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.tmdata('Upcoming')}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/upcoming.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  justifyContent: 'center',
                  padding: 4,
                  textAlign: 'center',
                }}>
                Upcoming Hearing
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.tmdata('Application')}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/total.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  padding: 4,
                  textAlign: 'center',
                }}>
                Total Application
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '24%',
              padding: 10,
            }}>
            <TouchableOpacity
              //onPress={() => this.tmdata('Action')}
              onPress={() => {
                this.props.navigation.navigate('ActionRequiedPage',{
                  Proceeding_CertificateCount:this.state.Proceeding_CertificateCount,
                  Renewal_ProceedingCount:this.state.Renewal_ProceedingCount,
                  Certificate_of_RegistrationCount:this.state.Certificate_of_RegistrationCount,
                  Proposed_OppositionCount:this.state.Proposed_OppositionCount,
Intimation_Of_Notice_Of_PublicationCount:this.state.Intimation_Of_Notice_Of_PublicationCount,
Proposed_RectificationCount:this.state.Proposed_RectificationCount,
                
                });
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/action.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  padding: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                {' '}
                Action Required
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          isVisible={this.state.isVisible}
          onSwipeComplete={() => this.setState({isVisible: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisible: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins-SemiBold',
                    color: '#000',
                    alignItems: 'center',
                  }}>
                  Trademark
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    marginTop: 24,
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage', {
                          btnValue: 'MyTrademark',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          My Trade
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Similar Trade
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/IconAwesomeBook2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Change Data
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Log Book
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/hearing2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Hearings
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Icon_ionic_ios_timer2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Lapsed
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          opposition
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Lapsed Renewal',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Icon_open_timer2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Lapsed
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Renewal
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '99%',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.secondView1}>
                  <TouchableOpacity style={styles.touchTm}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 4,
                        borderRadius: 10,
                      }}>
                      <Image
                        style={styles.popupIcon}
                        source={require('../../assets/Image/commerce2x.png')}
                        resizeMode={'stretch'}
                      />
                      <Text
                        style={{
                          color: '#000',
                          fontFamily: 'Poppins',
                          fontSize: 12,
                        }}>
                        Foreign
                      </Text>
                      <Text
                        style={{
                          color: '#000',
                          fontFamily: 'Poppins',
                          fontSize: 12,
                        }}>
                        Details
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <Modal
          //upcoming
          isVisible={this.state.isVisibleUpcoming}
          onSwipeComplete={() => this.setState({isVisibleUpcoming: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisibleUpcoming: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <TouchableOpacity
                    style={{alignItems: 'center', alignItems: 'center'}}
                    onPress={() =>
                      this.setState({
                        isVisibleUpcoming: false,
                      })
                    }>
                    <Image
                      style={styles.crossIcon}
                      source={require('../../assets/Image/cross.png')}
                      resizeMode={'center'}
                    />
                  </TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    Upcoming
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    marginTop: 24,
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Similar',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Similar
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Opposition',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Opposition
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Post.Reg.Hearing',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/IconAwesomeBook2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          {'Post.Reg.\n Hearing'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Post.Reg.Hearing',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <View>
                          <Image
                            style={styles.popupIcon}
                            source={require('../../assets/Image/IconAwesomeBook2x.png')}
                            resizeMode={'stretch'}
                          />
                        </View>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          {'Post.Reg.\n Hearing'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <Modal
          //Application
          isVisible={this.state.isVisibleApplication}
          onSwipeComplete={() => this.setState({isVisibleApplication: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisibleApplication: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                {/* //yeha pr dismiss ka iocn add kr dena  */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  {/* <TouchableOpacity
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() =>
                      this.setState({
                        isVisibleApplication: false,
                      })
                    }>
                    <Image
                      style={styles.crossIcon}
                      source={require('../../assets/Image/cross.png')}
                      resizeMode={'center'}
                    />
                  </TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000',
                      alignItems: 'center',
                    }}>
                    Application
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    marginTop: 24,
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Registered',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Registered
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Lost',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Lost
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Litigation',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/IconAwesomeBook2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Litigation
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Pending',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/hearing2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Pending
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <Modal
          //Action
          isVisible={this.state.isVisibleAction}
          onSwipeComplete={() => this.setState({isVisibleAction: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisibleAction: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  {/* <TouchableOpacity
                    style={{alignItems: 'center', alignItems: 'center'}}
                    onPress={() =>
                      this.setState({
                        isVisibleAction: false,
                      })
                    }>
                    <Image
                      style={styles.crossIcon}
                      source={require('../../assets/Image/cross.png')}
                      resizeMode={'center'}
                    />
                  </TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000',
                      alignItems: 'center',
                    }}>
                    Action Required
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    marginTop: 24,
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Own',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Own
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Similar',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Similar
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <Modal
          //status
          isVisible={this.state.isVisibleStatus}
          onSwipeComplete={() => this.setState({isVisibleStatus: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisibleStatus: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',

                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',

                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  {/* <TouchableOpacity
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() =>
                      this.setState({
                        isVisibleStatus: false,
                      })
                    }>
                    <Image
                      style={styles.crossIcon}
                      source={require('../../assets/Image/cross.png')}
                      resizeMode={'center'}
                    />
                  </TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000',
                      alignItems: 'center',
                    }}>
                    Status
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    marginTop: 10,
                    justifyContent: 'space-around',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Applications',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Applications
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Proprieter',
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 4,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: 12,
                          }}>
                          Proprieters
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    DashboardDetails:state.DashboardDetails,
  };
};

export default connect(mapStateToProps)(DashBoardPage);
