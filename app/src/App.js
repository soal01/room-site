import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
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
import { Authorisation } from './components/Authorisation/Authorisation';
import { ApiClientService } from './services/ApiClientService';

export function App() {
  const [user, setUser] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(
    window.localStorage.getItem('ACCESS')
  );

  const fetchUser = async () => {
    const user = await ApiClientService('user/current');
    console.log('here1');
    console.log(user);
    setUser(user['username']);
  };

  React.useEffect(() => {
    if (isLogin) {
      void fetchUser();
    }
  }, [isLogin]);
  
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
        <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
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
            <WikiCreateForm />
          </Route>
          <Route path="/wiki">
            <WikiWrapper isLogin={isLogin}/>
          </Route>
          <Route path="/gaming">
            <GamingWrapper />
          </Route>
          <Route path="/authorisation">
            <Authorisation setIsLogin={setIsLogin}/>
          </Route>
          <Route path='/logout'>
            <Redirect to='/' />
          </Route>
          <Route path="/">
            <MainWrapper user={user} isLogin={isLogin}/>
          </Route>

        </Switch>
        
      
      </Router>
      
    </>
  );
}


