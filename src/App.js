import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Comment from './components/Comment/Comment';
import Login from './components/Login/Login';
import auth  from './auth/auth';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
        <Route path="/comment" render={data=>auth.getLogInStatus()?(
      <Comment {...data}></Comment>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
      <Route path="/thankyou" render={data=>auth.getLogInStatus()?(
      <Thankyou {...data}></Thankyou>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;