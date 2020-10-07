import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex: 1, 
        padding: 10, 
        backgroundColor: 'white'
    },
    first:{
        alignItems: 'center',
        marginTop: 20,
    },
    get:{
        fontWeight: 'normal',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    },
    image:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
    },
    image:{
        width: 340, 
        height: 250
    },
    touchView:{
        paddingHorizontal: 80,
        marginTop: 40,
    },
    touch:{
        backgroundColor: '#eef1f4',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fb:{
        width: 10,
        height: 18,
        marginRight: 10,
    },
    ggl:{
        backgroundColor: '#eef1f4',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gglImage:{
        width: 17,
        height: 18,
        marginRight: 10,
    },
    sign:{
        backgroundColor: '#5f85e5',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 35,
    },
    exist:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    }
})