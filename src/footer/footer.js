import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div><a href={ this.props['redux-observable'].followers_url}  target="_blank"> This is a link to redux-observable followers </a></div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ['redux-observable'] : state['redux-observable'],
        isConnected: state.isConnected,
    }
}

export default connect(mapStateToProps)(Footer);
