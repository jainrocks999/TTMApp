import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        marginTop: 20
    },
    img:{
        width: wp('60%'), 
        height:hp('50%')
    },
    fbimg:{
        width: wp('5%'),
        height: hp('8%'),
        marginRight: 10,
    },
    get: {
        fontWeight: 'normal',
        fontFamily: 'Poppins',
        fontSize: 20
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90
    },
    facebook: {
        backgroundColor: '#f6f8f9',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 10,
        height: 18,
        marginRight: 10
    },
    google: {
        backgroundColor: '#f6f8f9',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    email: {
        backgroundColor: '#5f85e5',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 35
    },
    ext: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    login: {
        width: 17,
        height: 18,
        marginRight: 10
    },
    touch: {
        paddingHorizontal: 80,
        marginTop: 40
    }

})