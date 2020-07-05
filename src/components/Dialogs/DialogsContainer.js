import Dialogs from "./Dialogs";
import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { LoginHOC } from "../common/hocs/hocLogin/LoginHOC";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.dialogsComp,
  }
};
const mapDispatchToProps = {sendMessage};

export default compose(
  LoginHOC,
  connect(mapStateToProps, mapDispatchToProps),

)(Dialogs);

