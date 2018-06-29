import React, { Component } from 'react'

class Header extends Component {
    state: {
        isConnected: boolean,
    }

    constructor() {
        super();
        this.state = {isConnected: false}
    }

    connect = () => {
        this.setState({isConnected: true});
    }

    render() {
        const { isConnected } = this.state;

        if (isConnected) {
            return <h1> HELLO WORLD </h1>;
        } else {
            return <h3> Please connect before enter application <input type="button" onClick={this.connect} label=" Click to connect " name="button" /></h3>;
        }
    }
}

export default Header;
