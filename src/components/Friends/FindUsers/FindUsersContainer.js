import React, { Component } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setTotalCount, setCurrentPage, setTermText, setSearchUser, isLoading } from './../../../redux/findUsersReducer';
import * as axios from 'axios';
import FindUsers from './FindUsers';

class FindUsersContainer extends Component {
  componentDidMount(){
    this.props.isLoading(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&term=${this.props.term}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.isLoading(false)
      })
  }

  changeTermText = (e) => {
    this.props.setTermText(e.target.value);
  }

  searchUser = () => {
    this.props.setSearchUser();
    this.props.isLoading(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&term=${this.props.term}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.isLoading(false)
      })
  }

  changePage = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.isLoading(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&term=${this.props.term}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        this.props.isLoading(false)
      })
  }

  render(){
    return <FindUsers
              users={this.props.state}
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              changeTermText={this.changeTermText}
              newTermText={this.props.newTermText}
              searchUser={this.searchUser}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              currentPage={this.props.currentPage}
              changePage={this.changePage}
              isLoading={this.props.isLoading}
          />
  }
}



const mapStateToProps = state => {
  return {
    state:            state.findUsers.users,
    pageSize:         state.findUsers.pageSize,
    totalUsersCount:  state.findUsers.totalCount,
    currentPage:      state.findUsers.currentPage,
    term:             state.findUsers.currentTerm,
    newTermText:      state.findUsers.newCurrentTerm,
    isLoading:        state.findUsers.isLoading
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setTotalCount, setCurrentPage, setTermText, setSearchUser, isLoading
  })(FindUsersContainer);
