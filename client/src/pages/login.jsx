import React from "react";
import LoginCard from "../components/login-card";
import CategoryHeading from "../components/category-heading";

const Login = () => {
  return (
    <>
    <CategoryHeading />
      <div className="article-sub-container">
        <LoginCard />
      </div>
    </>
  );
}

export default Login;