import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/global-default.css';
import './assets/css/body.css';
import './assets/css/article-container.css';



import Header from './components/header';
import Navigation from './components/navigation';
import ArticleCard from './components/article-card';
import CategoryHeading from './components/category-heading';
import Footer from './components/footer';

function App() {
  return (
    <Routes>
      <Route index element={<body className="body-main">
        <Header />
        <div className="body-container-main ">
          <Navigation />
          <div className='article-container'>
            <CategoryHeading />
            <div className='article-sub-container'>
              <ArticleCard />
            </div>
            <Footer />
          </div>
        </div>
      </body>} />
      <Route path={'/signin'} 
      element = {
        <div>Login</div>
      } />
    </Routes>
  );
}

export default App;
