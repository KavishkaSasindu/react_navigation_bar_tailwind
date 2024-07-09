import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedNav = () => {
  return (
    <div>
      <div className="text-center text-2xl">What do yo want?</div>
      <div className="text-center">
        <Link to={"/books/add"}>Add New Book</Link>
      </div>
      <div className="text-center">
        <Link to={"/books/1"}>See One Book Detial</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NestedNav;
