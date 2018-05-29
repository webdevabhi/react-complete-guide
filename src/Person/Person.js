import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am <strong>{props.name}</strong> and I am <b><i>{props.age}</i></b> years old.</p>
            {props.children}

            <input type="tex" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;