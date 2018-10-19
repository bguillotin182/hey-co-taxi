import React, { Component } from 'react'
import { connect } from 'react-redux';
import { connectUser } from '../actions'

class Header extends Component {
    connect = () => {
        this.props.dispatch(connectUser(!this.props.isConnected));
    }

    render() {
        const { user, isConnected } = this.props;

        if (isConnected) {
            return <h1> HELLO { user.firstName }  { user.lastName } <button onClick={this.connect} value="" name="button"> Click to discconnect </button></h1>;
        } else {
            return <h3> Please connect before enter application <button onClick={this.connect}> Click to connect </button></h3>;
        }
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
