import HeaderContainer from "../../../Header/HeaderContainer";
import NavBar from "../../../NavBar/NavBar";
import React from "react";
import './withHeader.styles.scss';

export const withHeader = (WrappedComponent) => {
  const _withHeader = (props) => {
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <section className="middle">
          <NavBar/>
          <div className="app-wrapper-content">
            <WrappedComponent {...props}/>
          </div>
        </section>
      </div>
    )
  }
  return _withHeader;
}