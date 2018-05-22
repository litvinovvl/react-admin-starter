import { put, call, takeEvery } from 'redux-saga/effects';
import { loadUsersFetch } from '../actions/action-creators';
import { LOAD_USERS } from "../actionTypes/action-types";

export default function* () {
  yield takeEvery(LOAD_USERS, loadUsersAsync);
}

function* loadUsersAsync(data) {
  let query = data.payload;
  console.log(query);
  try {
    const data = yield call(() => {
        return fetch(`http://localhost:3000/users?${query}`)
          .then(res => res.json())
      }
    );
    yield put(loadUsersFetch(data));
  } catch (error) {
    console.error(error);
  }
}
