import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';
import Header from './header/header';
import Mouse from './utils/Mouse';
import Footer from './footer/footer';
import Content3  from './three-test/three-test';
import { userGet, rangeGet, reduceWinner, testObservable } from './utils/user';

import logo from './logo.svg';
import './App.css';

// Immediate Execute user GET.
// rangeGet(1, 200);

userGet();

console.log(reduceWinner());

testObservable();

function App({x, y, isConnected}) {

  const isUserConnected = (isConnected) => isConnected;

  return (
      <div className="App">
        <header>
          <Header />
          <strong> X : {x} - Y : {y} </strong>
        </header>
        <main>
          <Mouse />
          <div>{ isUserConnected(isConnected) ? <Content3 /> : null }</div>
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    x: state.x,
    y: state.y,
    user: state.user,
    isConnected: state.isConnected,
  }
}

export default connect(mapStateToProps)(App);
