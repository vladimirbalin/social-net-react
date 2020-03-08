import React from "react";

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      tempStatus: this.props.status
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.status !== this.props.status){
      this.setState({
        tempStatus: this.props.status
      })
    }
  }

  changeHandler = (e) => {
    this.setState({
      tempStatus: e.currentTarget.value
    });
  };

  editModeEnable = () => {
    this.setState({
      editMode: true
    });
  };
  editModeDisable = () => {
    this.setState({
      editMode: false
    })
  };
  sendHandler = () => {
    this.props.setUserStatusThunk(this.state.tempStatus);
  };

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.editModeEnable}>status: {this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input
            onBlur={() => {
              this.editModeDisable();
              this.sendHandler();
            }}
            onChange={this.changeHandler}
            value={this.state.tempStatus}
            autoFocus={true}
          />
        </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;