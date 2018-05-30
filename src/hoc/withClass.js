import React, { Component } from 'react';

// StateLess Component
/* const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
} */

// StateFull Component
const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;