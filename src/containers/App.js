import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    // console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 1, name: 'Abhishek', age: 24 },
        { id: 2, name: 'Sumit', age: 27 },
        { id: 3, name: 'Yash', age: 19 }
      ],
      otherProperty: "Some Other variable",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    // console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    // console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    // console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    // console.log('[UPDATE App.js] Insite componentDitUpdate');
  }

  // If contructor are there better to initialise there.
  /* state = {
    persons: [
      { id:1, name: 'Abhishek', age: 24 },
      { id:2, name: 'Sumit', age: 27 },
      { id:3, name: 'Yash', age: 19 }
    ],
    otherProperty : "Some Other variable",
    showPersons: false
  } */

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
    const doesShow = this.state.showPersons;

    /* 
     * better approach to set state
     * this.setState({showPersons: !doesShow}); 
    */

    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  authenticationHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    // console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        isAuthenticated={this.state.authenticated}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Person</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          login={this.authenticationHandler}
          clicked={this.togglePersonhandler} />

        {persons}
      </Aux>
    );

    /*
     * Another JS way to render html using pure ReactJs.
     * Its Better to use Jsx, as it is simple and easy to understand.
     */  
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I am React App.'));
  }
}

export default withClass(App, classes.App);
