import profileReducer, { onAddPost } from "../redux/profileReducer"

it('post should be added', () => {
    let action = onAddPost('new post')

    let state = {
        posts: [],
      }

    let newPost = profileReducer(state, action);

    expect(newPost.posts.length).toBe(1)
})