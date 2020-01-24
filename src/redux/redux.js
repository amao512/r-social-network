import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import friendsReducer from './friendsReducer';
import findUsersReducer from './findUsersReducer';

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  navbar: navbarReducer,
  friends: friendsReducer,
  findUsers: findUsersReducer
})

let store = createStore(reducers);

export default store;
