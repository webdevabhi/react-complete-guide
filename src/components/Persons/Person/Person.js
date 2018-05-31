import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  constructor(props) {
    super(props);
    // console.log('[Person.js] Inside Constructor', props);
    this.inputElement  = React.createRef();
  }

  componentWillMount() {
    // console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    // console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    // console.log('[Person.js] Inside render');
    return (
      <Aux>
        {this.props.authenticated ? <p>I am Authenticated !</p> : null}
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
        {this.props.children}

        <input 
          ref={this.inputElement}
          type="tex" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    );
    /* return [
      <p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>,
      <p key="2">{this.props.children}</p>,
      <input key="3" type="tex" onChange={this.props.changed} value={this.props.name} />
    ] */
  }
};

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);