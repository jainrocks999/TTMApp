import React from 'react';
import { View, Text, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class ShareScreen extends React.Component{

    static navigationOptions = {
        title: 'Hearing',
        tabBarIcon: ({ tintColor }) => (
            <Image
            style={styles.image}
            source={require('../../assets/icons/plus.png')}/>    
        )};
        render(){
        return(
            <View>    
                <Icon
                    style={styles.icon}
                    onPress={() => this.props.navigation.toggleDrawer()}
                    name="menu"
                    size={30}/>
                <Text>Share Screen</Text>
            </View>
        )
    }
}