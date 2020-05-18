import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddlewear from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import navbarReducer from './reducers/navbarReducer';
import friendsReducer from './reducers/friendsReducer';
import findUsersReducer from './reducers/findUsersReducer';
import authReducer from './reducers/authReducer';
import AppReducer from './reducers/appReducer';

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  navbar: navbarReducer,
  friends: friendsReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
  form: formReducer,
  app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewear)));

window.store = store;

export default store;
