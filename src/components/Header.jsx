import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Component.css";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  function p(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  const Home = `li ${p("/") ? "class1" : ""}`;
  const offers = `li ${p("/offers") ? "class1" : ""}`;
  const signIn = `li ${p("/sign-in") ? "class1" : ""}`;

  return (
    <div>
      <header>
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <ul>
            <li className={Home}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={offers}>
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li className={signIn}>
              <Link to={"/sign-in"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

<li
  class="cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
  style="
    background: red;
"
>
  Home
</li>;
