// auth.js Page
import React from "react";
import withNavBar from "../src/withNavBar";
import { withRouter } from "next/router";
import { compose } from "redux";

class Auth extends React.Component {
  render() {
    // Parse out action telling us whether we should login or signup
    // from props
    const {
      router: {
        query: { action }
      }
    } = this.props;

    return (
      <div>
        <p>{action}</p>
      </div>
    );
  }
}

// Composes functions from right to left
export default compose(
  withNavBar,
  withRouter
)(Auth);
