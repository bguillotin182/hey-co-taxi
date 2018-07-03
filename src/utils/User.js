import React, { Component } from 'react';


class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (<b>{  user }</b>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect()(User)
