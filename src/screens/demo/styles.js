import { StyleSheet } from 'react-native';
export default StyleSheet.create({
       container:{
           flex:1
       },
       back:{
           width: '100%', 
           height: '100%', 
           flex: 1
        },
        dot:{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          },
        pagination:{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          },
        image:{
            borderRadius: 15, 
            width: '97%', 
            marginTop: 5
        }
})