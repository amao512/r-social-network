import { connect } from 'react-redux';
import FriendsNav from './FriendsNav';


const mapStateToStore = state => {
  return {
    state: state.friends
  }
}

const FriendsNavContainer = connect(mapStateToStore)(FriendsNav);

export default FriendsNavContainer;
