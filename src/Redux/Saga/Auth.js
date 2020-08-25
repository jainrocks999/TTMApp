import React,{Component} from 'react';
import {Alert} from 'react-native';
import {takeEvery,put,call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../../config/storage';
import { StackActions ,NavigationActions} from 'react-navigation';
import qs from 'qs';


function* DoToken(action){
    console.log('token api check'+action.usermail)

    const data =JSON.stringify({
        User_Name:action.usermail,
        Password:action.password,
    });
    const p=yield call(Api.fetchDataByPOST,action.url,data)
    console.log('token'+p.data)
    if(p.data !== ''){
        yield put({
            type:'User_Token_Success',
            payload:p.data
        })
         AsyncStorage.setItem(Constants.Token, p.data)
    }else{
        Alert.alert(p.data)
 yield put({
            type:'User_Token_Error',
        }) 
}

}

function* doLogin(action){
    console.log('ka'+action)
    const data = JSON.stringify({
     User_Name: action.Email,
     Password: action.Password,
     Company_Name: 'BRAND',
    });
    const p = yield call(Api.fetchDataByPOST,action.url,data,action.token)
    console.log('kapil'+ p.Status)
    console.log('kapil'+JSON.stringify(p.data))
    console.log('kapil'+ p.Status)
   if(p.Status == true){
    yield put({
        type:'User_Login_Success',
        payload:p.data.data
    })
  
     AsyncStorage.setItem(Constants.UserID,JSON.stringify(p.data.UserID))
     AsyncStorage.setItem(Constants.UserName, p.data.UserName)
}else{
Alert.alert(p.message)
 yield put({
            type:'User_Login_Error',
        }) 
}

       
}

function* doRegister(action){
    try{
    const data = JSON.stringify({
    UserId:action.UserId,
    firstname:action.firstname,
    lastname:action.lastname,
    email: action.email,
    company:action.company,
    state :action.state,
    city:action.city,
    pincode:action.pincode,
    address:action.address,
    NationalCode:"+91",
    Phone:action.Phone,
    CountryId:action.CountryId,
    Company_Name:action.Company_Name 
    });
    console.log('dadada'+data)
    console.log('api'+action.url)
   // console.log('api'+Api.fetchDataByPOST)
    const p = yield call(Api.fetchDataByPOST,action.url,data)
    console.log('kapil'+p.data)
   if(p.data == ''){
    yield put({
        type:'User_Register_Success',
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
                type:'User_Register_Error',
            }) 
        }
       
    } catch (error) {
        console.log(error)
      
        yield put({
            type:'User_Register_Error',
        }) 
    }  
}
export default function* authSaga(){
      yield takeEvery('User_Token_Request',DoToken)
    yield takeEvery('User_Login_Request',doLogin)
    yield takeEvery('User_Register_Request',doRegister)
  
}         

// export default function* authSaga(){
//     yield takeEvery('Fetch_TourData_Request',fetchTourData)
//     yield takeEvery('Fetch_User_Request',fetchUser)
//     yield takeEvery('Fetch_Profile_Request',fetchProfile)
//     yield takeEvery('User_Register_Request',doRegister)
//     yield takeEvery('Influencer_Register_Request',doInfluencerRegister)
//     yield takeEvery('Business_Register_Request',doBusinessRegister)
//     yield takeEvery('PhotoG_Register_Request',doPhotoGRegister)
//     yield takeEvery('Taxi_Register_Request',doTaxiRegister)
//     yield takeEvery('User_Login_Request',doLogin)
//     yield takeEvery('Change_Password_Request',changePassword)
//     yield takeEvery('Set_ProfileEmpty_Request',setProfileEmpty)
//     yield takeEvery('Set_ProfilPic_Request',setProfilePic)
//     yield takeEvery('Fetch_Bookings_Request',fetchBookings)
//     yield takeEvery('Remove_FcmToken_Request',unsetFcm)
// }