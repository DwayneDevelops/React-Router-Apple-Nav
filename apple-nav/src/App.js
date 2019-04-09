import React, { Component } from 'react';
import NavWrapper from './components/NavWrapper/NavWrapper'; 
import SubNav from './components/SubNav/SubNav';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavWrapper />
          <SubNav />
        </header>
      </div>
    );
  }
}