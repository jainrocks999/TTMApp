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
import CopyRightPage from '../screens/CopyRightScreen';
import DesignPage from '../screens/DesignScreen';
import TradeMark from '../screens/TradeMark';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MyTradeDetailPage from '../screens/MyTradeDetailsPage';
import MyTradeDetailViewPage from '../screens/MyTradeDetailsViewPage';
import CalendarPage from '../screens/CalendarPage';
import PatentPage from '../screens/PatentScreen';
import Other from '../screens/other';
import TMSearchPage from '../screens/TMSearchScreen';
import RegScreenDetails from '../screens/RegisteredScreen';
import LostScreenDetails from '../screens/LostScreen';

const PatentStack = createStackNavigator(
  {
    PatentPage: {
      screen: PatentPage,
    },
    // header:false
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: false,
      };
    },
  },
);

const TMSearchStack = createStackNavigator(
  {
    TMSearchPage: {
      screen: TMSearchPage,
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
const CalendraPageStack = createStackNavigator(
  {
    CalendarPage: {
      screen: CalendarPage,
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

const RegDetailsStack = createStackNavigator(
  {
    RegScreenDetails: {
      screen: RegScreenDetails,
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
const LostDetailsStack = createStackNavigator(
  {
    LostScreenDetails: {
      screen: LostScreenDetails,
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

const DesignPageStack = createStackNavigator(
  {
    DesignPage: {
      screen: DesignPage,
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
  trade: {
    screen: TradeMark,
  },
});
const TradedetailsStack = createStackNavigator(
  {
    MyTradeDetailPage: {
      screen: MyTradeDetailPage,
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
const MyTradeDetailViewStack = createStackNavigator(
  {
    MyTradeDetailViewPage: {
      screen: MyTradeDetailViewPage,
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
const CopyRightStack = createStackNavigator(
  {
    CopyRightPage: {
      screen: CopyRightPage,
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
const AppStack = createDrawerNavigator(
  {
    Dashboard: HomeStackNavigator,
    TradedetailsStack: TradedetailsStack,
    MyTradeDetailViewStack: MyTradeDetailViewStack,
    CopyRightStack: CopyRightStack,
    DesignPageStack: DesignPageStack,
    PatentStack: PatentStack,
    CalendraPageStack: CalendraPageStack,
    TMSearchStack: TMSearchStack,
    RegDetailsStack: RegDetailsStack,
    LostDetailsStack: LostDetailsStack,
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
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootApp = createAppContainer(AuthStack);
export default RootApp;
