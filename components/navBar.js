// navBar.js - Component
import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Router from "next/router";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    cursor: "pointer",
    width: 100
  }
};

class NavBar extends React.Component {
  /**
   * Renders auth buttons depending on user's auth state.
   * When the user isn't signed in show login and sign up buttons.
   * When the user is logged in, show a logout button
   * TODO - add auth state checking logic instead of defaulting to signed out buttons
   */
  renderAuthButtons = () => {
    return (
      <div>
        <Link href="/auth?action=login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link href="/auth?action=signup">
          <Button color="inherit">Sign Up</Button>
        </Link>
      </div>
    );
  };

  render() {
    // Styles are passed as props.classes when we export using 'withStyles'
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* Display a logo text element that takes us to the root page on click */}
            <Typography
              onClick={() => Router.push("/")}
              variant="h6"
              color="inherit"
              className={classes.grow}
            >
              <div className={classes.logo}>Shout</div>
            </Typography>

            {/* Render auth buttons */}
            {this.renderAuthButtons()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
