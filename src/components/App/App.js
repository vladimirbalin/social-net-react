import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import NotFound from "../notFound/notFound";
import HeaderContainer from "../Header/HeaderContainer";
import NavBar from "../NavBar/NavBar";

const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <div className='middle'>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/profile"}/>}/>
            <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>

  )
};

export default App;
