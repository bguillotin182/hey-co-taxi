import React from 'react';
import { connect } from 'react-redux';
import Header from './header/header';
import Mouse from './utils/Mouse';
import Footer from './footer/footer';
import Content3  from './three-test/three-test';
import { userGet, testObservable } from './utils/user';

import './App.css';

// Immediate Execute user GET.
userGet();
testObservable();



function App(props) {
  const { x, y, isConnected, cubeRotation, clientX, clientY } = props;

  return (
      <div className="App">
        <header>
          <Header />
          <strong> X : {x} - Y : {y} </strong>
          <span>Here is cubeRotation ::</span>
          <strong> X : {cubeRotation.x} | Y : {cubeRotation.y}</strong> 
          <strong>ClientX: {clientX} | ClientY: {clientY}</strong>
        </header>
        <main>
          <Mouse />
          <div>{ isConnected ? <Content3 /> : null }</div>
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
    isConnected: state.isConnected,
    cubeRotation: state.cubeRotation,
    clientX: state.clientX,
    clientY: state.clientY,
  }
}

export default connect(mapStateToProps)(App);
