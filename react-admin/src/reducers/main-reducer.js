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
      return {...state, pending: false, users: action.payload};

    case START_LOADING:
      return {...state, pending: true};

    case SWITCH_POPUP:
      return {...state, popup: !state.popup};

    case EDIT_USER:
      return {...state, editing: true};

    case RESET_EDITING:
      return {...state, editing: false};

    case CONFIRM_EDIT_USER_FETCH:
      let i;
      let tmp = state.users.find((user, index) => {
        i = index;
        return user.id === Number(action.payload.id)
      });
      Object.assign(tmp, action.payload.tmpUser);
      let newUsers = state.users;
      newUsers[i] = tmp;
      return {...state, editing: false, users: newUsers};

    case LOGIN_SWITCH:
      return {...state, isLogged: !state.isLogged, loginFailed: false};

    case LOGIN_FAILED:
      return {...state, loginFailed: true};

    default:
      return state;
  }
};
