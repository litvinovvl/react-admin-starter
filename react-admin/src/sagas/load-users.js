import { put, call, takeEvery } from 'redux-saga/effects';
import { loadUsersFetch } from '../actions/action-creators';

export default function* () {
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
