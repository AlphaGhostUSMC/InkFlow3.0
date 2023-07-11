import React from "react";
import ArticleCard from "../components/article-card";
import CategoryHeading from "../components/category-heading";

const Home = () => {
  return (
    <>
      <CategoryHeading />
      <div className="article-sub-container">
        <ArticleCard />
        </div>
    </>
  );
};

export default Home;
