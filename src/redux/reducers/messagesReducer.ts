import { ADD_MESSAGE } from '../constants';
import { MessageUsersType, MessageDialogsType } from '../../types/reduxTypes';

let initialState = {
  users: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Jake'},
  ] as Array<MessageUsersType>,
  dialogs: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'HI'},
    {id: 4, message: 'Hello World!'},
  ] as Array<MessageDialogsType>,
};

type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogs: [...state.dialogs, {id: 5, message: action.msgText}]
      }
    default:
      return state;
  }
}

export default messagesReducer;
