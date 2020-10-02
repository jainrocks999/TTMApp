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
      main1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      arrow:{
          width: 24, 
          height: 15, 
          marginEnd: 10
      },
      btn:{
        fontSize: 22,
        textAlign: 'center',
        marginLeft: 10,
      },
      btnImage:{
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
      first:{
        backgroundColor: Color.white,
        padding: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      second:{
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
      filter:{
        width: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius: 10,

        padding: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,

        marginHorizontal: 20,
      },
      cardView:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      app:{
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
      },
      item:{
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        marginLeft: 20,
      },
      trade:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      text:{
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
      },
      mark:{
        fontFamily: 'Poppins',
        fontSize: 14,
        marginLeft: 20,
      },
      round:{
          height: 25, 
          width: 25, 
          marginRight: 10
        },
       product:{
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      product1:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      },
      mainView:{
        marginTop: -10,
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 20,
        backgroundColor:Color.white,
        borderRadius: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      same:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 8,
      },
      same1:{
        fontSize: 13,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        width: '40%',
      },
      same2:{
        fontSize: 14,
        color: Color.same,
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '55%',
      },
      button:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      touch:{
        backgroundColor: Color.blue,
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