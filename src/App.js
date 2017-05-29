import React, { Component } from 'react';
import Form from './Form';
import Form2 from './Form2';
import { Button } from 'mx-react-components';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      renderStepOne: true
    }
  }

  render() {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        {this.state.renderStepOne ? (
          <div style={styles.formContainer}>
            <Form placeholder='First Form'/>
            <Button onClick={() => this.setState({renderStepOne: false})}>Next</Button>
          </div>
        ) : (
          <div style={styles.formContainer}>
            <Form2 placeholder='Second Form'/>
            <Button onClick={() => this.setState({renderStepOne: true})}>Back to First Form</Button>
          </div>
        )}
      </div>
    );
  }

  styles = () => {
    return {
      container: {
        display: 'flex',
        padding: 50,
        justifyContent: 'center'
      },
      formContainer: {
        padding: 10,
        border: '1px solid gray',
        display: 'flex',
        flexDirection: 'column'
      },
    }
  }
}

export default App;
