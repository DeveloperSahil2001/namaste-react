import UserContext from "../utils/UserContext";
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
        <h1 className="text-center font-bold">About US</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">
                LoggedIn User: {loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>About Component</h2>
        <User name="Sahil" />
      </div>
    );
  }
}

export default About;
