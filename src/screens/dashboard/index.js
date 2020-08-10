import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CardView from 'react-native-cardview';
import styles from './styles';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Status',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.tabImage}
        source={require('../../assets/icons/status.png')}
      />
    ),
  };

  render() {
    return (
      <View style={{backgroundColor: '#f6f8f9', flex: 1}}>
           <View style={{backgroundColor:'white',padding:20,flexDirection:'row',justifyContent:'space-between'}}>
             <View style={{flexDirection:'row'}}>
           {/* <Icon
              style={{paddingLeft: 1, color: 'black'}}
              onPress={() => this.props.navigation.toggleDrawer()}
              name="menu"
              size={30}
            /> */}
            <TouchableOpacity>
            <Image source={require('../../assets/icons/menu.png')} style={{width:20,height:15,marginTop:7}}/>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:22,marginLeft:6}}>Dashboard </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../../assets/icons/bell.png')} style={{width:30,height:30,marginRight:10}}/>
              <View style={{borderWidth:1,borderRadius:15}}>
              <Image source={require('../../assets/icons/profile.png')} style={{width:30,height:30}}/>
              </View>
            </View>
           </View>
          <ScrollView style={{paddingHorizontal: 10, flex: 1,marginTop:15}}>
           
            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('tm')}
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/trademark.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#f8fbf5',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Trademark
                     </Text>
                     <Text>23</Text>
                    </View>
                </TouchableOpacity>
              </View>

              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/copyright.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#fffcf7',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Copyright
                     </Text>
                     <Text>23</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/path.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#fff8f4',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Design
                     </Text>
                     <Text>23</Text>
                    </View>
                </TouchableOpacity>
              </View>

              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/copyright.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#f4f6fb',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Patent
                     </Text>
                     <Text>23</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/search.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#f8f7ff',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Request for
                     </Text>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       TM Search
                     </Text>
                   
                    </View>
                </TouchableOpacity>
              </View>

              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/calender.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:60,backgroundColor:'#f8f7ff',marginTop:20,padding:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Calender
                     </Text>
                     <Text>23</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
       
      </View>
    );
  }
}
class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcomming',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.plusIcon}
        source={require('../../assets/icons/msg.png')}
      />
    ),
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/icons/search.png')}
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
                    source={require('../../assets/icons/trademark.png')}
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
                    source={require('../../assets/icons/trademark.png')}
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
                    source={require('../../assets/icons/trademark.png')}
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
                    source={require('../../assets/icons/trademark.png')}
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
    title: 'Total Application',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.hImage}
        source={require('../../assets/icons/total.png')}
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
class Application extends React.Component {
  static navigationOptions = {
    title: 'Action Required',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.hImage}
        source={require('../../assets/icons/timer.png')}
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
    Status: {
      screen: RegisterScreen,
    },
    status: {
      screen: StatusScreen,
    },
    hearing: {
      screen: HearingScreen,
    },
    application:{
      screen:Application
    }
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
