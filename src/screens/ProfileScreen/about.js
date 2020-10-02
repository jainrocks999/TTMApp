import React from 'react';
import {View, Image, TouchableOpacity, Text,Alert,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";
import storage from '../../config/storage';
import Color from '../../common/Colors';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName:'',
      spinner:true,
      isVisible:false,
      isPhoneVisible: false,
      isLocationVisible:false,
      phone:'987654321',
      location:'Bucharest,Romania'
          }}      //  spinner: true,
          tmdata = name => {
            if (name == 'Application') {
               this.setState({
                isPhoneVisible: true,
               });
             } else if (name == 'Upcoming') {
               this.setState({
                isLocationVisible: true,
               });
             } else {
               this.setState({
                 isVisible: true,
               });
             }
           };
    componentDidMount=()=>{
      this.readData()
    }
   readData = async () => {
      try {
        const userAge = await AsyncStorage.getItem(storage.UserName)
        if (userAge !== null) {
          this.setState({UserName:userAge})
          
        }
      } catch (e) {
        Alert.alert('Failed to fetch the data from storage')
      }
    }     
   render() {

    console.log(this.state.UserName)
    return (
      <View
        style={styles.container}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={{color: 'grey'}}>Name </Text>
          <Text style={styles.text}>{this.state.UserName}</Text>
          </View>
          <View
            style={styles.view}>
            <View>
              <Text style={{color: 'grey'}}>Phone </Text>
              <Text style={styles.text}>987654321</Text>
            </View>
            <TouchableOpacity  onPress={() => this.tmdata()}>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.textView}>
            <View>
              <Text style={{color: 'grey'}}>Location </Text>
              <Text style={styles.text}>
                Bucharest, Romania
              </Text>
            </View>
            <TouchableOpacity  onPress={() => this.tmdata()}>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
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
              <View
                style={styles.view1}>
                <View
                  style={styles.view2}>
                 <TextInput 
                   value={this.state.phone}
                   editable={true}
                 style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                  <Text>Save</Text>
                </TouchableOpacity>
                </View>
                
              </View>
          
          </View>
          </Modal>
          <Modal
          isVisible={this.state.isVisible}
          onSwipeComplete={() => this.setState({isVisible: false})}
          swipeDirection="right"
          onBackdropPress={() => this.setState({isVisible: false})}>
                      <View
            style={{width: '100%', borderRadius: 10, backgroundColor: '#fff'}}>
           
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    padding:10,
                    width: '99%',
                    height:100
                  }}>
                 <TextInput 
                   value={this.state.location}
                   editable={true}
                 style={{width:'100%',height:'50%',backgroundColor:'#fff'}}/>
                <TouchableOpacity style={{alignSelf:'flex-end',marginTop:16}}>
                  <Text>Save</Text>
                </TouchableOpacity>
                </View>
                
              </View>
          
          </View>
          </Modal>
      </View>
    );
          }}
  const styles=StyleSheet.create({
      container:{
        backgroundColor: Color.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
      },
      view:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textView:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      text:{
        marginBottom: 10, 
        marginTop: 5
      },
      modal:{
        width: '100%', 
        borderRadius: 10, 
        backgroundColor: Color.white
      },
      view1:{
        justifyContent: 'center',
        marginTop: 4,
        alignItems: 'center',
      },
      view2:{
        padding:10,
        width: '99%',
        height:100
      },
      input:{
        width:'100%',
        height:'50%',
        backgroundColor:Color.white
      },
      button:{
        alignSelf:'flex-end',
        marginTop:16
      }
  })
