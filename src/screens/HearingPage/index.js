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

 class HearingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        expanded: false,
          listDataSource: CONTENT,
          PageNo:'1',
          Nor:'10',
          visible:false,
      images: [
        require('../../assets/images/yogi.png'),
        require('../../assets/images/pppp.png'),
        require('../../assets/images/logo.png'),
        require('../../assets/images/logo.png'),
      ],
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.loaddata();
  }
 loaddata = async () => {
     const {Nor,PageNo} = this.state;
    let userid = await AsyncStorage.getItem(storage.UserID);
    let token = await AsyncStorage.getItem(storage.Token);
    this.props.dispatch({type:'User_CopyRight_Request',url:'/NewTMApi/CRDetail?UserId=7&PageNo=1&Nor=10&search=',token:token})
   };


updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };
  getVisible(item) {
        if (this.state.visible == false) {
            console.log('rohit12' + this.state.visible)
            this.setState({
                visible: true,
                itemValue: item.Id
            })
        } else {
            this.setState({
                visible: false,
                itemValue: item.Id
            })
        }
    }
   renderItemView = (item) => {
        if (this.state.visible == true) {
            if (this.state.itemValue == item.Id) {
                return (
                   <View 
                   style={styles.container}>
         <View 
         style={styles.main}>
        <Text style={styles.full}>Full Prop Name</Text>
        <Text style={styles.item1}>{item.FullPropName}</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.full}>Dairy No</Text>
        <Text style={styles.item1}>{item.Dairy_No}</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.full}>APPpro Office</Text>
        <Text style={styles.item1}>Delhi</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.full}>Journal No.</Text>
        <Text style={styles.item1}>1990-20</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.full}>Vaild Upto</Text>
        <Text style={styles.item1}>17/11/2020</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.full}>Class</Text>
        <Text style={styles.item1}>30</Text>
        </View>
         </View>
                )
            } else {

            }
        } else {

        }
    
    }
 
  render() {
    const {CopyRight}=this.props
    return (
        <View style={{flex:1}}>
         <View
          style={styles.container1}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{width: 20, height: 15}}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
              }}>
              {'My Trade Details'}
            </Text>
          </View>
          <View
            style={styles.icon}>
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
        <View
          style={styles.main1}>
          <View
            style={styles.main2}>
            <View style={{}}>
              <Icon1 name="search" size={25} style={{marginLeft: 5}} />
            </View>
            <View
              style={styles.trans}>
              <TextInput
                style={styles.input}
                placeholder={'Tm search ...'}
              />
            </View>
          </View>

          <View
            style={styles.filter}>
            <View style={{alignItems: 'center', marginLeft: 10}}>
              <Icon name="filter" size={35} />
            </View>
          </View>
        </View>
     <FlatList
         data={CopyRight}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) =>
      <View style={{ flex: 1 }}>
      <TouchableOpacity
      onPress={() => this.getVisible(item)}>

      <View style={styles.view}>
        <View style={styles.view1}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.item}>{item.Title}</Text>             
        </View>
        <View style={styles.second}>
        <Text style={styles.work}>Work</Text>
        <Text style={styles.item2}>{item.Work}</Text>             
        </View>
        </View>
      </TouchableOpacity>
           {this.renderItemView(item)}
           </View>
           }/>     
        </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    Hearing: state.Hearing,
  };
};

export default connect(mapStateToProps)(HearingPage);