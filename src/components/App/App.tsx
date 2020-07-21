import React from 'react';
import './App.styles.scss';
import Loader from '../common/Loader/Loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunk } from '../../redux/init-reducer';
import { RootStateType } from '../../redux/redux-store';

import Routes from '../../routes';

type MapStatePropsType = { initialized: boolean };
type MapDispatchPropsType = { initializeThunk: () => void };
type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class App extends React.Component<PropsType, {}> {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    return !this.props.initialized ? <Loader /> : <Routes />;
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  initialized: state.init.initialized,
});
const mapDispatchToProps: MapDispatchPropsType = {
  initializeThunk,
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, RootStateType>(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
