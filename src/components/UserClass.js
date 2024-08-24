import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  //   async componentDidMount() {
  //     const data = await fetch("https://api.github.com/users/DeveloperSahil2001");

  //     const json = await data.json();

  //     console.log(json);

  //     this.setState({
  //       userInfo: json,
  //     });
  //   }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hi");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Updated");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer)
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
