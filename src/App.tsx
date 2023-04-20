import React, { useEffect } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMainBlog } from "./redux/slices/mainBlogSlice";
import { setRecentBlogs } from "./redux/slices/recentBlogsSlice";

import blogs from "./db/blog.json";

import Home from "./pages/Home";
import Header from "./components/layout/Header/Header";
import Blog from "./pages/Blog";
import Models from "./pages/Models";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Invest from "./pages/Invest";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  dispatch(setMainBlog(blogs[0]));
  dispatch(setRecentBlogs(blogs));

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/invest" element={<Invest />} />
          <Route path="/success" element={<Success orderNo="" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/models" element={<Models />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
