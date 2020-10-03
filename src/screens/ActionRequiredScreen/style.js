import {StyleSheet} from 'react-native';
import Color from '../../common/Colors';
export default style= StyleSheet.create({
  container: {flex: 1},
  header:{
    backgroundColor: 'white',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  go:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  arrow:{
    width: 24, 
    height: 15, 
    marginEnd: 10
  },
  action:{
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 10,
  },
  bellView:{
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
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: Color.white,
  },
  own:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginVertical: 10,
  },
  text:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  text1:{
    fontSize: 16, 
    fontFamily: 'Poppins',
     marginTop: 6}
});
