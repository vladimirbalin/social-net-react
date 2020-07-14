import Dialogs from "./Dialogs";
import { DialogsStateType, sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithLogin } from "../common/hocs/withLogin/withLogin";
import { compose } from "redux";
import { withHeader } from "../common/hocs/withHeader/withHeader";
import { RootStateType } from "../../redux/redux-store";


type MapStateToPropsType = DialogsStateType;
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  const { dialogsMessages, dialogsNames } = state.dialogsComp;
  return {
    dialogsMessages,
    dialogsNames
  }
};


type MapDispatchToPropsType = {sendMessage: (text: string) => void}
const mapDispatchToProps: MapDispatchToPropsType = {sendMessage};

export default compose(
  WithLogin,
  withHeader,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps),
)(Dialogs);