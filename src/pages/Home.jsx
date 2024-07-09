import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const goPage = () => {
    navigate("/books");
  };

  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goPage}>Go to BookList</button>
    </div>
  );
};

export default Home;
