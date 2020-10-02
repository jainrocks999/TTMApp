import { StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default styles=StyleSheet.create({
    main:{
        backgroundColor: Color.white,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    arrowView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    image:{
        width: 24, 
        height: 15, 
        marginEnd: 10
    },
    patent:{
        fontSize: 22,
        textAlign: 'center',
        marginLeft: 10,
      },
      bellView:{
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
      view:{
        backgroundColor: Color.white,
        padding: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      view1:{
        width: '88%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        backgroundColor: Color.white,
      },
      inputView:{
        backgroundColor: 'transparent',
        height: 42,
        width: '68%',
        borderLeftWidth: 0.5,
        marginLeft: 5,
      },
      input:{
        backgroundColor: 'transparent',
        height: 42,
        width: '100%',
      },
      filterView:{
        width: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      visible:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:Color.white,
        borderRadius: 10,
        width:'92%',
        padding: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,

        marginHorizontal: 20,
      },
      app:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      text:{
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        marginLeft: 20,
      },
      trade:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      item:{
        width:'60%',
         fontFamily: 'Poppins',
         fontSize: 14,
         marginLeft: 10,
       },
       down:{
        height: 25, 
        width: 25, 
        marginRight: 10
    },
    first:{
        marginTop: -10,
        flex: 1,
        width:'92%',
        flexDirection: 'column',
        marginHorizontal: 20,
        backgroundColor: Color.white,
        borderRadius: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      second:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 8,
      },
      status:{
        fontSize: 13,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        width: '40%',
      },
      status1:{
        fontSize: 14,
        color: Color.twxt,
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '55%',
      },
      touch:{
        backgroundColor:Color.blue ,
        borderRadius: 5,
        padding: 4,
        width: '30%',
        borderRadius: 10,

        right: 10,
        bottom: 10,
        alignItems: 'center',
        marginTop: 10,
      }
    
})