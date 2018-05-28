import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
            {props.children}

            <input type="tex" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;