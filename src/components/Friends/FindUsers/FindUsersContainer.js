import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, isLoading, setSearchUser } from '../../../redux/actions';
import {  getUsersThunk, deleteUnfollowThunk, postFollowThunk } from '../../../redux/thunks/findUsersReducerThunk';
import FindUsers from './FindUsers';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { 
  getUsers, getPageSize, getTotalUsersCount, getCurrentPage, 
  getTerm, getIsLoading, getIsFollowingProgressing 
} from '../../../selectors/findUsers-selector';

class FindUsersContainer extends Component {
  componentDidMount(){
    const {getUsersThunk, currentPage, pageSize, term} = this.props;
    getUsersThunk(currentPage, pageSize, term);
  }

  searchUser = formData => {
    const {getUsersThunk, setSearchUser, currentPage, pageSize} = this.props;

    getUsersThunk(currentPage, pageSize, formData.searchField);
    setSearchUser(formData.searchField);
  }

  changePage = pageNumber => {
    const {setCurrentPage, getUsersThunk, currentPage, pageSize, term} = this.props;

    setCurrentPage(pageNumber);
    getUsersThunk(currentPage, pageSize, term);
  }

  render(){
    return <FindUsers {...this.props} changePage={this.changePage} searchUser={this.searchUser} />
  }
}



const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalItemsCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  term: getTerm(state),
  isLoading: getIsLoading(state),
  isFollowingProgressing: getIsFollowingProgressing(state),
})

export default compose(
  connect(mapStateToProps, {setCurrentPage, setSearchUser, isLoading, getUsersThunk, deleteUnfollowThunk, postFollowThunk}),
  withAuthRedirect,
  withRouter
)(FindUsersContainer);