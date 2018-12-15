// auth.js Page
import React from "react";
import withNavBar from "../src/withNavBar";
import { withRouter } from "next/router";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  textField: {
    width: 400
  }
};

class Auth extends React.Component {
  // Create our initial state
  state = {
    email: "",
    password: ""
  };

  // Handle changes from text fields
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    // Parse out action telling us whether we should login or signup
    // from props
    const {
      router: {
        query: { action }
      },
      classes
    } = this.props;

    // Make sure users can't just enter whatever action they want
    if (action != "login" && action != "signup") {
      return <p>Invalid action</p>;
    }

    return (
      <div className={classes.root}>
        <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
        />
        <br />
        <TextField
          id="standard-name"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange("password")}
          margin="normal"
        />
        <br />

        <Button variant="contained" color="primary">
          {action}
        </Button>
      </div>
    );
  }
}

// Composes functions from right to left
export default compose(
  withNavBar,
  withStyles(styles),
  withRouter
)(Auth);
