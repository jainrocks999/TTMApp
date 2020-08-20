import React from 'react';
import { View,StatusBar,Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
class CRDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            navigateTo:props.navigation.getParam('navigateTo'),
            isFetching:false
        }
    }
    call=()=>{
        const {navigateTo} = this.state;
        this.props.dispatch({type:'CRDetail_Request'}) 
     }
    render(){
        return(
            <View style={{flex:1}}>
               <ActivityIndicator size={"large"}/>
               <View style={styles.view}>
               <TouchableOpacity style={styles.button} onPress={this.call}>
                   <Text>CallApi</Text>
               </TouchableOpacity>
               </View>
               <StatusBar
      backgroundColor="#fff"
      barStyle='dark-content'
    />
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log('CRDetail data'+JSON.stringify(state.isFetching))
      return{
          isFetching:state.isFetching,
      }
    }
    
export default connect(mapStateToProps)(CRDetail)