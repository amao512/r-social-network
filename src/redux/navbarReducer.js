let initalState = [
  {id: 1, path: '/profile', title: 'Profile'},
  {id: 2, path: '/news', title: 'News'},
  {id: 3, path: '/messages', title: 'Messages'},
  {id: 4, path: '/friends', title: 'Friends'},
  {id: 5, path: '/music', title: 'Music'},
  {id: 6, path: '/video', title: 'Video'}
];

let navbarReducer = (state = initalState, action) => {
  return state;
};

export default navbarReducer;
