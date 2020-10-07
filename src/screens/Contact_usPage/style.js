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
   
    firstView: {
        borderTopStartRadius:20,
        borderRadius:10,
        margin:10,
        borderWidth:1,
        paddingVertical: 8,
    },
    menu: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menu2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        textAlignVertical: 'center',
        marginLeft: 20,
        fontSize: 22,
        color:'black',
        fontFamily: 'Poppins-Bold',
    },
    second: {
        textAlignVertical: 'center',
        marginLeft: 20,
        fontSize: 20,
        color:'gray',
        fontFamily: 'Poppins-SemiBold',
    },
    third: {
        textAlignVertical: 'center',
        marginLeft: 20,
        fontSize: 18,
        padding:4,
        color:'gray',
        fontFamily: 'Poppins-thin',
    },
    bell: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellIcon: {
        width: 22,
        height: 22,
        marginRight: 15,
        justifyContent: 'center',
    },
    scroll: {
        paddingHorizontal: 10,
        flex: 1,
        marginTop: 15
    },
    tv: {
        width: '100%',
        height: 52,
       // backgroundColor: Color.bc1,
        marginTop: 40,
        padding: 8,
        borderRadius: 10,
    },
    mainTitle: {
        fontWeight: 'normal',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
    },
    count: {
       // color: Color.count,
        fontFamily: 'Poppins',
        fontSize: 12,
    },
    popup: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    popup1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        padding: 10,
    },
    textTitle: {
        fontSize: 12,
        padding: 4,
        textAlign: 'center'
    },
    modal: {
        width: '100%',
        borderRadius: 10,
    },
    popupView: {
        justifyContent: 'center',
        marginTop: 4,
        alignItems: 'center',
    },
    popupText: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
       // color: Color.white,
        alignItems: 'center',
    },
    bottom: {
        flexDirection: 'row',
        width: '99%',
        marginTop: 24,
        justifyContent: 'space-between',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 10,
    },
    text1: {
       // color: Color.black,
        fontFamily: 'Poppins',
        fontSize: 12,
    },
    text2: {
       // color: Color.black,
        fontFamily: 'Poppins',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        width: '99%',
        justifyContent: 'space-between',
    },
    row1: {
        flexDirection: 'row',
        width: '99%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    upcomming: {
        flexDirection: 'row',
        width: '99%',
        marginTop: 12,
        justifyContent: 'space-evenly',
    },
    status: {
        flexDirection: 'row',
        width: '99%',
        marginTop: 10,
        justifyContent: 'space-around',
    },
    statusView: {
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fbimg: {
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