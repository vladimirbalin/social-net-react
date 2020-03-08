import {
  sendMessage,
  updateBySymbolDialogs,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { LoginHOC } from "../hocLogin/LoginHOC";
import { compose } from "redux";


const mapStateToProps = (state) => {
  return {
    state: state.dialogsComp,
  }
};
const mapDispatchToProps = {updateBySymbolDialogs, sendMessage};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateBySymbolDialogs: (text) => {dispatch(updateBySymbolDialogsActionCreator(text))},
//     sendMessage: () => {dispatch(addMessageActionCreator())}
//   }
// };


export default compose(
  LoginHOC,
  connect(mapStateToProps, mapDispatchToProps),

)(Dialogs);

