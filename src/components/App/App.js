import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";

const App = () => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='middle'>
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
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
