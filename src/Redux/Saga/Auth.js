import React, {Component} from 'react';
import {Alert} from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../../config/storage';
import {StackActions, NavigationActions} from 'react-navigation';
import qs from 'qs';

function* DoToken(action) {
  const data = JSON.stringify({
    User_Name: action.usermail,
    Password: action.password,
  });
  const p = yield call(Api.fetchDataByPOST, action.url, data);

  if (p.data !== '') {
    yield put({
      type: 'User_Token_Success',
      payload: p.data,
    });
    AsyncStorage.setItem(Constants.Token, p.data);
  } else {
    Alert.alert(p.data);
    yield put({
      type: 'User_Token_Error',
    });
  }
}

function* DoDesign(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  if (p.Status == true) {
    yield put({
      type: 'User_Design_details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Design_Details_Error',
    });
  }
}

function* DoCopyRight(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);

  if (p.Status == true) {
    yield put({
      type: 'User_CopyRight_Success',
      payload: p.data,
    });

    // AsyncStorage.setItem(Constants.UserID,JSON.stringify(p.data.UserID))
    // AsyncStorage.setItem(Constants.UserName, p.data.UserName)
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_CopyRight_Error',
    });
  }
}

function* DoCalendra(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  if (p.Status == true) {
    yield put({
      type: 'User_Calendra_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Calendra_Details_Error',
    });
  }
}
//Registered Api function
function* DoRegisterd(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  //const p = yield call (Api.fetchDataByGET,action.url,action.token)
  if (p.Status == true) {
    console.log('staus' + p.Status);
    console.log('staus' + JSON.stringify(p.data));
    yield put({
      type: 'User_Registered_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Registered_Details_Error',
    });
  }
}

//Litigation Api function
function* DoLitigation(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  //const p = yield call (Api.fetchDataByGET,action.url,action.token)
  console.log('DOLitigation sbs     ' + JSON.stringify(p));
  if (p.Status == true) {
    console.log('staus' + p.Status);
    console.log('staus' + JSON.stringify(p.data));
    yield put({
      type: 'User_Litigation_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Litigation_Details_Error',
    });
  }
}

//Lost Api function
function* DoLost(action) {
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  //const p = yield call (Api.fetchDataByGET,action.url,action.token)
  if (p.Status == true) {
    console.log('staus' + p.Status);
    console.log('staus' + JSON.stringify(p.data));
    yield put({
      type: 'User_Lost_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Lost_Details_Error',
    });
  }
}

//Patent Api Function
function* DoPatent(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_Patent_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Patent_Details_Error',
    });
  }
}

//Pending Api Function
function* DoPending(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_Pending_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Pending_Details_Error',
    });
  }
}

//ApplicationStatus Api Function
function* DoApplicationStatus(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_ApplicationStatus_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_ApplicationStatus_Details_Error',
    });
  }
}

//Proprieter Api Function
function* DoProprieter(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_Proprieter_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Proprieter_Details_Error',
    });
  }
}

//MyTrademark Api Function
function* DoMyTrademark(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_MyTrademark_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_MyTrademark_Details_Error',
    });
  }
}

//LapsedRenewal Api Function
function* DoLapsedRenewal(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_LapsedRenewal_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_LapsedRenewal_Details_Error',
    });
  }
}

//Opposition Api Function
function* DoOpposition(action) {
  console.log('copy cdcdcd' + action.url);
  const p = yield call(Api.fetchDataByGET, action.url, action.token);
  console.log('copy' + p.Status);
  console.log('copy' + JSON.stringify(p.data));
  console.log('copy' + p.Status);
  if (p.Status == true) {
    yield put({
      type: 'User_Opposition_Details_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Opposition_Details_Error',
    });
  }
}

//Login
function* doLogin(action) {
  const data = JSON.stringify({
    User_Name: action.Email,
    Password: action.Password,
    Company_Name: 'BRAND',
  });
  const p = yield call(Api.fetchDataByPOST, action.url, data, action.token);
  console.log('login ----------- ' + JSON.stringify(p));
  if (p.Status == true) {
    yield put({
      type: 'User_Login_Success',
      payload: p.data.data,
    });
    console.log('dataaaa' + JSON.stringify(p.data));
    AsyncStorage.setItem(Constants.UserID, JSON.stringify(p.data.UserID));
    AsyncStorage.setItem(Constants.UserName, p.data.UserName);
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Login_Error',
    });
  }
}

function* doRegister(action) {
  try {
    const data = JSON.stringify({
      UserId: action.UserId,
      firstname: action.firstname,
      lastname: action.lastname,
      email: action.email,
      company: action.company,
      state: action.state,
      city: action.city,
      pincode: action.pincode,
      address: action.address,
      NationalCode: '+91',
      Phone: action.Phone,
      CountryId: action.CountryId,
      Company_Name: action.Company_Name,
    });

    const p = yield call(Api.fetchDataByPOST, action.url, data);

    if (p.data == '') {
      yield put({
        type: 'User_Register_Success',
        payload: p.data,
      });
      AsyncStorage.setItem(Constants.token, p.data);

      if (action.navigateTo) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: action.navigateTo})],
        });
        action.navigate.dispatch(resetAction);
      } else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'more'})],
        });
        action.navigation.dispatch(resetAction);
      }
    } else {
      Alert.alert('', p.data.error_description, [
        {
          text: 'Ok',
          style: 'cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]);
      yield put({
        type: 'User_Register_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'User_Register_Error',
    });
  }
}
export default function* authSaga() {
  yield takeEvery('User_Token_Request', DoToken);
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_CopyRight_Request', DoCopyRight);
  yield takeEvery('User_Design_Details_Request', DoDesign);
  yield takeEvery('User_Calendra_Details_Request', DoCalendra);
  yield takeEvery('User_Patent_Details_Request', DoPatent);
  yield takeEvery('User_Registered_Details_Request', DoRegisterd);
  yield takeEvery('User_Litigation_Details_Request', DoLitigation);
  yield takeEvery('User_Lost_Details_Request', DoLost);
  yield takeEvery('User_Pending_Details_Request', DoPending);
  yield takeEvery('User_MyTrademark_Details_Request', DoMyTrademark);
  yield takeEvery(
    'User_ApplicationStatus_Details_Request',
    DoApplicationStatus,
  );
  yield takeEvery('User_Proprieter_Details_Request', DoProprieter);
  yield takeEvery('User_LapsedRenewal_Details_Request', DoLapsedRenewal);
  yield takeEvery('User_Opposition_Details_Request', DoOpposition);
}
