export const initialState = {pending: true, popup: false, editing: false, users: []};

export default function (state = initialState, action) {
  switch (action.type) {

    case 'LOAD_USERS':
      return Object.assign({}, state);

    case 'LOAD_USERS_FETCH':
      return Object.assign({}, state, {pending: false, users: action.payload});

    case 'REMOVE_USER':
      return Object.assign({}, state);

    case 'START_LOADING':
      return Object.assign({}, state, {pending: true});

    case 'SWITCH_POPUP':
      return Object.assign({}, state, {popup: !state.popup});

    case 'ADD_USER':
      return state;

    case 'EDIT_USER':
      return Object.assign({}, state, {editing: true});

    case 'CONFIRM_EDIT_USER_FETCH':
      let i;
      let tmp = state.users.find((user, index) => {
        i = index;
        return user.id === Number(action.payload[0])
      });
      Object.assign(tmp, action.payload[1]);
      let newUsers = state.users;
      newUsers[i] = tmp;
      return Object.assign({}, state, {editing: false, users: newUsers});

    default:
      return state;
  }
};
