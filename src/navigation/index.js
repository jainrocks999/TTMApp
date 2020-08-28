import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/DashboardScreen';
import FirstScreen from '../screens/first/index';
import enterScreen from '../screens/enter/index';
import rateScreen from '../screens/rate/index';
import shareScreen from '../screens/share/index';
import SplashPage from '../screens/AuthScreen/SplashScreen';
import drawerPage from '../screens/drawer';
import demo from '../screens/demo';
import RegistrationPageOne from '../screens/AuthScreen/RegisterScreenOne';
import RegistrationPageTwo from '../screens/AuthScreen/RegisterScreenSecond';
import LoginPage from '../screens/AuthScreen/LoginScreen';
import CRDetail from '../screens/CRDetail';
import TradeMark from '../screens/TradeMark';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MyTradeDetailPage from  '../screens/MyTradeDetailsPage';
import MyTradeDetailViewPage from  '../screens/MyTradeDetailsViewPage';
//import Sidebar from '../component/SideBar';
import Other from '../screens/other';
import TMSearch from '../screens/tmSearch';

const TMSearchStack = createStackNavigator(
  {
    tm: {
      screen: TMSearch,
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
const AuthNavigator = createStackNavigator(
  {
    FirstPage: {
      screen: FirstScreen,
    },
    Other: {
      screen: Other,
    },
    RegistrationOne: {
      screen: RegistrationPageOne,
    },
    RegistrationTwo: {
      screen: RegistrationPageTwo,
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
            style={{paddingLeft: 10, color: 'white'}}
            onPress={() => navigation.toggleDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);
const DrawerStack = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      header: false,
      headerTitle: 'Dashboard',
      drawerLabel: 'Dashboard',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#F97D09',
      },
      headerLeft: (
        <TouchableOpacity onPress={navigation.toggleDrawer}>
          <Icon
            name="md-menu"
            style={{marginLeft: 10}}
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon
            name="ios-notifications-outline"
            style={{marginRight: 10}}
            size={30}
            color="red"
          />
        </TouchableOpacity>
      ),
    }),
  },
);
const apiNavigator = createStackNavigator({
  copies: {
    screen: CRDetail,
  },
  trade: {
    screen: TradeMark,
  },
});
// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Dashboard: {
//       screen: DashboardScreen,
//       navigationOptions: {
//         title: 'Home',
//         drawerIcon: ({tintColor}) => (
//           <Icon name="home" size={20} color={tintColor} />
//         ),
//       },
//     },
//     enter: {
//       screen: enterScreen,
//       navigationOptions: {
//         title: 'Enter',
//         drawerIcon: ({tintColor}) => (
//           <Icon name="globe-outline" size={20} color={tintColor} />
//         ),
//       },
//     },
//     rate: {
//       screen: rateScreen,
//       navigationOptions: {
//         title: 'Rate',
//         drawerIcon: ({tintColor}) => (
//           <Icon name="star-outline" size={20} color={tintColor} />
//         ),
//       },
//     },

//     share: {
//       screen: shareScreen,
//       navigationOptions: {
//         title: 'Share',
//         drawerIcon: ({tintColor}) => (
//           <Icon name="share-social-outline" size={20} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     contentComponent: props => <Sidebar {...props} />,
//   },
// );
const TradedetailsStack = createStackNavigator({
  MyTradeDetailPage:{
    screen:MyTradeDetailPage
  },
});
const MyTradeDetailViewStack = createStackNavigator({
  MyTradeDetailViewPage:{
    screen:MyTradeDetailViewPage
  },
});
const AppStack = createDrawerNavigator(
  {
    Dashboard: HomeStackNavigator,
    TradedetailsStack:TradedetailsStack,
    MyTradeDetailViewStack:MyTradeDetailViewStack,
    // Profile: ProfileStack,
    //Notification: NotificationStack,
    // About: AboutStack,
    //Contact: ContactStack,
    //AddIssue: IssueStack,
  },
  {
    initialRouteName: 'Dashboard',
    contentComponent: drawerPage,
  },
);
const AuthStack = createSwitchNavigator(
  {
    Demo: demo,
    AuthLoading: {screen: SplashPage},
    //FirstPage: {screen: FirstScreen},
    Auth: AuthNavigator,
    AppStack: AppStack,
    apiScreen: apiNavigator,
    TMSearchStack: TMSearchStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootApp = createAppContainer(AuthStack);
export default RootApp;
