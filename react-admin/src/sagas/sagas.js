import {put, call, takeEvery} from 'redux-saga/effects';
import { loadUsersFetch, startLoading, switchUserPopup, confirmEditUserFetch } from '../actions/action-creators';

export function* loadUsersSaga() {
  yield takeEvery('LOAD_USERS', loadUsersAsync);
}

function* loadUsersAsync() {
  try {
    const data = yield call(() => {
        return fetch('http://localhost:3000/users')
          .then(res => res.json())
      }
    );
    yield put(loadUsersFetch(data));
  } catch (error) {
    console.error(error);
  }
}
//------------------------------------------------------------------------------------------------//
export function* rmUserSaga() {
  yield takeEvery('REMOVE_USER', rmUserAsync);
}

function* rmUserAsync(data) {
  let status;
  try {
    yield call(() => {
        return fetch(`http://localhost:3000/users/${data.id}`, {method: 'delete'})
          .then(res => status = res.status);
      }
    );
    if (status === 200) {
      alert('The user was deleted!');
      yield data.push('/');
      yield updateUsersAsync();
    } else {
      console.error(status);
    }
  } catch (error) {
    console.error(error);
  }
}
//------------------------------------------------------------------------------------------------//
export function* updateUsersSaga() {
  yield takeEvery('UPDATE_USERS', updateUsersAsync);
}

function* updateUsersAsync() {
  yield put(startLoading());
  try {
    const data = yield call(() => {
        return fetch('http://localhost:3000/users')
          .then(res => res.json())
      }
    );
    yield put(loadUsersFetch(data));
  } catch (error) {
    console.error(error);
  }
}
//------------------------------------------------------------------------------------------------//
export function* addUserSaga() {
  yield takeEvery('ADD_USER', addUserAsync);
}

function* addUserAsync(data) {

  let newUser = {
    "firstName": data.payload.name,
    "lastName": data.payload.surname,
    "age": data.payload.age,
    "visits": 0,
    "progress": 0,
    "status": data.payload.status
  };
  try {
    yield call(() => {
        return fetch('http://localhost:3000/users/', {
          method: 'POST', body: JSON.stringify(newUser), headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
        })
          .then(res => console.log(res.status));
      }
    );
    yield put(switchUserPopup());
    yield updateUsersAsync();
  } catch (error) {
    console.error(error);
  }
}
//------------------------------------------------------------------------------------------------//
export function* confirmEditSaga() {
  yield takeEvery('CONFIRM_EDIT_USER', confirmEditAsync);
}

function* confirmEditAsync(data) {
  let status;
  let id = data.payload.children[0].querySelector('span').innerText;

  data = data.payload.children;
  data = Array.prototype.slice.call(data).splice(1, data.length);
  data = data.map(node => node.querySelector('input').value);

  let tmpUser = {
    "firstName": data[0],
    "lastName": data[1],
    "age": data[2],
    "visits": data[3],
    "progress": data[4],
    "status": data[5]
  };

  try {
    const data = yield call(() => {
        return fetch(`http://localhost:3000/users/${id}`, {
          method: 'PUT', body: JSON.stringify(tmpUser), headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
        })
          .then(res => status = res.status)
      }
    );
    if(status === 200) {
      yield put(confirmEditUserFetch(id, tmpUser));
    }

  } catch (error) {
    console.error(error);
  }
}
