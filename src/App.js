import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';

import Main from './pages/Main'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ReviewWrite from './pages/ReviewWrite'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/detail" exact component={Detail}/>
        <Route path="/reviewWrite" exact component={ReviewWrite}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
