import {StyleSheet} from 'react-native';
import Color from '../../common/Colors';
export default StyleSheet.create({
  container:{
    backgroundColor: Color.white,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  arrowp:{
    width: 24, 
    height: 15, 
    marginEnd: 10
  },
  status:{
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
  card:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Color.white,
    marginTop: 10,
  },
  touch:{
    paddingVertical: 5,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  touchView:{
    flexDirection:'row',
    alignItems:'center'
  },
  png:{
    width:26,
    height:26,
    marginRight:10
  },
  title:{
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 6,
  },
  view:{
    marginTop: -10,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  view1:{
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor:Color.white,
  },
  view2:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text:{
    fontSize: 13,
    color: Color.black,
    fontFamily: 'Poppins-Bold',
    width: '40%',
  },
  item:{
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
  toucha:{
    backgroundColor:Color.blue,
    borderRadius: 5,
    padding: 4,
    width: '30%',
    borderRadius: 10,

    right: 10,
    bottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  more:{
    color: Color.white, 
    fontSize: 14
  }
});
