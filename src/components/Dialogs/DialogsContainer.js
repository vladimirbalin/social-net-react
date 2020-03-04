import {
  sendMessage,
  updateBySymbolDialogs,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    state: state.dialogsComp
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateBySymbolDialogs: (text) => {dispatch(updateBySymbolDialogsActionCreator(text))},
//     sendMessage: () => {dispatch(addMessageActionCreator())}
//   }
// };

export default connect(mapStateToProps, {updateBySymbolDialogs, sendMessage})(Dialogs);