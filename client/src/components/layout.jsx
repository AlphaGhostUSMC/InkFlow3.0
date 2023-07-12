import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/body.css';
import '../assets/css/article-container.css';



import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
// import Login from '../pages/login';
import Signup from '../pages/signup';


function Layout() {
  return (
    <body className="body-main">
      <Header />
      <div className="body-container-main ">
        <Navigation />
        <div className='article-container'>
          {/* Page Content Should be Placed here */}
          <Signup />
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default Layout;
