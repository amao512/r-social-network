const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const messagesReducer = (state = initialState, action) => {
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

export const addMessageCreator = msgText => ({ type: ADD_MESSAGE, msgText });

export default messagesReducer;
