import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';
import Header from './header/header';
import Mouse from './utils/Mouse';
import { chnageMousXY } from './actions'
import Content3  from './three-test/three-test';
//import Footer from './header/footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const { x, y } = this.props;

    return (
      <div className="App">
        <Header />
        <strong> X : {x} - Y : {y} </strong>
        <Mouse render={ ({x, y}) => <strong> X: {x} - Y : { y } </strong>} toto={ () => 'toto' } />
        <Content3 />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    x: state.x,
    y: state.y,
  }
}

export default connect(mapStateToProps)(App);
