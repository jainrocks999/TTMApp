import React, {Component} from 'react';
import {View,Image,TextInput,FlatList, StyleSheet,Text,ScrollView,Platform,  LayoutAnimation,UIManager,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Feather';
import ExpandableItemComponent from '../../config/expendableList.js'; 

export default class MyTradedetailsPage extends Component {
static navigationOptions = ({ navigation }) => ({
        headerTitle: 'My Trade Details',
       // drawerLabel: 'Details',
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#fff',
          size:20,
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

    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
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
            width:'100%',
            backgroundColor: 'white',
            padding: 12,
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
                    data={this.state.MappingListArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                       <View style={{ flexDirection: 'column',marginEnd:10, elevation: 10, margin: 10,backgroundColor: '#FAFAFA', borderRadius: 8, padding:10, marginBottom: 4,justifyContent:'space-between' ,alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'column', marginBottom: 4,justifyContent:'center' }}>
        <Text style={{ fontSize: 16, color: '#000', fontFamily: 'Poppins-Bold',marginTop:4}}>T.M. No :996866222</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
        <Text style={{ fontSize: 13, color: '#000',fontFamily: 'Poppins-Bold', alignItems:'center',justifyContent:'center' }}>TradeMark : </Text>
        <Text style={{ fontSize: 14, color: '#000',alignItems:'center',justifyContent:'center' }}>Liyouess</Text>             
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:20}}>
        <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold' ,width:'40%',alignItems:'center',justifyContent:'center'  }}>STATUS</Text>
        <Text style={{ fontSize: 15, color: '#5A6779',fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>Registered</Text>             
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000',fontFamily: 'Poppins-Bold',width:'40%'  }}>APP.Date</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>14-02-2020</Text>
        </View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:8}}>
        <Text style={{ fontSize: 14, color: '#000', fontFamily: 'Poppins-Bold',width:'40%' }}>TM Type</Text>
        <Text style={{ fontSize: 15, color: '#5A6779', fontFamily: 'Poppins', marginLeft:10,alignItems:'center',justifyContent:'center' }}>Colone</Text>
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

//  <ScrollView style={{ flex: 1}}>
//         {this.state.listDataSource.map((item, key) => (
//             <View style={{flex:1,padding:4}}>
//               <ExpandableItemComponent
//                 key={item.category_name}
//                 onClickFunction={this.updateLayout.bind(this, key)}
//                 item={item}
//                 style={{fontsize:10,padding:10}}
//                  onclickview={()=>this.props.navigation.navigate('MyTradeDetailViewStack')}
//               >
//               </ExpandableItemComponent>
//           </View>
//             ))}
//             </ScrollView>