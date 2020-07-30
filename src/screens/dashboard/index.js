import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CardView from 'react-native-cardview';
import styles from './styles';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {floor} from 'react-native-reanimated';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Action Required',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.tabImage}
        source={require('../../assets/icons/plus.png')}
      />
    ),
  };

  render() {
    return (
      <View style={{backgroundColor: '#F6F6F6', flex: 1}}>
        <ImageBackground
          source={require('../../assets/icons/bg_image.png')}
          style={styles.background}>
          <ScrollView style={{paddingHorizontal: 10, flex: 1}}>
            <Icon
              style={{paddingLeft: 10, color: 'white'}}
              onPress={() => this.props.navigation.toggleDrawer()}
              name="menu"
              size={30}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingHorizontal: 10,
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 15, color: '#fff'}}>Good Morning</Text>
                <Text style={{fontSize: 15, color: '#fff'}}>Kashish</Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'blue',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 55, width: 55}}
                  source={require('../../assets/icons/profile.png')}
                  resizeMode={'cover'}
                />
              </View>
            </View>

            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={{
                backgroundColor: 'white',
                flex: 1,
                marginTop: 60,
                marginHorizontal: 10,
                paddingVertical: 10,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#b6b6b8',
                  padding: 10,
                  marginTop: 10,
                }}>
                <Text
                  style={{textAlign: 'center', fontSize: 12, color: 'black'}}>
                  My Balance
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 12, color: 'black'}}>
                  Rp 1,000.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    width: '25%',
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '80%',
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: '80%',
                          width: '80%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Registered
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '25%',
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '80%',
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: '80%',
                          width: '80%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Lost
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '25%',
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '80%',
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: '80%',
                          width: '80%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Litigation
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '25%',
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: '80%',
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: '80%',
                          width: '80%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Pending
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </CardView>

            <Text
              style={{
                fontSize: 20,
                marginTop: 20,
                marginBottom: 20,
                paddingHorizontal: 10,
              }}>
              Services
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 130,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('trade')}
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 100,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../assets/icons/tm.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Trademark
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('copies')}
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 90,
                        width: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: -15,
                      }}
                      source={require('../../assets/icons/c.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Copyright
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 130,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 90,
                        width: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../assets/icons/d.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Design
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 100,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../assets/icons/p.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Patent
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 130,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 60,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../assets/icons/calender.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Calendar
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', height: '90%', width: '100%'}}>
                  <View
                    style={{
                      height: '80%',
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 60,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../assets/icons/r.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={{textAlign: 'center', fontSize: 14}}>
                    Require
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Status',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/icons/plus.png')}
      />
    ),
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/icons/bg_image.png')}
        style={{flex: 1, width: useWindowDimensions.width, height: '50%'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 130,
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View
              style={{
                width: '45%',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', height: '100%', width: '100%'}}>
                <View
                  style={{
                    height: '80%',
                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/icons/r.png')}
                    resizeMode={'stretch'}
                  />
                </View>
                <Text style={{textAlign: 'center', fontSize: 14}}>
                  Trademark
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '45%',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', height: '100%', width: '100%'}}>
                <View
                  style={{
                    height: '80%',
                    width: '90%',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: 130,
                      width: 130,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/icons/tm.png')}
                    resizeMode={'stretch'}
                  />
                </View>
                <Text style={{textAlign: 'center', fontSize: 14}}>
                  Trademark
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 150,
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View
              style={{
                width: '45%',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', height: '100%', width: '100%'}}>
                <View
                  style={{
                    height: '80%',
                    width: '90%',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: 130,
                      width: 130,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/icons/tm.png')}
                    resizeMode={'stretch'}
                  />
                </View>
                <Text style={{textAlign: 'center', fontSize: 14}}>
                  Trademark
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '45%',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', height: '100%', width: '100%'}}>
                <View
                  style={{
                    height: '80%',
                    width: '90%',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: 130,
                      width: 130,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/icons/tm.png')}
                    resizeMode={'stretch'}
                  />
                </View>
                <Text style={{textAlign: 'center', fontSize: 14}}>
                  Trademark
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
class HearingScreen extends React.Component {
  static navigationOptions = {
    title: 'Hearing',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/icons/plus.png')}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Litigation</Text>
      </View>
    );
  }
}
const Navegador = createBottomTabNavigator(
  {
    Action: {
      screen: RegisterScreen,
    },
    status: {
      screen: StatusScreen,
    },
    hearing: {
      screen: HearingScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#2D2E5C',
      },
    },
  },
);

export default Navegador;
