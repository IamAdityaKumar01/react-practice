import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id:"12"}, "I am h1 tag"),
    React.createElement("h2", {id:"2"}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {id:"3"}, "I am h1 tag"),
    React.createElement("h2", {id:"4"}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
