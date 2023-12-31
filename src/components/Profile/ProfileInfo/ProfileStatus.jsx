import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.props.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

componentDidUpdate(prevProps, prevState){
if (prevProps.status !== this.props.status){
  this.setState({
    status: this.props.status
  })
}
}

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
