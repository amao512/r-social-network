import { connect } from 'react-redux';
import Friends from './Friends';


const mapStateToStore = state => {
  return {
    state: state.friends
  }
}

const FriendsContainer = connect(mapStateToStore)(Friends);

export default FriendsContainer;
