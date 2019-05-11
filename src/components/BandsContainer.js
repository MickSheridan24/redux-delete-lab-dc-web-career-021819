import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";

import { connect } from "react-redux";

class BandsContainer extends Component {
  displayBands = () => {
    return this.props.bands.map(b => {
      return <Band key={b.id} band={b} />;
    });
  };
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.displayBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BandsContainer);
