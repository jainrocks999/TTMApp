import React from 'react';
import { AsyncStorage,Linking, View, Alert, ScrollView, ActivityIndicator,Share, Text, Picker, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
 import Icon from "react-native-vector-icons/Ionicons";
var serverurl='http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/';
//import LanguagesString from '../Config/Languages';

export default class MyDrawer extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            name: '',
            mobile: '',
            Number:'',
           // pimage: require('../images/user.png'),
            currentpage: '',
        }
    }
    getprofile = () => {
     this.props.navigation.navigate('Profile');
   }
    renderDrawerItem = (route) => {
        const onpress = (route.key === 'Logins') 
                     ?() => AsyncStorage.clear().then(p => this.props.navigation.navigate(route.key))
                     :(route.key === 'logout') 
                     ? () => this.Logout()
                     :() => {
                         this.setState({currentpage: route.key})
                         this.props.navigation.navigate(route.key)
                         AsyncStorage.getItem('NAME')
                        .then(Name => {
                            this.setState({ name: Name })
                            Alert
                        })
                        AsyncStorage.getItem('contact_number')
                        .then(number => {
                            this.setState({ Number: number })
                        })
                        AsyncStorage.getItem('Profile_Image')
                        .then(pi => {
                            console.log(pi)
                            if(pi){
                                this.setState({ pimage:{uri: 'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/'+pi}})
                            }
                        })
                        }
        return (
            <TouchableOpacity onPress={onpress} style={{ flexDirection: 'row', padding: 8, marginLeft: 10, marginRight: 10,alignItems:'center' }}>
                <Image source={route.icon}></Image>
                <Text style={{ padding: 8, marginLeft: 10, marginRight: 10, fontSize: 16}}>{route.label}</Text>
            </TouchableOpacity>
            
        )
    }



    componentDidMount() {
        AsyncStorage.getItem('NAME')
            .then(Name => {
                this.setState({ name: Name })
                Alert
            })
            AsyncStorage.getItem('contact_number')
            .then(number => {
                this.setState({ Number: number })
            })
            AsyncStorage.getItem('Profile_Image')
            .then(pi => {
                console.log(pi)
                if(pi){
                    this.setState({ pimage:{uri: 'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/'+pi}})
                }
            })
    }
    setlog =()=>{
        AsyncStorage.clear();
        AsyncStorage.setItem('USER_ID','')
       // LanguagesString.setLanguage('en')
        this.props.navigation.navigate('Other')
    }
    sharefb = () => {
        Linking.openURL('https://www.facebook.com/chandrakar.ajay/');
    }
    shareTwitter = () => {
        Linking.openURL('https://twitter.com/chandrakar_ajay?lang=en');
    }
    Logout = () => {
        Alert.alert(
            'Are you want to logout ?',
            [
             {text: 'Cancel', onPress: () =>{cancelable: false }, style: 'cancel'},
              {text: 'ok', onPress: () => this.setlog()},
            ],
            { cancelable: false }
          )
      // Alert.alert("Logout","Are u want to logout ?");
    }
    ShareVoter = () => {
        Linking.openURL('https://www.nvsp.in/');
        
    }
    shareinsta = () => {
        Linking.openURL('https://www.instagram.com/chandrakar_ajay/?hl=en');
    }
        
    render() {

        return (
            <ScrollView >
                <View style={{}}>

                    <View style={styles.bluebox}>
                        <TouchableOpacity
                            onPress={this.getprofile}
                            style={{flexDirection: 'row'}}>
                             <Image source={this.state.pimage} 
                             style={{width: 60, height: 60, margin:8, alignItems: 'center',borderRadius: 35}} />
                             <View style={{marginTop: 8, marginLeft: 4}}>
                             <Text style={styles.TextStyle}>{this.state.name}</Text>
                            <Text style={{color: '#278D27',fontSize: 16}}>{this.state.Number}</Text>
                            </View>
                        </TouchableOpacity>
                
                    </View>

                   
                   {this.renderDrawerItem({  label: 'logout', key: 'logout' })}
                
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        //  backgroundColor: '#fff',

    },
    bluebox: {
        width: '100%',
        height: 110,
        backgroundColor: '#F97D09',
        justifyContent: 'center'
    },
    ImageStyle: {
       // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: '40%',
        marginLeft: 10,
        height: 40,
    },
    TextStyle: {
        color: '#278D27',
        marginTop: 4,
        fontSize: 18,
    },
})