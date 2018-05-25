import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App.</h1>
        <p>I am redendering from App Root.</p>
        <Person name="Abhishek" age="24" />
        <Person name="sumit" age="27">My Hobbies: Racing</Person>
        <Person name="Yash" age="21"/>
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
