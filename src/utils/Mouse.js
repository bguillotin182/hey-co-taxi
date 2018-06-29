import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMouseXY } from '../actions'

class Mouse extends Component {
    state= {
        x: 0,
        y: 0,
    }

    componentDidMount() {
        console.log('Here is component DidMount');

        this.catchEvent = ({ x, y }) => {
            this.setState({x, y});
            this.props.dispatch(changeMouseXY(x, y))
        }

        window.addEventListener('mousemove', this.catchEvent, false);
    }

    componentWillUnmount() {
        console.log('Here is component UnMount');
    }

    render() {
        return this.props.render(this.state);
    }
}

const mapStateToProps = (state) => {
    return {
        x: state.x,
        y: state.y,
    }
}

export default connect(mapStateToProps)(Mouse);
