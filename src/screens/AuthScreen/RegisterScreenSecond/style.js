import {StyleSheet} from 'react-native';
import Color from '../../../common/Colors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  register: {
    fontWeight: 'normal',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 8,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    paddingRight: 19,
  },
  image: {
    width: 350,
    height: 225,
  },

  spinnerTextStyle: {
    color: Color.white,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    borderColor:Color.borderColor,
    width: '100%',
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent:'center',
   
  },
  inputt: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  input1: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'center',
  },

  inputContainer1: {
    marginVertical: 4,
    width: '48%',
  },
  input2: {
    borderColor:Color.borderColor,
    borderWidth: 1,
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 5,
    height: 40,
  },
  password: {
    width: 30,
    height: 22,
    alignSelf: 'center',
    marginRight: 10,
  },
  font: {},
  button: {
    backgroundColor:Color.blue,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  nextButton: {
    backgroundColor:Color.nextButton,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 43,
  },
  exit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  please: {
    color:Color.please,
    marginTop:-8,
  },
  view:{
    flex: 1, 
    padding: 14, 
    backgroundColor: Color.white
  },
  arrow:{
    width: 20, 
    height: 15, 
    color:Color.grey
  },
  countryView:{
    flexDirection: 'row', 
    justifyContent: 'space-between'}
});