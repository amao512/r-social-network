import React from 'react';
import styles from './post.module.css';

const Post = ({src, name, text, count}) => {
  return (
    <div className={styles.post}>
      <div className={styles.send_inform}>
        <div className={styles.post_avatar}>
          <img src={src} alt=''/>
        </div>

        <div className={styles.post_name}>
          <h3>{name}</h3>
        </div>
      </div>

      <div className={styles.post_text}>
        <p>{text}</p>
      </div>

      <div className={styles.like}>
        <span>{count}</span> like
      </div>
      <hr/>
    </div>
  )
}

export default Post;
