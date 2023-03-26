import React from "react";
import { Container } from "react-bootstrap";

import MainBlog from "./../../components/MainBlog";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
  return (
    <Container className="home-container">
      <MainBlog />
      <RecentBlogs />
    </Container>
  );
};

export default Home;
