import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import { MainWrapper } from './components/MainWrapper';
import { ActivityWrapper } from './components/ActivityWrapper';
import { WikiWrapper } from './components/WikiWrapper/WikiWrapper';
import { GamingWrapper } from './components/GamingWrapper';
import { WikiCreateForm } from './components/WikiCreatePost';
import { Cleaning } from './components/Cleaning';
import { Homework } from './components/Homework';
import { Housework } from './components/Housework';
import { WikiPage } from './components/WikiPost/WikiPost';

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
        <Switch>
          <Route path="/activity/">
            <ActivityWrapper>
              <Switch>
                <Route path="/activity/cleaning">
                  <Cleaning />
                </Route>
                <Route path="/activity/housework">
                  <Housework/>
                </Route>
                <Route path="/activity/homework">
                  <Homework/>
                </Route>
              </Switch>
              </ActivityWrapper>
          </Route>
          <Route path="/wiki/post/:postId">
            <WikiPage/>
          </Route>
          <Route path="/wiki/create_article">
            <WikiCreateForm/>
          </Route>
          <Route path="/wiki">
            <WikiWrapper/>
          </Route>
          <Route path="/gaming">
            <GamingWrapper />
          </Route>
          <Route path="/">
            <MainWrapper />
          </Route>

        </Switch>
        
      
      </Router>
      
    </>
  );
}


