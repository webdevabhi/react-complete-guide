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
    otherProperty : "Some Other variable"
  }

  switchNameHandler = (newName) => {
    // console.log("Button CLicked");

    // Don't do this
    // this.state.persons[0].name = 'Abhishek Patel';

    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Sumit', age: 27 },
        { name: 'Yash', age: 22 }
      ]
    })
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am React App.</h1>
        <p>I am redendering from App Root. {this.state.otherProperty}</p>
        <button 
          style={style} 
          onClick={() => this.switchNameHandler('Abhishek Patel!')}
        >Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Abhi!')}
          changed={this.nameChangedHandler}>
          
          <pre>My Hobbies: Racing</pre>
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
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
