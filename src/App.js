import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './components/Header/Header.module.css'
import './components/NavBar/NavBar.module.css'
import './components/Profile/Profile.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='middle'>
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile profileComp={props.state.profileComp}/>} />
            <Route path='/dialogs' render={() => <Dialogs dialogsComp={props.state.dialogsComp}/>}/>
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
