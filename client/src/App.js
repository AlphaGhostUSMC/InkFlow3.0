import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/global-default.css';
import './assets/css/body.css';
import './assets/css/article-container.css';


import Header from './components/header';
import Navigation from './components/navigation';
import ArticleCard from './components/article-card';

function App() {
  return (
    <body className="body-main">
      <Header />
      <div className="body-container-main ">
        <Navigation />
        <div className='article-container'>
          <div className='article-sub-container'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
