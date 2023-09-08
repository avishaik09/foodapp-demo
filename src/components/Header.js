import { useState,useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const loggedInUser = () => {
  return true;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const {user}=useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-red-200 lg:bg-pink-200 ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
          <li className="px-2" >About</li>
          </Link>
          <Link to="/contact">
          <li className="px-2">Contact</li></Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart"><li className="px-2">Instamart</li></Link>
        </ul>
      </div>
      <h1 className=" py-10  ">{isOnline ? "✅ Online" : "🔴 Offline"}</h1>
      <span className="p-10 font-bold text-red-600">{user.name}</span>
      {isLoggedIn ? (
        <button 
        className=" bg-red-400 " onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className=" bg-green-400 h-16 m-2 border-r-4" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
