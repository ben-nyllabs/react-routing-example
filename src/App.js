import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <Header />
          <Sidebar />

          <Route exact path="/" component={Home} />
          <Route exact path="/page-1" component={PageOne} />
          <Route exact path="/page-2" component={PageTwo} />
          <Route exact path="/page-3" component={PageThree} />
        </div>
      </Router>
    );
  }
}

export default App;
