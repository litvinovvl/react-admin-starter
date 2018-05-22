import { put, call, takeEvery } from 'redux-saga/effects';
import { loginFetch, loginFailed } from "../actions/action-creators";
import { LOGIN } from "../actionTypes/action-types";

export default function* () {
  yield takeEvery(LOGIN,loginAsync);
}

function* loginAsync(data) {
  let userData = {login: data.payload.querySelector('input[type=text]').value, password: data.payload.querySelector('input[type=password]').value};
    try {
    let serverUserData = yield call(() => {
        return fetch(`http://localhost:3000/login/`)
          .then(res => res.json());
      }
    );
    if(serverUserData[0].login === userData.login && serverUserData[0].password === userData.password) {
      yield put(loginFetch());
    } else {
      yield put(loginFailed());
    }
  } catch (error) {
    console.error(error);
  }
}
