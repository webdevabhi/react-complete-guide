import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old.</p>
            <pre>{props.children}</pre>
        </div>
    )
}

export default person;