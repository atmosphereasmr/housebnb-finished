import React, { Component } from 'react';
import router from './router.js'

import Header from './Components/Header/header'
import Condos from './Components/Condos/condos'
import Footer from './Components/Footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {router}
        <Footer id="footer"/>
      </div>
    );
  }
}

export default App;
