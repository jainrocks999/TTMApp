import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CardView from 'react-native-cardview';
import styles from './style';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

class DashBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isVisibleAction: false,
      isVisibleApplication: false,
      isVisibleStatus: false,
      isVisibleUpcoming: false,

      //  spinner: true,
    };
  }
  tmdata = name => {
    if (name == 'status') {
      this.setState({
        isVisibleStatus: true,
      });
    } else if (name == 'Application') {
      this.setState({
        isVisibleApplication: true,
      });
    } else if (name == 'Upcoming') {
      this.setState({
        isVisibleUpcoming: true,
      });
    } else if (name == 'Action') {
      this.setState({
        isVisibleAction: true,
      });
    } else {
      this.setState({
        isVisible: true,
      });
    }
  };

  render() {
    return (
      <View style={{backgroundColor: '#f6f8f9', flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{width: 20, height: 15}}
            />
          </TouchableOpacity>

          <View style={{}}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
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
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{width: 31, height: 31}}
              />
            </View>
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
                    Trademark
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
                    Copyright
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
                    Design
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
              onPress={() => this.tmdata('status')}
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
                }}>
                Upcoming
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
              style={{alignItems: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/total.png')}
              />
              <Text style={{fontSize: 12, color: 'gray', padding: 4}}>
                {' '}
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
              onPress={() => this.tmdata('Action')}
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() =>
                      this.setState({
                        isVisibleUpcoming: false,
                      })
                    }>
                    <Image
                      style={styles.popupIcon}
                      source={require('../../assets/Image/Group2x.png')}
                      resizeMode={'stretch'}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000',
                      alignItems: 'center',
                    }}>
                    Upcoming
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 24,
                    justifyContent: 'flex-start',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                          Post.Reg.Hearing
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                          Post.Reg.Hearing
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
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <Image
                    style={styles.popupIcon}
                    source={require('../../assets/Image/Group2x.png')}
                    resizeMode={'stretch'}
                  />
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
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() => this.tmdata()}>
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '99%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                          Padding
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
          onBackdropP
          ress={() => this.setState({isVisibleAction: false})}>
          <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <Image
                    style={styles.popupIcon}
                    source={require('../../assets/Image/Group2x.png')}
                    resizeMode={'stretch'}
                  />
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
                    justifyContent: 'flex-start',
                  }}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{width: '20%', justifyContent: 'center'}}
                    onPress={() =>
                      this.setState({
                        isVisibleStatus: false,
                      })
                    }>
                    <Image
                      style={styles.popupIcon}
                      source={require('../../assets/Image/Group2x.png')}
                      resizeMode={'stretch'}
                    />
                  </TouchableOpacity>
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
                        this.props.navigation.navigate('MyTradeDetailPage')
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
                          Proprietors
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
  };
};

export default connect(mapStateToProps)(DashBoardPage);
