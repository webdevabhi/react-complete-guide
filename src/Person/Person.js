import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        "@media (min-width: 500px)" : {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am <strong>{props.name}</strong> and I am <b><i>{props.age}</i></b> years old.</p>
            {props.children}

            <input type="tex" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);