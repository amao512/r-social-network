import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import FindUsersContainer from './components/Friends/FindUsers/FindUsersContainer';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Error from './components/404/Error';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />

            <div className='content'>
              <Switch>
                <Route path='/profile' render={ () => <Profile />}/>
                <Route path='/news' render={ () => <News/> }/>
                <Route path='/messages' render={() => <MessagesContainer /> }/>
                <Route path='/friends' render={() => <FriendsContainer /> }/>
                <Route path='/music' render={ () => <Music/> }/>
                <Route path='/video' render={ () => <Video/> }/>
                <Route path='/find-users' render={ () => <FindUsersContainer /> }/>
                <Route exact component={Error}/>
              </Switch>
            </div>

        </div>
      </Router>
    );
  }
}

export default App;
