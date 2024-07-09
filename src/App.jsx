import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookList from "./pages/book/BookList";
import AddBook from "./pages/book/AddBook";
import OneBook from "./pages/book/OneBook";
import NavBar from "./components/NavBar";
import BookLayout from "./components/BookLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path="add" element={<AddBook />} />
            <Route path=":id" element={<OneBook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
