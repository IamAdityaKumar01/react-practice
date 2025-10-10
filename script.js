import React from "react";
import ReactDOM from "react-dom/client";

const Heading_ReactElem = () => <h1>React element Heading</h1>;

const reactElem = <h3>I am heading 3</h3>;
const Heading = () => (
  <div className="Container">
    <Heading_ReactElem />
    {Heading_ReactElem()}
    <h1>This is the heading made from react component</h1>
    <h2>I am heading 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
