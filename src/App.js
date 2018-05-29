import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Abhishek', age: 24 },
      { id:2, name: 'Sumit', age: 27 },
      { id:3, name: 'Yash', age: 19 }
    ],
    otherProperty : "Some Other variable",
    showPerson: false
  }

  nameChangedHandler = (event, id)=> {
    /* let persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons }); */

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

  }

  deletePersonHandler = (personIndex) => {
    // let persons = this.state.persons.slice();
    // ES6 Approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonhandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person 
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(e) => this.nameChangedHandler(e, person.id)} />
              </ErrorBoundary>
            })
          }
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );  // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am React App.</h1>
        <p className={assignedClasses.join(' ')}>I am redendering from App Root. {this.state.otherProperty}</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonhandler}
        >Toggle Person</button>

        {persons}
      </div>
    );

    /*
     * Another JS way to render html using pure ReactJs.
     * Its Better to use Jsx, as it is simple and easy to understand.
     */  
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am React App.'));
  }
}

export default App;
