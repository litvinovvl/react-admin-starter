import { put, call, takeEvery } from 'redux-saga/effects';
import { loadUsersFetch, startLoading } from '../actions/action-creators';
import { UPDATE_USERS } from "../actionTypes/action-types";

export default function* () {
  yield takeEvery(UPDATE_USERS, updateUsersAsync);
}

export function* updateUsersAsync() {
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
