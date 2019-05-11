import React, { Component } from "react";
import { connect } from "react-redux";

class Band extends Component {
  handleOnClick = e => {
    this.props.deleteBand(this.props.band.id);
  };
  render() {
    return (
      <li>
        <div>{this.props.band.name} </div>
        <button onClick={this.handleOnClick}>DELETE</button>
      </li>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { deleteBand: id => dispatch({ type: "DELETE_BAND", bandId: id }) };
}

export default connect(
  null,
  mapDispatchToProps,
)(Band);
