import React from 'react';
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import Loader from '../../component/Loader';
import { connect } from 'react-redux';
import styles from './styles';

class TradeMark extends React.Component{
    constructor(props){
        super(props)
        this.state={
            navigateTo:props.navigation.getParam('navigateTo'),
            isFetching:false
        }
    }
    call=()=>{
        const {navigateTo} = this.state;
        this.props.dispatch({type:'TMApi_Request'}) 
     }
    render(){
        return(
            <View style={styles.container}>
            <ActivityIndicator size={"large"}/>
            <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={this.call}>
                <Text>CallApi</Text>
            </TouchableOpacity>
            </View>
         </View>
        )
    }
}
const mapStateToProps=(state)=>{
      return{
          isFetching:state.isFetching,
      }
    }
    
export default connect(mapStateToProps)(TradeMark)