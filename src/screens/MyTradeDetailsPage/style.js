import { StyleSheet } from 'react-native';
import Color from '../../common/Colors';
export default styles=StyleSheet.create({
 menu:{
    backgroundColor: Color.white,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  my:{
    fontSize: 22,
    textAlign: 'center',
  },
  main:{
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
    width: '100%',
    backgroundColor: Color.white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon:{
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: 45,
    width: '88%',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  view:{
    backgroundColor: 'transparent',
    height: 42,
    width: 305,
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
  tmView:{
    flexDirection: 'column',
    marginEnd: 10,
    elevation: 10,
    margin: 10,
    backgroundColor:Color.fa,
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
  tText:{
    fontSize: 16,
    color:Color.black,
    fontFamily: 'Poppins-Bold',
    marginTop: 4,
  },
  view1:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  trade:{
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
    text:{
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
        color:Color.black,
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