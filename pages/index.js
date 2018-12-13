// index.js Page
import React from "react";
import withNavBar from "../src/withNavBar";

class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Next.js</p>
      </div>
    );
  }
}

export default withNavBar(Index);
