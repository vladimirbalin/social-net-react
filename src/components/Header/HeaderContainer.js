import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthThunk } from "../../redux/auth-reducer";

// const HeaderContainer = (props) => {
//
//   useEffect(() => {
//     props.setAuthThunk();
//   },[]);
//
//   return (
//     <Header {...props}/>
//   );
//
// };

class HeaderContainer extends React.Component{
  componentDidMount() {
    this.props.setAuthThunk();
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state.auth
});


export default connect(mapStateToProps, {setAuthThunk})(HeaderContainer);