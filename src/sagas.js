import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import axios from 'axios'
/*
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Запускаем `fetchUser` на каждое задиспатченное действие `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

*/

import {actionUserFetchSuccess, actionUserFetchError} from './actions'


const API_USER = 'https://api.randomuser.me/';

function fetchUserApi(){

  console.log('fetchUserApi')

  return axios(API_USER)

}


// WORKER
function *fetchUser(){
	try {

		//const user = yield call(Api.fetchUser, action.payload.id);
		//const user = yield call(() => {console.log('is api call')}, 1);
    //console.log('fetchUser()')

    const user = yield call(fetchUserApi)

    // console.log('user: ',user.data.results)

		// yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      const data = user.data.results[0]
      
      yield put(actionUserFetchSuccess(data))
      		  
     // yield put({type: "USER_FETCH_SUCCEEDED", user: {id: data.id.value, name: data.name.last}})

	} catch(e) {

		  yield put(actionUserFetchError(e.message))

	}
}

// WACHER
function* mySaga() {

	console.log('mySaga.USER_FETCH_REQUESTED')

  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);

}

export default mySaga;
