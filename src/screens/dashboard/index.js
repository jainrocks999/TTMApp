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
              style={styles.viewHeader}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>Good Morning</Text>
                <Text style={styles.text}>Kashish</Text>
              </View>

              <View
                style={styles.profileView}>
                <Image
                  style={styles.image}
                  source={require('../../assets/icons/profile.png')}
                  resizeMode={'cover'}
                />
              </View>
            </View>

            <CardView
              cardElevation={5}
              cardMaxElevation={5}
              cornerRadius={5}
              style={styles.card}>
              <View
                style={styles.myBalance}>
                <Text
                  style={styles.myText}>
                  My Balance
                </Text>
                <Text
                  style={styles.rs}>
                  Rp 1,000.00
                </Text>
              </View>
              <View
                style={styles.view1}>
                <View
                  style={styles.view2}>
                  <TouchableOpacity
                    style={styles.touch}>
                    <View
                      style={styles.touchView}>
                      <Image
                        style={styles.image2}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={styles.same}>
                        Registered
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={styles.view2}>
                  <TouchableOpacity
                    style={styles.touch}>
                    <View
                      style={styles.touchView}>
                      <Image
                        style={styles.image2}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={styles.same}>
                        Lost
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={styles.view2}>
                  <TouchableOpacity
                    style={styles.touch}>
                    <View
                      style={styles.touchView}>
                      <Image
                        style={styles.image2}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={styles.same}>
                        Litigation
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={styles.view2}>
                  <TouchableOpacity
                    style={styles.touch}>
                    <View
                      style={styles.touchView}>
                      <Image
                        style={styles.image2}
                        source={require('../../assets/icons/r.png')}
                        resizeMode={'center'}
                      />
                      <Text style={styles.same}>
                        Pending
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </CardView>

            <Text
              style={styles.service}>
              Services
            </Text>

            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('trade')}
                  style={styles.touchTm}>
                  <View
                    style={styles.thirdView}>
                    <Image
                      style={styles.tmImage}
                      source={require('../../assets/icons/tm.png')}
                      resizeMode={'stretch'}
                    />
                  </View>
                  <Text style={styles.trade}>
                    Trademark
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={styles.copyView}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('copies')}
                  style={styles.copyTouch}>
                  <View
                    style={styles.copyView2}>
                    <Image
                      style={styles.copyImage}
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
              style={styles.designView}>
              <View
                style={styles.designView2}>
                <TouchableOpacity
                  style={styles.designTouch}>
                  <View
                    style={styles.designView3}>
                    <Image
                      style={styles.designImage}
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
                style={styles.patentView1}>
                <TouchableOpacity
                  style={styles.patentTouch}>
                  <View
                    style={styles.patentView2}>
                    <Image
                      style={styles.patentImage}
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
              style={styles.calenderView1}>
              <View
                style={styles.calenderView2}>
                <TouchableOpacity
                  style={styles.calenderTouch}>
                  <View
                    style={styles.calenderView3}>
                    <Image
                      style={styles.calenderImage}
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
                style={styles.calenderView2}>
                <TouchableOpacity
                  style={styles.calenderTouch}>
                  <View
                    style={styles.calenderView3}>
                    <Image
                      style={styles.calenderImage}
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
        style={styles.plusIcon}
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
            style={styles.pView}>
            <View
              style={styles.pView1}>
              <TouchableOpacity
                style={styles.pTouch}>
                <View
                  style={styles.pView2}>
                  <Image
                    style={styles.pImage}
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
              style={styles.pView1}>
              <TouchableOpacity
                style={styles.pTouch}>
                <View
                  style={styles.pView2}>
                  <Image
                    style={styles.pImage}
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
            style={styles.tm}>
            <View
              style={styles.pView1}>
              <TouchableOpacity
                style={styles.pTouch}>
                <View
                  style={styles.pView2}>
                  <Image
                    style={styles.pImage}
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
              style={styles.pView1}>
              <TouchableOpacity
                style={styles.pTouch}>
                <View
                  style={styles.pView2}>
                  <Image
                    style={styles.pImage}
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
        style={styles.hImage}
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
