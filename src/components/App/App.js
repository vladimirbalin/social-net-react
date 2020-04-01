import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeThunk } from "../../redux/init-reducer";
import Loader from "../common/Loader/Loader";
import notFound from "../notFound/notFound";
import Content from "../common/Content/Content";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    return !this.props.initialized ? <Loader/> :
      (
        <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/profile/:userID?' component={ProfileContainer} />}/>
          <Route path='/dialogs' component={DialogsContainer}/>
          <Route path='/users' component={UsersContainer}/>
          <Route path='/login' component={Login}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route component={notFound}/>
        </Switch>
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.init.initialized
});

export default compose(
  connect(mapStateToProps, {initializeThunk})
)(App);
