import {
  CONFIRM_EDIT_USER_FETCH, EDIT_USER,
  LOAD_USERS_FETCH, LOGIN_FAILED, LOGIN_SWITCH,
  RESET_EDITING,
  START_LOADING,
  SWITCH_POPUP
} from "../actionTypes/action-types";

export const initialState = {loginFailed: false, isLogged: false, pending: true, popup: false, editing: false, users: []};

export default function (state = initialState, action) {
  switch (action.type) {

    case LOAD_USERS_FETCH:
      return Object.assign({}, state, {pending: false, users: action.payload});

    case START_LOADING:
      return Object.assign({}, state, {pending: true});

    case SWITCH_POPUP:
      return Object.assign({}, state, {popup: !state.popup});

    case EDIT_USER:
      return Object.assign({}, state, {editing: true});

    case RESET_EDITING:
      return Object.assign({}, state, {editing: false});

    case CONFIRM_EDIT_USER_FETCH:
      let i;
      let tmp = state.users.find((user, index) => {
        i = index;
        return user.id === Number(action.payload[0])
      });
      Object.assign(tmp, action.payload[1]);
      let newUsers = state.users;
      newUsers[i] = tmp;
      return Object.assign({}, state, {editing: false, users: newUsers});

    case LOGIN_SWITCH:
      return Object.assign({}, state, {isLogged: !state.isLogged, loginFailed: false});

    case LOGIN_FAILED:
      return Object.assign({}, state, {loginFailed: true});

    default:
      return state;
  }
};
