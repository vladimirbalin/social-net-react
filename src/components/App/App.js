import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import Dialogs from "../Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='middle'>
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile profileComp={props.state.profileComp}
                                                          dispatch={props.dispatch} />} />

            <Route path='/dialogs' render={() => <Dialogs dispatch={props.dispatch}
                                                          dialogsComp={props.state.dialogsComp}/>}/>
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
