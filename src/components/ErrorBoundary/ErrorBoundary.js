import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMeassage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMeassage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMeassage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;