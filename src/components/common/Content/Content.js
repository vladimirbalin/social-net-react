import HeaderContainer from "../../Header/HeaderContainer";
import NavBar from "../../NavBar/NavBar";
import React from "react";

const Content = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <div className='middle'>
        <NavBar/>
        <div className='app-wrapper-content'>
          {props.children}
        </div>
      </div>
    </div>

  );
};

export default Content;