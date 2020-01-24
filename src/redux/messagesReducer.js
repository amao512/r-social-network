const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE';

let initialState = {
  users: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Jake'},
  ],
  dialogs: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'HI'},
    {id: 4, message: 'Hello World!'},
  ],
  newDialogs: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newDialogs: '',
        dialogs: [...state.dialogs, {id: 5, message: state.newDialogs}]
      }
    case NEW_MESSAGE:
      return {
        ...state,
        newDialogs: action.newMessageText
      }
    default:
      return state;
  }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const newMessageCreator = text => ({ type: NEW_MESSAGE, newMessageText: text });

export default messagesReducer;
