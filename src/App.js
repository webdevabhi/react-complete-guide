import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abhishek', age: 24 },
      { name: 'Sumit', age: 27 },
      { name: 'Yash', age: 19 }
    ],
    otherProperty : "Some Other variable",
    showPerson: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Abhi', age: 24 },
        { name: event.target.value, age: 27 },
        { name: 'Yash', age: 20 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonhandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={this.nameChangedHandler} />
            })
          }
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            >

            <pre>My Hobbies: Racing</pre>
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am React App.</h1>
        <p>I am redendering from App Root. {this.state.otherProperty}</p>
        <button 
          style={style} 
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
