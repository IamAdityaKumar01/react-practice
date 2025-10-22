import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>name: {name} </h2>
        <h2>location: Delhi</h2>
        <h2>Mail: way2adityakumar@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
