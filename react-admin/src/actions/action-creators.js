export const loadUsers = (params) => {
  return { type: 'LOAD_USERS', payload: params }
};

export const loadUsersFetch = (data) => {
  return { type: 'LOAD_USERS_FETCH', payload: data }
};

export const rmUser = (id, push) => {
  return { type: 'REMOVE_USER', id, push }
};

export const updateUsers = () => {
  return { type: 'UPDATE_USERS' }
};

export const startLoading = () => {
  return { type: 'START_LOADING' }
};

export const switchUserPopup = () => {
  return { type: 'SWITCH_POPUP' }
};

export const submitNewUser = (data) => {
  return { type: 'ADD_USER', payload: data }
};

export const editUser = () => {
  return { type: 'EDIT_USER' }
};

export const confirmEditUser = (data) => {
  return { type: 'CONFIRM_EDIT_USER', payload: data }
};

export const confirmEditUserFetch = (id, data) => {
  return { type: 'CONFIRM_EDIT_USER_FETCH', payload: [id, data] }
};

export const resetEditing = () => {
  return { type: 'RESET_EDITING' }
};

export const login = (data) => {
  return { type: 'LOGIN', payload:data }
};

export const loginFetch = () => {
  return { type: 'LOGIN_SWITCH' }
};

export const loginFailed = () => {
  return { type: 'LOGIN_FAILED' }
};
