import { StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default styles=StyleSheet.create({
    header:{
        backgroundColor: Color.white,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      arrow:{
        width: 24, 
        height: 15, 
        marginEnd: 10
    },
    details:{
        fontSize: 22,
        textAlign: 'center',
        marginLeft: 10,
      },
    view:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    image:{
        width: 22,
        height: 22,
        marginRight: 15,
        justifyContent: 'center',
      },
    first:{
        flexDirection: 'column',
        marginEnd: 10,
        elevation: 10,
        margin: 10,
        backgroundColor: Color.fa,
        borderRadius: 8,
        padding: 10,
        marginBottom: 4,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      tm:{
        flexDirection: 'column',
        marginBottom: 4,
        justifyContent: 'center',
      },
      tmText:{
        fontSize: 16,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        marginTop: 4,
      },
      mark:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
      },
      trademark:{
        fontSize: 13,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        alignItems: 'center',
        justifyContent: 'center',
      },
      liy:{
        fontSize: 14,
        color: Color.black,
        alignItems: 'center',
        justifyContent: 'center',
      },
      status:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20,
      },
      status1:{
        fontSize: 14,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      reg:{
        fontSize: 15,
        color: Color.twxt,
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      same:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 8,
      },
      same1:{
        fontSize: 14,
        color: Color.black,
        fontFamily: 'Poppins-Bold',
        width: '40%',
      },
      same2:{
        fontSize: 15,
        color: Color.twxt,
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }
})