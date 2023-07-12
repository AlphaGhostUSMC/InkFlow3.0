import React from "react";
import SignupCard from "../components/signup-card";
import CategoryHeading from "../components/category-heading";

const Signup = () => {
  return (
    <>
    <CategoryHeading />
      <div className="article-sub-container">
        <SignupCard />
      </div>
    </>
  );
}

export default Signup;