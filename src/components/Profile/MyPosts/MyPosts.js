import React from 'react';
import styles from './myposts.module.css';
import Post from './Post/Post';
import AddPostForm from './PostForm/AddPostForm';

const MyPosts = ({ addPost, state }) => {
  return (
    <div className={styles.my_posts}>
      <div className={styles.add_post} name="text">
        <AddPostForm onSubmit={addPost} />
      </div>

      <h3>My Posts</h3><hr/>
      {state.posts.map(item => (
          <Post key={item.id}
                src={item.src}
                name={item.fullName}
                text={item.text}
                count={item.likesCount}
          />
      ))}
    </div>
  )
}

export default MyPosts;
