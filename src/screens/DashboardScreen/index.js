import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CardView from 'react-native-cardview';
import styles from './style';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Modal from 'react-native-modal';

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
   constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
           
            //  spinner: true,
        }
    
    }
tmdata=()=>{
  this.setState({
    isVisible:true
  })
}

  render() {
    return (
      <View style={{backgroundColor: '#f6f8f9', flex: 1}}>
           <View style={{backgroundColor:'white',padding:12,flexDirection:'row',justifyContent:'space-between'}}>
             <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
          
          
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems: 'center',}}>
              <Image source={require('../../assets/icons/bell_one.png')} style={{width:18,height:18,marginRight:10,justifyContent:'center'}}/>
              <View style={{alignItems:'center'}}>
              <Image source={require('../../assets/icons/profile.png')} style={{width:31,height:31}}/>
              </View>
            </View>
           </View>
          <ScrollView style={{paddingHorizontal: 10, flex: 1,marginTop:15}}>
           
            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity onPress={()=>this.tmdata()}
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/tm_new.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:52,backgroundColor:'#f8fbf5', marginTop:40,padding:8,borderRadius:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:14}}>
                       Trademark
                     </Text>
                     <Text style={{color:"#000",fontFamily:'Poppins',fontSize:12}}>23</Text>
                    </View>
                </TouchableOpacity>
              </View>

              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/copyright_new.png')}
                      resizeMode={'stretch'}
                    />

                      <View style={{width:'100%',height:52,backgroundColor:'#fffcf7', marginTop:40,padding:8,borderRadius:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:14}}>
                       Copyright
                     </Text>
                     <Text style={{color:"#000",fontFamily:'Poppins',fontSize:12}}>23</Text>
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
                      source={require('../../assets/icons/design.png')}
                      resizeMode={'stretch'}
                    />

                      <View style={{width:'100%',height:52,backgroundColor:'#fff8f4', marginTop:40,padding:8,borderRadius:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:14}}>
                       Design
                     </Text>
                     <Text style={{color:"#000",fontFamily:'Poppins',fontSize:12}}>23</Text>
                    </View>
                </TouchableOpacity>
              </View>

              <View
                style={styles.secondView}>
                <TouchableOpacity
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/Patent_New.png')}
                      resizeMode={'stretch'}
                    />

                   <View style={{width:'100%',height:52,backgroundColor:'#f4f6fb', marginTop:40,padding:8,borderRadius:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:14}}>
                       Patent
                     </Text>
                     <Text style={{color:"#000",fontFamily:'Poppins',fontSize:12}}>23</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={styles.firstView}>
              <View
                style={styles.secondView}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('TMSearchStack')}
                  style={styles.touchTm}>
                  <Image
                      style={styles.copyImage}
                      source={require('../../assets/icons/Rs_new.png')}
                      resizeMode={'stretch'}
                    />

                    <View style={{width:'100%',height:52,backgroundColor:'#f8f7ff', marginTop:40,padding:8,borderRadius:10}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:14}}>
                       Request for
                     </Text>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold',fontSize:12}}>
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
                      source={require('../../assets/icons/calendra_new.png')}
                      resizeMode={'stretch'}
                    />
                    <View style={{width:'100%',height:52,backgroundColor:'#f8f7ff', marginTop:40,padding:8,borderRadius: 10,
}}>
                     <Text style={{fontWeight:'normal',fontFamily:'Poppins-SemiBold'}}>
                       Calendar
                     </Text>
                     <Text style={{color:"#000",fontFamily:'Poppins'}}>23</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
            <Modal isVisible={this.state.isVisible}
            onSwipeComplete={() => this.setState({isVisible: false})}
  swipeDirection="right"
  onBackdropPress={() => this.setState({isVisible: false})}
            >
                        <View style={{ width: '100%', borderRadius: 10, backgroundColor: '#fff' }}>
                            <ScrollView style={{ margin: 4, padding: 4 }}>
                                <View style={{ justifyContent: 'center', marginTop: 4, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold',fontFamily:'Poppins-SemiBold', color: '#000', alignItems: 'center' }}>Trademark</Text>
 <View style={{flexDirection:'row',width:'99%',marginTop:24, justifyContent: 'space-between',}}>
 <View
                style={styles.secondView1}>
                <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/trade_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       My Trade
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Marks</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.secondView1}>
                <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/tm_popup_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Similar Trade
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Marks</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.secondView1}>
                 <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/book_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Change Data
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Log Book</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
             <View style={{flexDirection:'row',width:'99%', justifyContent: 'space-between',}}>

             <View
                style={styles.secondView1}>
                 <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/hearing_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Hearings
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Marks</Text>
                    </View>
                </TouchableOpacity>
              </View>
           <View
                style={styles.secondView1}>
                 <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/timer_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Lapsed
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>opposition</Text>
                    </View>
                </TouchableOpacity>
              </View>
             <View
                style={styles.secondView1}>
                <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/open_timer.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Lapsed
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Renewal</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            <View style={{flexDirection:'row',width:'99%', justifyContent: 'space-between',}}>

             <View
                style={styles.secondView1}>
                 <TouchableOpacity
                  style={styles.touchTm}>
                   <View style={{justifyContent:'center',alignItems:'center', padding:4,borderRadius:10}}>
                     <Image
                      style={styles.popupIcon}
                      source={require('../../assets/icons/similar_new.png')}
                     resizeMode={'stretch'}
                    />
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>
                       Foreign
                     </Text>
                     <Text style={{color:'#000',fontFamily:'Poppins',fontSize:12}}>Details</Text>
                    </View>
                </TouchableOpacity>
              </View>
          
            
            </View>
        
                      
                        
                            </ScrollView>
                        </View>
                    </Modal>
        <StatusBar
      backgroundColor="#fff"
      barStyle='dark-content'
    />
      </View>
    );
  }
}
class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcomming',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={styles.tabImage}
        source={require('../../assets/icons/upcoming.png')}
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
        style={styles.tabImage}
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
        style={styles.tabImage}
        source={require('../../assets/icons/action.png')}
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
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      labelStyle: {
      fontFamily:'Poppins',
      justifyContent: 'space-between',
      

        fontSize: 11,
      },
      style: {
        backgroundColor: '#FFFFFF',
      
      },
    },
  },
);

export default Navegador;
