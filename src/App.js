import React, { Component, Suspense } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializingThunk } from './redux/thunks/appReducerThunk';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
// import FindUsersContainer from './components/Friends/FindUsers/FindUsersContainer';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Error from './components/404/Error';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import Reloader from './components/common/reloader/Reloader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const FindUsersContainer = React.lazy(() => import('./components/Friends/FindUsers/FindUsersContainer'));

class App extends Component {
  componentDidMount(){
    this.props.initializingThunk()
  }

  render(){
    if(!this.props.initialized){
      return <Reloader />
    }

    return (
      <div className="App">
        <HeaderContainer />
        <Navbar />

        <div className='content'>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path='/' render={ () => <Redirect to='/profile'/> }/>
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
              <Route path='/news' render={ () => <News/> }/>
              <Route path='/messages' render={() => <MessagesContainer /> }/>
              <Route path='/friends' render={() => <FriendsContainer /> }/>
              <Route path='/music' render={ () => <Music/> }/>
              <Route path='/video' render={ () => <Video/> }/>
              <Route path='/find-users' render={ () => <FindUsersContainer /> }/>
              <Route path='/login' render={ () => <Login /> }/>
            </Suspense>
            <Route exact component={Error}/>
          </Switch>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initializing
})

export default compose(connect(mapStateToProps, { initializingThunk }), withRouter)(App);
