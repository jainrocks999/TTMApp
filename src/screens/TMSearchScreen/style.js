import { StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default styles=StyleSheet.create({
    container:{
        backgroundColor: Color.whiteGrey,
        flex: 1
        },
    second:{
        backgroundColor:Color.white,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icon:{
        paddingLeft: 1, 
        color: Color.black
    },
    tm:{
        fontWeight:'bold',
        fontSize:22,
        marginLeft:6
    },
    noti:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:30,
        height:30,
        marginRight:10
    },
    profile:{
        borderWidth:1,
        borderRadius:15
    },
    input:{
        borderWidth:1,
        width:'100%',
        borderRadius:10,
        marginTop:10,
        height:40,
        paddingRight:10
    },
    goods:{
        borderWidth:1,
        width:'100%',
        borderRadius:10,
        marginTop:10,
        height:40,
        paddingRight:10
    },
    button:{
        backgroundColor:Color.same,
        borderRadius:20,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    
    }
})