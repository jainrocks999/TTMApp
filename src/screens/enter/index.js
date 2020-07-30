import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';


import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { floor } from 'react-native-reanimated';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class EnterScreen extends React.Component{

    static navigationOptions = {
        title: 'Hearing',
        tabBarIcon: ({ tintColor }) => (
            <Image
            style={{ height: 25, width: 25, tintColor: 'white' }}
            source={require('../../assets/icons/plus.png')}
            
            />
            )};
            render(){
                return(
                    <View>
                    <Icon
                            style={{ paddingLeft:10, color: 'black' }}
                            onPress={() => this.props.navigation.toggleDrawer()}
                            name="menu"
                            size={30}
                        />
                        <Text>Enter Screen</Text>
                    </View>
                )
            }
}