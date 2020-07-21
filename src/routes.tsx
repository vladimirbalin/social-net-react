import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import NotFound from './components/common/404/404';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProfileContainer} />
      <Route path="/profile/:userID?" component={ProfileContainer} />
      <Route path="/dialogs" component={DialogsContainer} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
