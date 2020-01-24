import React from 'react';
import styles from './myposts.module.css';
import Post from './Post/Post';

const MyPosts = ({ onChangePost, addPost, state }) => {

  const changePost = e => {
    onChangePost(e.target.value);
  }

  return (
    <div className={styles.my_posts}>

      <div className={styles.add_post} name="text">
        <input type='text' onChange={changePost} value={state.newChangePost} placeholder='Add Post...'/>
        <button onClick={addPost}>Add</button>
      </div>

      <h3>My Posts</h3><hr/>

      {state.posts.map(item => (
          <Post 
            key={item.id}
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
