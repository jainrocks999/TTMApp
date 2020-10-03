import React,{useState,useEffect} from 'react';
import {View, Image, TouchableOpacity, Text,Switch,Button,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import storage from '../../config/storage';
import AsyncStorage from "@react-native-community/async-storage";

  const ProfileScreen =()=>{

    const [mobile, setMobile] = useState(987654321);
    const [location, setLocation] = useState('Bucharest, Romania');
    const [isEnabled, setIsEnabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('')

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const readData = async () => {
      try {
        const userAge = await AsyncStorage.getItem(storage.UserName)
       
         
        if (userAge !== null) {
          setName(userAge)
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
        style={styles.container}>
          <Dialog
    visible={isVisible}
    onTouchOutside={() => {
     setIsVisible({ visible: false });
    }}
  >
    <DialogContent>
     <View style={{width:300,height:60}}>
       <TextInput value={mobile}/>
     </View>
     <Button title='save'/>
    </DialogContent>
  </Dialog>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={{color: 'grey'}}>Name </Text>
            <Text style={styles.text}>{name}</Text>
            
          </View>
          <View
            style={styles.enable}>
            <View>
              <Text style={{color: 'grey'}}>Phone </Text>
              <Text style={styles.text}>{mobile}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                setIsVisible({ visible: true });
              }}>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
            </TouchableOpacity>
          </View>
         
          <View
            style={styles.enable}>
            <View>
              <Text style={{color: 'grey'}}>Location </Text>
              <Text style={styles.text}>
               {location}
              </Text>
            </View>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
          </View>
          <View
            style={styles.enable}>
            <View>
              <Text style={{color: 'grey'}}>Recent Notifications</Text>
              <Text style={styles.text}>
               Enabled
              </Text>
            </View>
            <Switch
              trackColor={{ false: "grey", true: "#FF8F6B" }}
              thumbColor={isEnabled ? "#FF8F6B" : "grey"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
      />
          </View>
        </View>
      </View>
    );
  }
export default ProfileScreen;
const styles=StyleSheet.create({
      enable:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      text:{
        marginBottom: 10, 
        marginTop: 5
      },
      container:{
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
      }
})