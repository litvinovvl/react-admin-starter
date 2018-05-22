import { put, call, takeEvery } from 'redux-saga/effects';
import { loadUsersFetch } from '../actions/action-creators';
import { LOAD_USERS } from "../actionTypes/action-types";

export default function* () {
  yield takeEvery(LOAD_USERS, loadUsersAsync);
}

function* loadUsersAsync(params) {
  let field, value, query;
  if(params.payload) {
    if(params.payload.querySelector('select').value && params.payload.querySelector('input[type=text]').value){
      switch (params.payload.querySelector('select').value.toLowerCase()) {
        case 'surname':
          field = 'lastName';
          break;
        case 'name':
          field = 'firstName';
          break;
        default:
          field = params.payload.querySelector('select').value.toLowerCase();
          break;
      }
      value = params.payload.querySelector('input[type=text]').value;
      query = `${field}=${value}`;
    } else {
      query = '';
    }
  }
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
