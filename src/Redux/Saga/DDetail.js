import React,{Component} from 'react';
import {Alert} from 'react-native';
import {takeEvery,put,call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../Constants';
import { StackActions ,NavigationActions} from 'react-navigation';
import qs from 'qs';

function* getDDetail(action){
    try{
   console.log('api'+Api.fetchDataByGet)
    const p = yield call(Api.fetchDataByGET,action.url,data)
    console.log('kapil'+p.data)
   if(p.data == ''){
    yield put({
        type:'DDetail_Success',
        payload:p.data
    })
     AsyncStorage.setItem(Constants.token, p.data)

if(action.navigateTo){
    const resetAction = StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({routeName:action.navigateTo})],
    });
    action.navigate.dispatch(resetAction);
   }else{
        const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'more' })],
              });
              action.navigation.dispatch(resetAction);
            }
        } else {
            console.log(p.data)
            Alert.alert(
                'Explored',
                p.data.error_description,
                [
                    {text:'Ok',style:'cancel',onPress:()=>console.log('Cancel Pressed')}
                ]
            )
            yield put({
                type:'CRDetail_Error',
            }) 
        }
       
    } catch (error) {
        console.log(error)
      
        yield put({
            type:'DDetail_Error',
        }) 
    }  
}
export default function* authSaga(){
    yield takeEvery('DDetail_Request',getDDetail)

}         
