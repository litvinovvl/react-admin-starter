import { fork } from 'redux-saga/effects';
import loadUsersSaga from './load-users';
import rmUserSaga from './remove-user';
import updateUsersSaga from './update-users';
import addUserSaga from './add-user';
import confirmEditSaga from './confirm-edit';
import login from './login';

export default function* () {
  yield [
    fork(loadUsersSaga),
    fork(rmUserSaga),
    fork(updateUsersSaga),
    fork(addUserSaga),
    fork(confirmEditSaga),
    fork(login)
  ];
}
