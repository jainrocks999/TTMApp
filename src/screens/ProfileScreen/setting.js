import React,{useState} from 'react';
import {View, Image, TouchableOpacity, Text,Switch,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
  const ProfileScreen =()=>{

    const [name, setName] = useState('Ram sharma');
    const [mobile, setMobile] = useState(987654321);
    const [location, setLocation] = useState('Bucharest, Romania');
    const [isEnabled, setIsEnabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          paddingLeft: 20,
          paddingRight: 10,
        }}>
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
            <Text style={{marginBottom: 10, marginTop: 5}}>{name}</Text>
            
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'grey'}}>Phone </Text>
              <Text style={{marginBottom: 10, marginTop: 5}}>{mobile}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                setIsVisible({ visible: true });
              }}>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
            </TouchableOpacity>
          </View>
         
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'grey'}}>Location </Text>
              <Text style={{marginBottom: 10, marginTop: 5}}>
               {location}
              </Text>
            </View>
            <Text style={{color: '#FF8F6B'}}>Edit</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'grey'}}>Recent Notifications</Text>
              <Text style={{marginBottom: 10, marginTop: 5}}>
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