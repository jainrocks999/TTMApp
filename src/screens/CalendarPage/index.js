import React, {Component} from 'react';
import {View,FlatList, TextInput, Image, StyleSheet,Text,ScrollView,Platform,  LayoutAnimation,UIManager,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-community/async-storage';
import connection from '../../Redux/Constants';
import {connect} from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import storage from '../../config/storage';

import ExpandableItemComponent from '../../config/expendableList.js'; 
 const CONTENT = [
  {
    isExpanded: false,
    
    category_name: 'Tm No. :1252362\nTrade mark :jonne',
    subcategory: [
      {id: 1, val: 'Sajana Bore'},
      {id: 2, val: 'MAN'},
      {id: 3, val: 'KIDS'},
      {id: 4, val: 'SHOES & BAGS'},
      {id: 5, val: 'HOME'},
      {id: 6, val: 'STUDIOWEST'},
    ],
  },
  {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
  {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
  {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
  {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
  {
    isExpanded: false,
   category_name: 'Tm No. :526356\nTrade mark :Lyour ',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
];

 class CalendraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
          visible:false,
    };
   
    this.loaddata();
  }
 loaddata = async () => { 
     const {Nor,PageNo} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    console.log('bdb'+userid);
    this.props.dispatch({type:'User_Calendra_Details_Request',url:'NewTMApi/Calendar?UserId=7',token:token})
   };

  getVisible(item) {
        if (this.state.visible == false) {
            console.log('rohit12' + this.state.visible)
            this.setState({
                visible: true,
                itemValue: item.TextType
            })
        } else {
            this.setState({
                visible: false,
                itemValue: item.TextType
            })
        }
    }
   renderItemView = (item) => {
        if (this.state.visible == true) {
             if (this.state.itemValue == item.TextType) {
                return (   // "DAY": 8,
//  "Month": 7,
//  "CMonth": 7,
//  "Year": 2020,
//  "EvdDate": "08-Jul-2020",
//  "TextType": "SURCHARGE"
                   <View style={{ flexDirection: 'column',marginEnd:10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'space-between' ,alignItems: 'flex-start' }}>

                         <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 13, color: '#000',fontFamily: 'Poppins-Bold',width:'40%'  }}>DAY</Text>
        <Text style={{ fontSize: 14, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.DAY}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%' }}>Month</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.Month}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%'  }}>CMonth</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', marginLeft:10, fontFamily: 'Poppins',alignItems:'center',justifyContent:'center' }}>{item.CMonth}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold', width:'40%' }}>Year</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10, alignItems:'center',justifyContent:'center' }}>{item.Year}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold', width:'40%' }}>Evd Date</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.EvdDate}</Text>
        </View>
        </View>
                )
        } else {

        }
        } else {

        }
    
    }
 
  render() {
    const {CalendraDetails}=this.props
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
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack(null);
            }}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={{width: 24, height: 15,marginEnd:10}}
            />
          </TouchableOpacity>

          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
              }}>
              Calendar Details
            </Text>
          </View>
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
                width: 18,
                height: 18,
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
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              height: 45,
              width: '88%',
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
                width: 305,
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
              flexDirection: 'row',
              justifyContent: 'center',
              width:'12%',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
            <FlatList
                    data={CalendraDetails}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                     <View style={{ flex: 1 }}>
                            <TouchableOpacity
                            onPress={() => this.getVisible(item)}>
                       <View style={{ flexDirection: 'column',marginEnd:10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'center' ,alignItems: 'flex-start' }}>
                       <View style={{flexDirection:'row'}}>
                      <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold' ,width:'40%',alignItems:'center',justifyContent:'center'  }}>Text Type</Text>
                       <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                      <Text style={{ fontSize: 15, color: '#5A6779',fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.TextType}</Text>   
                      <Image
                    style={{height: 25, width: 25,}}
                    source={require('../../assets/icons/arrow_down.png')}
                  />    
                  </View>     
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
    CalendraDetails: state.CalendraDetails,
  };
};

export default connect(mapStateToProps)(CalendraPage);