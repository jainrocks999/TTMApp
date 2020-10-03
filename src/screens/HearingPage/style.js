import { StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default styles=StyleSheet.create({
    container:{ 
        flexDirection: 'column',
        marginEnd:10, 
        margin: 10,
        backgroundColor: Color.fa,
        borderRadius: 8, 
        padding:10, 
        marginBottom: 4,
        justifyContent:'space-between',
        alignItems: 'flex-start' 
    },
    main:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        marginTop:8
    },
    full:{ 
        fontSize: 13, 
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        width:'40%'  
    },
    item1:{ 
        fontSize: 14, 
        color: Color.twxt, 
        fontFamily: 'Poppins', 
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
     },
    container1:{
        backgroundColor:Color.white,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    icon:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bell:{
        width: 22,
        height: 22,
        marginRight: 15,
        justifyContent: 'center',
      },
      main1:{
        backgroundColor: Color.white,
        padding: 12,
         width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      main2:{
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        height: 45,
        width: '88%',
        alignItems: 'center',
        backgroundColor: Color.white,
      },trans:{
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
      filter:{
        flexDirection: 'row',
        justifyContent: 'center',
        width:'12%',
        alignItems: 'center',
      },
      view:{ 
          flexDirection: 'column',
          marginEnd:10, 
          elevation: 2, 
          margin: 10,
          backgroundColor: Color.fa, 
          borderRadius: 8, 
          padding:10, 
          marginBottom: 4,
          justifyContent:'center' ,
          alignItems: 'flex-start' 
        },
      view1:{
          flexDirection:'row',
          flex:1,
          justifyContent:'flex-start'
        },
      title:{ 
          fontSize: 14, 
          color: Color.black,
          fontFamily: 'Poppins-Bold' ,
          width:'40%',
          alignItems:'center',
          justifyContent:'center'  
        },
      item:{ 
          fontSize: 15, 
          color: Color.twxt,
          fontFamily: 'Poppins',
          marginLeft:10,
          alignItems:'center',
          justifyContent:'center' 
        },
      second:{
          flexDirection:'row',
          flex:1,
          justifyContent:'space-between',
          marginTop:8
        },
       work:{ 
          fontSize: 14, 
          color: Color.black,
          fontFamily: 'Poppins-Bold' ,
          width:'40%',
          alignItems:'center',
          justifyContent:'center'  
        },
       item2:{ 
          fontSize: 15, 
          color: Color.twxt,
          fontFamily: 'Poppins', 
          marginLeft:10,
          alignItems:'center',
          justifyContent:'center' 
        }
})