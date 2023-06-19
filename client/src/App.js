import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/global-default.css';
import './assets/css/body.css';


import Header from './components/header';

function App() {
  return (
    <body className="body-main">
      <div className="body-container-main ">
        <Header />
      </div>
    </body>
  );
}

export default App;
