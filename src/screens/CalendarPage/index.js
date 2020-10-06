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
import style from './style';
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
                return (  

                   <View style={styles.main}>
                    <View style={styles.textContainer}>
                    <Text style={styles.text1}>DAY</Text>
                    <Text style={styles.text2}>{item.DAY}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.text1}>Month</Text>
                    <Text style={styles.text2}>{item.Month}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.text1}>CMonth</Text>
                    <Text style={styles.text2}>{item.CMonth}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.text1}>Year</Text>
                    <Text style={styles.text2}>{item.Year}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.text1}>Evd Date</Text>
                    <Text style={styles.text2}>{item.EvdDate}</Text>
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
        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};
    return (
        <View style={{flex:1}}>
         <View
          style={styles.container}>
          <View style={styles.first}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack(null);
            }}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={styles.title}>
              Calendar Details
            </Text>
          </View>
          </View>
          <View
            style={styles.bellView}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.bell}
            />
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{width: 31, height: 31}}
              />
            </View>
          </View>
        </View>
        {/* <View
          style={styles.view1}>
          <View
            style={styles.inputContainer}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={styles.filterView}>
            <View style={styles.filter}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View> */}
            {/* <FlatList
                    data={CalendraDetails}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                     <View style={{ flex: 1 }}>
                            <TouchableOpacity
                            onPress={() => this.getVisible(item)}>
                       <View style={styles.main}>
                       <View style={{flexDirection:'row'}}>
                      <Text style={styles.type}>Text Type</Text>
                       <View style={styles.item}>
                      <Text style={styles.textType}>{item.TextType}</Text>   
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
                /> */}
               
                
               
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