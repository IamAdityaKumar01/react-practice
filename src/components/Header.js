import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-header">
      <div className="logo">
        <Link to="/">
          <img src="https://wrapstore.in/wp-content/uploads/2023/07/wrapstorecompletelogo180.png"></img>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <button className="about-btn">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
