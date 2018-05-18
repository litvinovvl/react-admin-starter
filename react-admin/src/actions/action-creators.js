export const loadUsers = () => {
  return { type: 'LOAD_USERS' }
};

export const loadUsersFetch = (data) => {
  return { type: 'LOAD_USERS_FETCH', payload: data }
};
