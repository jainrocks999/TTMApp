import React, {Component} from 'react';
import {View, StyleSheet,Text,ScrollView,Platform,  LayoutAnimation,UIManager,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-community/async-storage';
import connection from '../../Redux/Constants';
import {connect} from 'react-redux';
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

 class CopyRightPage extends Component {
static navigationOptions = ({ navigation }) => ({
        headerTitle: 'My Trade Details',
       // drawerLabel: 'Details',
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#fff',
         
        },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Icon name="md-menu"
              style={{ marginLeft: 10 }} size={30} color="#000" />
          </TouchableOpacity>
        ),
      })

  constructor(props) {
    super(props);
    this.state = {
        expanded: false,
          listDataSource: CONTENT,
          PageNo:'1',
          Nor:'10',
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
    console.log('bdb'+userid);
    this.props.dispatch({type:'User_CopyRight_Request',url:'/NewTMApi/CRDetail?UserId='+userid+'&PageNo=1&Nor=10&search=',token:token})
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
// <ScrollView style={{ flex: 1}}>
//     //     {CopyRight.map((item, key) => (
//     //         <View style={{flex:1,padding:4}}>
//     //           <ExpandableItemComponent
//     //             key={item.Title}
//     //             onClickFunction={this.updateLayout.bind(this, key)}
//     //             item={item}
//     //             style={{fontsize:10,padding:10}}
//     //              onclickview={()=>this.props.navigation.navigate('MyTradeDetailViewStack')}
//     //           >
//     //           </ExpandableItemComponent>
//     //       </View>
//     //         ))}
//     //         </ScrollView>

 
  render() {
    const {CopyRight}=this.props
    return (
        <View style={{flex:1}}>
     <FlatList
                    data={CopyRight}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                       <View style={{ flexDirection: 'column',marginEnd:10, elevation: 10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'space-between' ,alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'column', marginBottom: 4,justifyContent:'center' }}>
        <Text style={{ fontSize: 16, color: '#000', fontFamily: 'Poppins-Bold',marginTop:4}}>T.M. No :996866222</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
        <Text style={{ fontSize: 13, color: '#000',fontFamily: 'Poppins-Bold', alignItems:'center',justifyContent:'center' }}>Title</Text>
        <Text style={{ fontSize: 14, color: '#000',alignItems:'center',justifyContent:'center' }}>{item.Title}</Text>             
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:20}}>
        <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold' ,width:'40%',alignItems:'center',justifyContent:'center'  }}>Work</Text>
        <Text style={{ fontSize: 15, color: '#5A6779',fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.Work}</Text>             
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold',width:'40%'  }}>Full Prop Name</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.FullPropName}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%' }}>Dairy No</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>{item.Dairy_No}</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%'  }}>APPpro Office</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', marginLeft:10, fontFamily: 'Poppins',alignItems:'center',justifyContent:'center' }}>Delhi</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold', width:'40%' }}>Journal No.</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10, alignItems:'center',justifyContent:'center' }}>1990-20</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold', width:'40%' }}>Vaild Upto</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>17/11/2020</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%'  }}>Class</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>30</Text>
        </View>
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
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(CopyRightPage);