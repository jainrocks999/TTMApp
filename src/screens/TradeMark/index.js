import React from 'react';
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import Loader from '../../component/Loader';
import { connect } from 'react-redux';

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
            <View style={{flex:1}}>
            <ActivityIndicator size={"large"}/>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <TouchableOpacity style={{backgroundColor:'red',padding:20}} onPress={this.call}>
                <Text>CallApi</Text>
            </TouchableOpacity>
            </View>
         </View>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log('TMApi data'+JSON.stringify(state.isFetching))
      return{
          isFetching:state.isFetching,
      }
    }
    
export default connect(mapStateToProps)(TradeMark)