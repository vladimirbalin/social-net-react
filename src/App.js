import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './components/Header/Header.module.css'
import './components/NavBar/NavBar.module.css'
import './components/Profile/Profile.module.css'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <div className='middle'>
        <NavBar/>
        <Profile/>
      </div>
    </div>
  );
};

export default App;
