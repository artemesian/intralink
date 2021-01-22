import React from 'react';
import { Route, Switch } from 'react-router-dom';
import io from 'socket.io-client'
import Auth from './Pages/Auth/Auth.js';
import HomeWrapper from './Pages/HomeWrapper/HomeWrapper.js';
import './App.scss';
function App() {
  return (
    <div 
    className="App">
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/" component={HomeWrapper}/>
      </Switch>
    </div>
  );
}

export default App;
