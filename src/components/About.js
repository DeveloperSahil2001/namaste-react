import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about m-4 p-4">
        <h1 className='text-center font-bold'>About US</h1>
        <h2>About Component</h2>
        <User name="Sahil"/>
      </div>
    );
  }
}

export default About;
