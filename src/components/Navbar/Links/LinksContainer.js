import { connect } from 'react-redux';
import Links from './Links';


const mapStateToStore = state => {
  return {
    state: state.navbar
  }
}

const LinksContainer = connect(mapStateToStore)(Links)

export default LinksContainer;
