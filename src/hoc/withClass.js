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
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} ref={this.props.forwardRef} />
                </div>
            )
        }
    }

    return React.forwardRef ((props, ref) => {
        return <WithClass {...props} forwardRef={ref} />
    })
}

export default withClass;