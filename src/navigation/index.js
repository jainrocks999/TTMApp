import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/dashboard/index';
import FirstScreen from '../screens/first/index';
import enterScreen from '../screens/enter/index';
import rateScreen from '../screens/rate/index';
import shareScreen from '../screens/share/index';
import SplashPage from '../screens/splash/index';
import demo from '../screens/demo';
import RegistrationPage from '../screens/registeration/index';
import LoginPage from '../screens/login/index';
import CRDetail from '../screens/CRDetail';
import TradeMark from '../screens/TradeMark';
import Sidebar from '../component/SideBar';

const AuthNavigator = createStackNavigator(
  {
    Registration: {
      screen: RegistrationPage,
    },
    Login: {
      screen: LoginPage,
    },
    
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: false,
      };
    },
  },
);

const HomeStackNavigator = createStackNavigator(
  {
    Account: {
      screen: DashboardScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: false,
        title: '',
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: 'black',
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10, color: 'black'}}
            onPress={() => navigation.toggleDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);
const apiNavigator=createStackNavigator({
  copies:{
    screen:CRDetail
  },
  trade:{
    screen:TradeMark
  }
})
const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({tintColor}) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
      },
    },
    enter: {
      screen: enterScreen,
      navigationOptions: {
        title: 'Enter',
        drawerIcon: ({tintColor}) => (
          <Icon name="globe-outline" size={20} color={tintColor} />
        ),
      },
    },
    rate: {
      screen: rateScreen,
      navigationOptions: {
        title: 'Rate',
        drawerIcon: ({tintColor}) => (
          <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    
    share: {
      screen: shareScreen,
      navigationOptions: {
        title: 'Share',
        drawerIcon: ({tintColor}) => (
          <Icon name="share-social-outline" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: props => <Sidebar {...props} />,
  },
);

const AuthStack = createSwitchNavigator(
  {
    Demo: demo,
    AuthLoading: {screen: SplashPage},
    FirstPage: {screen: FirstScreen},
    Auth: AuthNavigator,
    Drawer: AppDrawerNavigator,
    apiScreen:apiNavigator
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootApp = createAppContainer(AuthStack);
export default RootApp;
