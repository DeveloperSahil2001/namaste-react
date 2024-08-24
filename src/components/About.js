import User from "./User";
// import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <h2>About Component</h2>
        <User />
      </div>
    );
  }
}

export default About;
