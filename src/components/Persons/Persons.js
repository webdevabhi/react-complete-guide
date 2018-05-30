import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(e) => this.props.changed(e, person.id)}
                key={person.id} />
        });
    }
};

export default Persons;