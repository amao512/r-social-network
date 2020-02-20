import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddlewear from 'redux-thunk';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import friendsReducer from './friendsReducer';
import findUsersReducer from './findUsersReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './appReducer';

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
