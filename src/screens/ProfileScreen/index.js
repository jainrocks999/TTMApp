import React,{useState,useEffect} from 'react';
import {View, Image, TouchableOpacity, Text,StyleSheet,Alert} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import About from './about';
import Setting from './setting';
import RootApp from '../../navigation';
import {createAppContainer} from 'react-navigation';
import pickImages from '../../component/pickImage';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../config/storage';

const ProfileScreen=(props)=>{
  const [pickImage,photoUri,photo]=pickImages()
  const [age, setAge] = useState('')
  
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem(storage.UserName)
     
       
      if (userAge !== null) {
        setAge(userAge)
      }
    } catch (e) {
      Alert.alert('Failed to fetch the data from storage')
    }
  }
  useEffect(() => {
    readData()
  }, [])
    return (
      <View
        style={styles.main}>
        <View
          style={styles.second}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack(null);
            }}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Text
              style={styles.pText}>
              Profile Settings
            </Text>
          </View>
        </View>
        <View
          style={styles.view1}>
          <View
            style={styles.view2}>
            {!photo?<Image source={require('../../assets/images/p1.jpg')} style={styles.image}/>:<Image
              style={styles.image}
              source={photo}
            />}
            
          </View>
          <TouchableOpacity  onPress={pickImage}
            style={styles.camera}>
            <Image
              style={styles.cameraImage}
              source={require('../../assets/icons/camera.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={styles.title}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{age}</Text>
        </View>
        <RootNav />
       
      </View>
    );
  }

const TabNavigator = createMaterialTopTabNavigator(
  {
    About: {
      screen: About,
    },
    Setting: {
      screen: Setting,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'grey',
      color: '#000',
      backgroundColor: '#000',
      style: {
        marginLeft: 20,
        marginTop: 50,
        fontSize: 14,
        color: 'black',
        backgroundColor: 'transparent',
      },
      indicatorStyle: {
        backgroundColor: '#FF8F6B',
      },
    },
  },
);
export default ProfileScreen;

const RootNav = createAppContainer(TabNavigator);
const styles=StyleSheet.create({
  main:{
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
  },
  second:{
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow:{
    width: 24,
    height: 15,
    marginEnd: 10,
    tintColor: 'black',
  },
  pText:{
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  view1:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 30,
  },
  view2:{
    backgroundColor: '#F2F1F5',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    height: 170,
    width: 170,
  },
  image:{
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  camera:{
    marginLeft: -20,
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#FF8F6B',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  cameraImage:{
    height: 25,
    width: 25,
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  title:{
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  }
})