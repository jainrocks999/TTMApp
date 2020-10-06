import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    spreate: {
        height: 1,
        backgroundColor:'black',
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    
        //  backgroundColor: '#fff',
      },
      bluebox: {
        width: '100%',
        height: 110,
        backgroundColor: '#F97D09',
        justifyContent: 'center',
      },
      ImageStyle: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: '40%',
        marginLeft: 10,
        height: 40,
      },
      TextStyle: {
        color: '#278D27',
        //marginTop: 4,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
      },

})