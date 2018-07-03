import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser, updateUser, connectUser } from '../actions'

function Header(props) {
    const { user, isConnected } = props;

    const connect = () => {
        props.dispatch(connectUser(!props.isConnected));
    }

    if (isConnected) {
        return <h1> HELLO NEW WORLD <button onClick={connect} value="" name="button"> Click to discconnect </button></h1>;
    } else {
        return <h3> Please connect before enter application <button onClick={connect}> Click to connect </button></h3>;
    }
}

const mapStateToProps = (state) => {
    return {
        x: state.x,
        y: state.y,
        user: state.user,
        isConnected: state.isConnected,
    }
}

export default connect(mapStateToProps)(Header);
