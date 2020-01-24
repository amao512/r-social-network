import React from 'react';
import {NavLink} from 'react-router-dom';

const MessageItem = props => {
  let path = '/messages/' + props.id;
  return <h3><NavLink to={path}>{props.name}</NavLink></h3>;
}

export default MessageItem;
