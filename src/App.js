import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import University from './University'
import News from './Newsletter'
import Login from './Login';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={University}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
