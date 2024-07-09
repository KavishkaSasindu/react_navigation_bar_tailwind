import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="w-full h-[80px] flex justify-center items-center">
        <div className="w-[90%] h-[60px] flex justify-between items-center">
          <div>
            <h1>Logo</h1>
          </div>
          <div className="felx justify-center items-center">
            <ul className="flex space-x-10">
              <li>
                <Link to={"/"}>Home </Link>
              </li>
              <li>
                <Link to={"/books"}>BookList</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
