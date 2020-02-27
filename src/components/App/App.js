import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

const App = ({ store }) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='middle'>
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
