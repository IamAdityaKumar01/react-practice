import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("constructor parent called");
  }

  componentDidMount() {
    console.log("parent didMount");
  }
  render() {
    console.log("render parent called");
    return (
      <div className="container-about">
        <UserClass name={"Aditya Class"} />
      </div>
    );
  }
}

export default About;
