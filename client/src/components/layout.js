import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/body.css';
import '../assets/css/article-container.css';



import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function Layout() {
  return (
    <body className="body-main">
      <Header />
      <div className="body-container-main ">
        <Navigation />
        <div className='article-container'>

          <div className='article-sub-container'>

          </div>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default Layout;
