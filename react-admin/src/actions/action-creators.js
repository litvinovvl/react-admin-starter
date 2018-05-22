import {
  ADD_USER, CONFIRM_EDIT_USER, CONFIRM_EDIT_USER_FETCH, EDIT_USER,
  LOAD_USERS,
  LOAD_USERS_FETCH, LOGIN, LOGIN_FAILED, LOGIN_SWITCH,
  REMOVE_USER, RESET_EDITING,
  START_LOADING,
  SWITCH_POPUP,
  UPDATE_USERS
} from "../actionTypes/action-types";

import { createAction } from 'redux-actions';

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersFetch = createAction(LOAD_USERS_FETCH);
export const updateUsers = createAction(UPDATE_USERS);
export const startLoading = createAction(START_LOADING);
export const switchUserPopup = createAction(SWITCH_POPUP);
export const submitNewUser = createAction(ADD_USER);
export const editUser = createAction(EDIT_USER);
export const confirmEditUser = createAction(CONFIRM_EDIT_USER);
export const resetEditing = createAction(RESET_EDITING);
export const login = createAction(LOGIN);
export const loginFetch = createAction(LOGIN_SWITCH);
export const loginFailed = createAction(LOGIN_FAILED);
export const rmUser = createAction(REMOVE_USER);
export const confirmEditUserFetch = createAction(CONFIRM_EDIT_USER_FETCH);
