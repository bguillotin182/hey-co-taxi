import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMouseXY } from '../actions'

class Mouse extends Component {
    componentDidMount() {
        this.catchEvent = ({ x, y }) => {
            this.props.dispatch(changeMouseXY(x, y))
        }

        window.addEventListener('mousemove', this.catchEvent, false);
    }

    componentWillUnmount() {
        console.log('Here is component UnMount');
    }

    render() {
        return null;
    }
}

export default connect()(Mouse);
