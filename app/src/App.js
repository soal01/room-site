import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content';

export function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <Router>
        <Header/>
      </Router>
      <Router>
        <Content/>
      </Router>
    </>
  );
}


