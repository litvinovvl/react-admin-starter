import { call, takeEvery } from 'redux-saga/effects';
import { updateUsersAsync } from './update-users';

export default function* () {
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
