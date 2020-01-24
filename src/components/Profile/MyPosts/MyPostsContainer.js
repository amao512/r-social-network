import React, {Component} from 'react';
import { connect } from 'react-redux';
import { onAddPost, onChangePost } from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts';


class MyPostsComponent extends Component {

  addPost = () => {
    this.props.onAddPost();
  }

  changePost = e => {
    this.props.onChangePost(e);
  }

  render(){

    return (
        <MyPosts 
            onChangePost={this.changePost}
            addPost={this.addPost}
            state={this.props.state}
        />
    )
  }
}

const mapStateToStore = state => {
  return {
    state: state.profile
  }
}

const MyPostsContainer = connect(mapStateToStore, {onChangePost, onAddPost})(MyPostsComponent);

export default MyPostsContainer;
