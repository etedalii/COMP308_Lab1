import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Comment from './components/Comment/Comment';
import Result from './components/Result/Result';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import auth  from './auth/auth';

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
        <Route path="/comment" render={data=>auth.getLogInStatus()?(
      <Comment {...data}></Comment>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
      <Route path="/result" render={data=>auth.getLogInStatus()?(
      <Result {...data}></Result>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;