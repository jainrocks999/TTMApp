import {  StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    button:{
        backgroundColor:'red',
        padding:20
    },
    container:{
        backgroundColor:Color.white ,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    first:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
        },
    arrow:{
        width: 24, 
        height: 15,
        marginEnd:10
        },
    title:{
        fontSize: 20,
        textAlign: 'center',
      },
    bellView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    bell:{
        width: 18,
        height: 18,
        marginRight: 15,
        justifyContent: 'center',
      },
    view1:{
        backgroundColor: 'white',
        padding: 12,
         width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    inputView:{
        backgroundColor: 'transparent',
        height: 42,
        width: 305,
        borderLeftWidth: 0.5,
        marginLeft: 5,
      },
      input:{
        backgroundColor: 'transparent',
        height: 42,
        width: '100%',
      },
    filterView:{
        flexDirection: 'row',
        justifyContent: 'center',
        width:'12%',
        alignItems: 'center',
      },
      filter:{
          alignItems: 'center', 
          marginLeft: 10
        },
    main:{ 
          flexDirection: 'column',
          marginEnd:10, 
          margin: 10,
          backgroundColor: Color.fa, 
          borderRadius: 8, 
          padding:10, 
          marginBottom: 4,
          justifyContent:'center' ,
          alignItems: 'flex-start' 
        },
    textContainer:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-between',
      marginTop:8
    },
    text1:{ 
      fontSize: 13, 
      color: Color.black,
      fontFamily: 'Poppins-Bold',
      width:'40%'  
    },
    text2:{ 
      fontSize: 14, 
      color: Color.twxt, 
      fontFamily: 'Poppins', 
      marginLeft:10,
      alignItems:'center',
      justifyContent:'center' 
    },
    inputContainer:{
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      height: 45,
      width: '88%',
      alignItems: 'center',
      backgroundColor: Color.white,
    },
    type:{ 
      fontSize: 14, 
      color: Color.black,
      fontFamily: 'Poppins-Bold' ,
      width:'40%',
      alignItems:'center',
      justifyContent:'center'  
    },
    item:{
      flexDirection:'row',
      justifyContent:'space-between',
      flex:1
    },
    textType:{ 
      fontSize: 15, 
      color:Color.twxt,
      fontFamily: 'Poppins', 
      marginLeft:10,
      alignItems:'center',
      justifyContent:'center' 
    }
})