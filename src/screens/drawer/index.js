import React from 'react';
import {
  AsyncStorage,
  Linking,
  View,
  Alert,
  ScrollView,
  ActivityIndicator,
  Text,
  Picker,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Share,
} from 'react-native';
//import Share from "react-native-share";
import { GoogleSignin } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/Ionicons';
import storage from '../../config/storage';
import styles from './style';

export default class MyDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      Number: '',
      // pimage: require('../images/user.png'),
      currentpage: '',
    };
  }
  getprofile = () => {
    this.props.navigation.navigate('Profile');
  };
  renderDrawerItem = route => {
    const onpress =
      route.key === 'Logins'
        ? () =>
          AsyncStorage.clear().then(p =>
            this.props.navigation.navigate(route.key),
          )
        : route.key === 'DashBoard'
          ? () => {
            this.props.navigation.goBack(null);
          }
          : route.key === 'contact'
            ? () => {
              this.props.navigation.navigate('contactus');
            }
            : route.key === 'about'
              ? () => {
                this.props.navigation.navigate('About');
              }
              : route.key === 'rate'
                ? () => {
                  this.props.navigation.navigate(null);
                }
                : route.key === 'share'
                  ? () => {
this.shareinsta()
                    //this.props.navigation.navigate(null);
                  }
                  : route.key === 'logout'
                    ? () => this.Logout()
                    : () => {
                      this.setState({ currentpage: route.key });
                      this.props.navigation.navigate(route.key);
                      AsyncStorage.getItem(storage.UserName).then(Name => {
                        this.setState({ name: Name });
                        Alert;
                      });
                      AsyncStorage.getItem('contact_number').then(number => {
                        this.setState({ Number: number });
                      });
                      AsyncStorage.getItem('Profile_Image').then(pi => {
                        console.log(pi);
                        if (pi) {
                          this.setState({
                            pimage: {
                              uri:
                                'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                                pi,
                            },
                          });
                        }
                      });
                    };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          padding: 8,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
        }}>
        <Image style={{width:25,height:25,}} resizeMethod={'auto'} source={route.icon}></Image>
        <Text
          style={{ padding: 4, marginLeft: 10, fontFamily: 'Poppins-Bold', marginRight: 10, fontSize: 16 }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    AsyncStorage.getItem(storage.UserName).then(Name => {
      this.setState({ name: Name });
      Alert;
    });
    AsyncStorage.getItem(storage.last).then(last => {
      this.setState({ Number: last });
    });
    AsyncStorage.getItem('Profile_Image').then(pi => {
      console.log(pi);
      if (pi) {
        this.setState({
          pimage: {
            uri:
              'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
              pi,
          },
        });
      }
    });
  }
  setlog = () => {
    try {
      GoogleSignin.revokeAccess();
      GoogleSignin.signOut();
      console.log('SignOut');

      // AsyncStorage.clear();
      AsyncStorage.setItem('USER_ID', '');
      // LanguagesString.setLanguage('en')
      this.props.navigation.navigate('Other');

      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('SignOut');

      this.props.navigation.navigate('AuthNavigator');

      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  Logout = () => {
    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        { text: 'ok', onPress: () => this.setlog() },
      ],
      { cancelable: false },
    );
    // Alert.alert("Logout","Are u want to logout ?");
  };
  ShareVoter = () => {
    Linking.openURL('https://www.nvsp.in/');
  };
  shareinsta = () => {
    Share.share(
      {
        message: 'Hi,Install this app for access my active app https://www.nvsp.in/',
        url: 'https://www.nvsp.in/'
      }
      ).then(({action, activityType}) => {
      if(action === Share.sharedAction)
        console.log('Share was successful');
      else
        console.log('Share was dismissed');
      });
  };

  render() {
    return (
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity
              onPress={this.getprofile}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/app_iocn.png')}
                style={{
                  width: 100,
                  height: 100,
                  margin: 8,
                  alignItems: 'center',
                  //borderRadius: 10,
                }}
              />
              <View style={{ marginTop: 4, marginLeft: 4, marginBottom: 8 }}>
                <Text style={styles.TextStyle}>{this.state.name} {this.state.Number}</Text>

              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.spreate}></View>
          {this.renderDrawerItem({ label: 'DashBoard', key: 'DashBoard' ,icon:require('../../assets/images/home.png')})}
          {this.renderDrawerItem({ label: 'Contact us', key: 'contact',icon:require('../../assets/images/send.png')})}
          {this.renderDrawerItem({ label: 'About us', key: 'about',icon:require('../../assets/images/user.png')})}
          {this.renderDrawerItem({ label: 'Rate us', key: 'rate',icon:require('../../assets/images/star.png')})}
          {this.renderDrawerItem({ label: 'Share us', key: 'share',icon:require('../../assets/images/share.png')})}
          {this.renderDrawerItem({ label: 'Logout', key: 'logout',icon:require('../../assets/images/logout.png')})}
        </View>
      </ScrollView>
    );
  }
}

