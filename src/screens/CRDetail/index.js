import React from 'react';
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
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
    console.log('CRDetail data'+JSON.stringify(state.isFetching))
      return{
          isFetching:state.isFetching,
      }
    }
    
export default connect(mapStateToProps)(CRDetail)