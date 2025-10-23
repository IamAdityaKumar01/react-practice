import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor child called");
  }

  componentDidMount() {
    console.log("child didMount");
  } 
  render() {
    const { name } = this.props;
    let { count } = this.state;
    console.log("render child called");
    return (
      <div>
        <h1>Count = {count}</h1>
        <div className="cnt-btn">
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            increase count
          </button>
        </div>
        <h2>name: {name} </h2>
        <h2>location: Delhi</h2>
        <h2>Mail: way2adityakumar@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
