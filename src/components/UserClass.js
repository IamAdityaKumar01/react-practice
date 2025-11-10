import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: this.props.name,
        id: "Loading...",
        bio: "Loading...",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/IamAdityaKumar01");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("comdidMount called");
  }

  componentDidUpdate() {
    console.log("comDidUpdate called");
  }
  render() {
    let { name, login, bio } = this.state.userInfo;
    console.log("render called");
    return (
      <div>
        <h3>name: {name} </h3>
        <h3>id: {login}</h3>
        <p>Bio: {bio}</p>
      </div>
    );
  }
}

export default UserClass;
