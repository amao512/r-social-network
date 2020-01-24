const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
  posts: [
    {id: 1, like: true, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', fullName: 'Asylzhan Seytbek', text: 'My First Post', likesCount: 145},
    {id: 2, like: false, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', fullName: 'Asylzhan Seytbek', text: 'My SECOND Post', likesCount: 99923432},
  ],
  newChangePost: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let arr = {
          id: state.posts[-1] + 1,
          likes: false,
          src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          fullName: 'Asylzhan Seytbek',
          text: state.newChangePost,
          likesCount: 0
      };
      return {
        ...state,
        newChangePost: '',
        posts: [arr, ...state.posts],
      }
    case UPDATE_POST:
      return {
        ...state,
        newChangePost: action.newPostText
      }
    default:
      return state;
  }
}

window.store = initialState;

export const onAddPost = () => ({ type: ADD_POST });
export const onChangePost = text => ({ type: UPDATE_POST, newPostText: text });

export default profileReducer;
