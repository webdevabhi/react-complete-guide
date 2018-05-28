import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abhishek', age: 24 },
      { name: 'Sumit', age: 27 },
      { name: 'Yash', age: 19 }
    ]
  }

  switchNameHandler = () => {
    alert("Button CLicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App.</h1>
        <p>I am redendering from App Root.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          <pre>My Hobbies: Racing</pre>
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
