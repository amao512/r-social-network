import React from 'react';
import { connect } from 'react-redux';
import { onAddPost } from '../../../redux/actions';
import MyPosts from './MyPosts';


const MyPostsContainer = props => {

  const addPost = postText => {
    props.onAddPost(postText.postField);
    postText.postField = '';
  }

  return <MyPosts {...props} addPost={addPost} />
}

const mapStateToStore = state => ({
    state: state.profile
});

export default connect(mapStateToStore, { onAddPost })(MyPostsContainer);