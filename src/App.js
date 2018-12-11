import React, { Component } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';
 
import './scss/App.scss';

class App extends Component {
  render() {
    return (
       <div>
        <Header />
        <section id='content-area'>
          <Filter />
          <Listings/>
        </section>
      

      </div>
       
    );
  }
}

export default App;
