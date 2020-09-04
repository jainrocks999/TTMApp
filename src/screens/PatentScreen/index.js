import React, {Component} from 'react';
import {View,Image,TextInput,FlatList, StyleSheet,Text,ScrollView,Platform,  LayoutAnimation,UIManager,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import AsyncStorage from '@react-native-community/async-storage';

 class PatentPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
          visible:false,
    };
    this.loaddata()
  }
 renderItemView = (item) => {

        if (this.state.visible == true) {
            if (this.state.itemValue == item.Rowno) {
                return (
                    <View style={{ flexDirection: 'column',marginEnd:10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'space-between' ,alignItems: 'flex-start' }}>
                  <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 13, color: '#000',fontFamily: 'Poppins-Bold',width:'40%'  }}>ShortTrade Mark</Text>
        <Text style={{ fontSize: 14, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center',width:'55%' }}>{item.ShortTrade_Mark}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 13, color: '#000', fontFamily: 'Poppins-Bold',width:'40%' }}>FullTrade Mark</Text>
        <Text style={{ fontSize: 14, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center',width:'55%' }}>{item.FullTrade_Mark}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 13, color: '#000', fontFamily: 'Poppins-Bold',width:'40%'  }}>App Status</Text>
        <Text style={{ fontSize: 14, color: '#5A6779', marginLeft:10, fontFamily: 'Poppins',alignItems:'center',justifyContent:'center',width:'55%',color:'green',width:'55%' }}>{item.App_Status}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 13, color: '#000', fontFamily: 'Poppins-Bold', width:'40%' }}>Full Prop Name</Text>
        <Text style={{ fontSize: 14, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10, alignItems:'center',justifyContent:'center',width:'55%' }}>{item.FullPropName}</Text>
        </View>
      </View>
                )
            }
        }
 }
 getVisible(item) {
        if (this.state.visible == false) {
            console.log('rohit12' + this.state.visible)
            this.setState({
                visible: true,
                itemValue: item.Rowno
            })
        } else {
            this.setState({
                visible: false,
                itemValue: item.Rowno
            })
        }
    }

  loaddata = async () => {
     const {Nor,PageNo} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    console.log('bdb'+userid);
    this.props.dispatch({type:'User_Patent_Details_Request',url:'NewTMApi/DDetail?UserId=7&PageNo=1&Nor=10&search=',token:token})
   };


  render() {
const {PatentDetails}=this.props
    return (
     
        <View style={{flex:1}}>
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
           this.props.navigation.goBack(null);
            }}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={{width: 20, height: 15}}
            />
          </TouchableOpacity>

          <View style={{}}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
              }}>
              Design
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
        <View
          style={{
            backgroundColor: 'white',
            padding: 12,
             width:'100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
             width:'88%',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              height: 45,
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 42,
                width:'68%',
                borderLeftWidth: 0.5,
                marginLeft: 5,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  height: 42,
                  width: '100%',
                }}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={{
              width:'12%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
     <FlatList
                    data={PatentDetails}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                    <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.getVisible(item)}>
                       <View style={{ flexDirection: 'column',marginEnd:10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'space-between' ,alignItems: 'flex-start' }}>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:20}}>
        <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold' ,width:'40%',alignItems:'center',justifyContent:'center'  }}>App No</Text>
        <Text style={{ fontSize: 15, color: '#5A6779',fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.App_No}</Text>             
        </View>
        
      
  
        </View>
        </TouchableOpacity>

                            {this.renderItemView(item)}

                        </View>

                    }
                />
               
        </View>


    );
  }
}
const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    PatentDetails: state.PatentDetails,
  };
};
export default connect(mapStateToProps)(PatentPage);