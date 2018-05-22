import { put, call, takeEvery } from 'redux-saga/effects';
import { switchUserPopup } from '../actions/action-creators';
import { updateUsersAsync } from './update-users';

export default function* () {
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
          .then(res => res.json());
      }
    );
    yield put(switchUserPopup());
    yield updateUsersAsync();
  } catch (error) {
    console.error(error);
  }
}
