import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import Loader from '../../config/loader';

class DashBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      isVisible: false,
      isVisibleAction: false,
      isVisibleApplication: false,
      isVisibleStatus: false,
      isVisibleUpcoming: false,
      
    };
    this.loaddata();
  }
  
    loaddata = async () => {

    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    this.props.dispatch({
      type: 'User_Dashboard_Request',
      url:'NewTMApi/Dashboard?UserId=122',
      token: token,
    });
    
  };
  tmdata = name => {
    if(name == 'MyTradeMark'){
      this.setState({
        isVisible: true,
      });
    }else if (name == 'Application') {
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
    const {DashboardDetails,isFetching}=this.props
    return (
      <View style={styles.container}>
        {isFetching ? <Loader /> : null}
        <View
          style={styles.menu}>
          <View
            style={styles.menu2}>
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
              style={styles.title}>
              {'Dashboard'}
            </Text>
          </View>
          <View
            style={styles.bell}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.bellIcon}
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
        <ScrollView style={styles.scroll}>
          <View style={styles.firstView}>
            <View style={styles.secondView}>
              <TouchableOpacity
                onPress={() => this.tmdata(DashboardDetails.MyTradeMarkName)}
                style={styles.touchTm}>
                <Image
                  style={styles.copyImage}
                  source={require('../../assets/Image/trademark2x.png')}
                  resizeMode={'stretch'}
                />
                <View
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    {DashboardDetails.MyTradeMarkName}
                  </Text>
                  <Text
                    style={styles.count}>
                    {DashboardDetails.MyTradeMarkCount}
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
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    {DashboardDetails.CopyRightName}
                  </Text>
                  <Text
                    style={styles.count}>
                    {DashboardDetails.CopyRightCount}
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
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    {DashboardDetails.DesignName}
                  </Text>
                  <Text
                    style={styles.count}>
                    {DashboardDetails.DesignCount}
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
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    Patent
                  </Text>
                  <Text
                    style={styles.count}>
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
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    Request for
                  </Text>
                  <Text
                    style={styles.count}>
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
                  style={styles.tv}>
                  <Text
                    style={styles.mainTitle}>
                    Calendar
                  </Text>
                  <Text style={styles.count}>
                    23
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={styles.popup}>
          <View
            style={styles.popup1}>
            <TouchableOpacity
              // onPress={() => this.tmdata('status')}
              onPress={() => {
                this.props.navigation.navigate('Status',{
                  Applicaticount:DashboardDetails.Total_ApplicationsCount,
                  ProprietorsCount:DashboardDetails.ProprietorsCount,
                });
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/Image/Status_icon.png')}
              />
              <Text style={styles.textTitle}>
                Status
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={styles.popup1}>
            <TouchableOpacity
              onPress={() => this.tmdata('Upcoming')}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/upcoming.png')}
              />
              <Text
                style={styles.textTitle}>
                Upcoming Hearing
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.popup1}>
            <TouchableOpacity
              onPress={() => this.tmdata('Application')}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/total.png')}
              />
              <Text
                style={styles.textTitle}>
                Total Application
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.popup1}>
            <TouchableOpacity
              //onPress={() => this.tmdata('Action')}
              onPress={() => {
                this.props.navigation.navigate('ActionRequiedPage',{
                  Proceeding_CertificateCount:DashboardDetails.Proceeding_CertificateCount,
                  Renewal_ProceedingCount:DashboardDetails.Renewal_ProceedingCount,
                  Certificate_of_RegistrationCount:DashboardDetails.Certificate_of_RegistrationCount,
                  Proposed_OppositionCount:DashboardDetails.Proposed_OppositionCount,
Intimation_Of_Notice_Of_PublicationCount:DashboardDetails.Intimation_Of_Notice_Of_PublicationCount,
Proposed_RectificationCount:DashboardDetails.Proposed_RectificationCount,
                
                });
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={styles.tabImage}
                source={require('../../assets/icons/action.png')}
              />
              <Text
                style={styles.textTitle}>
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
            style={styles.modal}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={styles.popupView}>
                <Text
                  style={styles.popupText}>
                  Trademark
                </Text>
                <View
                  style={styles.bottom}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('MyTradeDetailPage', {
                          btnValue: 'MyTrademark',
                        })
                      }>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          My Trade
                        </Text>
                        <Text
                          style={styles.text2}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          Similar Trade
                        </Text>
                        <Text
                          style={styles.text2}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/IconAwesomeBook2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          Change Data
                        </Text>
                        <Text
                          style={styles.text2}>
                          Log Book
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={styles.row}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/hearing2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          Hearings
                        </Text>
                        <Text
                          style={styles.text2}>
                          Marks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondView1}>
                    <TouchableOpacity style={styles.touchTm}>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Icon_ionic_ios_timer2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          Lapsed
                        </Text>
                        <Text
                          style={styles.text2}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Icon_open_timer2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
                          Lapsed
                        </Text>
                        <Text
                          style={styles.text2}>
                          Renewal
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={styles.row}>
                <View style={styles.secondView1}>
                  <TouchableOpacity style={styles.touchTm}>
                    <View
                      style={styles.imageContainer}>
                      <Image
                        style={styles.popupIcon}
                        source={require('../../assets/Image/commerce2x.png')}
                        resizeMode={'stretch'}
                      />
                      <Text
                        style={styles.text1}>
                        Foreign
                      </Text>
                      <Text
                        style={styles.text2}>
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
            style={styles.modal}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={styles.popupView}>
                <View
                  style={styles.row1}>
                 
                  <Text
                    style={styles.popupText}>
                    Upcoming Hearing
                  </Text>
                </View>
                <View
                  style={styles.upcomming}>
                      <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Own',
                        })
                      }>
                      <View
                        style={styles.imageContainer}>
                        <View>
                          <Image
                            style={styles.popupIcon}
                            source={require('../../assets/icons/Own.png')}
                            resizeMode={'stretch'}
                          />
                        </View>
                        <Text
                          style={styles.text1}>
                          {'Own'}
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Similar1.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Opposition.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Post.Reg.Hearing.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
            style={styles.modal}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={styles.popupView}>
                {/* //yeha pr dismiss ka iocn add kr dena  */}
                <View
                  style={styles.row1}>
                  <Text
                    style={styles.popupText}>
                    Application
                  </Text>
                </View>
                <View
                  style={styles.upcomming}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Registered',
                        })
                      }>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Registered.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Lost.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Litigation.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/icons/Pending.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.te1}>
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
            style={styles.modal}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={styles.popupView}>
                <View
                  style={styles.row1}>
                  <Text
                    style={styles.popupText}>
                    Action Required
                  </Text>
                </View>
                <View
                  style={styles.upcomming}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Own',
                        })
                      }>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.te1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
            style={styles.modal}>
            <ScrollView style={{margin: 4, padding: 4}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={styles.statusView}>
                  <Text
                    style={styles.popupText}>
                    Status
                  </Text>
                </View>
                <View
                  style={styles.status}>
                  <View style={styles.secondView1}>
                    <TouchableOpacity
                      style={styles.touchTm}
                      onPress={() =>
                        this.props.navigation.navigate('RegScreenDetails', {
                          btnValue: 'Applications',
                        })
                      }>
                      <View
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/Group2x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
                        style={styles.imageContainer}>
                        <Image
                          style={styles.popupIcon}
                          source={require('../../assets/Image/trademark_22x.png')}
                          resizeMode={'stretch'}
                        />
                        <Text
                          style={styles.text1}>
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
  return {
    isFetching: state.isFetching,
    DashboardDetails:state.DashboardDetails,
  };
};
export default connect(mapStateToProps)(DashBoardPage);