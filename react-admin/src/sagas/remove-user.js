import { call, takeEvery } from 'redux-saga/effects';
import { updateUsersAsync } from './update-users';
import { REMOVE_USER } from "../actionTypes/action-types";

export default function* () {
  yield takeEvery(REMOVE_USER, rmUserAsync);
}

function* rmUserAsync(data) {
  let status;
  try {
    yield call(() => {
        return fetch(`http://localhost:3000/users/${data.payload.id}`, {method: 'delete'})
          .then(res => status = res.status);
      }
    );
    if (status === 200) {
      alert('The user was removed!');
      yield data.payload.push('/');
      yield updateUsersAsync();
    } else {
      console.error(status);
    }
  } catch (error) {
    console.error(error);
  }
}
