// withNavBar.js - HOC
import React from "react";
import NavBar from "../components/navBar";

const styles = {
  root: {
    flexGrow: 1
  }
};

export default Page => {
  return class PageWithHeader extends React.Component {
    render() {
      return (
        <div style={styles.root}>
          <NavBar />
          <Page {...this.props} />
        </div>
      );
    }
  };
};
