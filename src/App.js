import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container-app">
      <Header />
      <About />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
