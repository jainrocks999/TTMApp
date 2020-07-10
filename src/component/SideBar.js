import React from 'react'
import { Text, StyleSheet, ImageBackground, Image, View } from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Icons} from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

export default Sidebar = props =>(
    <ScrollView>
        <ImageBackground 
        source={require('../assets/icons/bg_image.png')}
        style={{width:undefined,padding:16,paddingTop:48}}
        >

            <Image source={require('../assets/icons/profile.png')} style={styles.profile} />
            <Text style={styles.name}>Kashish</Text>

        </ImageBackground>
        <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:'blue'
    },
    name:{
        color:'red',
        fontSize:12,
        fontWeight:'800',
        marginVertical:8
    }

});
