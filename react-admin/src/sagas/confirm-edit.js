import { put, call, takeEvery } from 'redux-saga/effects';
import { confirmEditUserFetch } from '../actions/action-creators';

export default function* () {
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
    yield call(() => {
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
