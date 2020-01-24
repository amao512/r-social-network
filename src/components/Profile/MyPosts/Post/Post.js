import React, {Component} from 'react';
import styles from './post.module.css';

class Post extends Component {
  render(){
    return (
      <div className={styles.post}>
        <div className={styles.send_inform}>
          <div className={styles.post_avatar}>
            <img src={this.props.src} alt=''/>
          </div>
          <div className={styles.post_name}>
            <h3>{this.props.name}</h3>
          </div>
        </div>
        <div className={styles.post_text}>
          <p>{this.props.text}</p>
        </div>
        <div className={styles.like}>
          <span>{this.props.count}</span> like
        </div>
        <hr/>
      </div>
    )
  }
}

export default Post;
