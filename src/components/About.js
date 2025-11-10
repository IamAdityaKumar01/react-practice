import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="container-about">
        <UserClass name={"Aditya Class"} />
      </div>
    );
  }
}

export default About;
