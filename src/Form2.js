import React, { Component } from 'react';
import { SimpleInput } from 'mx-react-components';

class Form extends Component {
  // componentDidMount () {
  //   this._firstInput.focus();
  // }

  render () {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        <input placeholder={this.props.placeholder} style={styles.input}/>
        <input placeholder={this.props.placeholder} style={styles.input}/>
        <input placeholder={this.props.placeholder} style={styles.input}/>
      </div>
    );
  }

  styles = () => {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column'
      },
      input: {
        marginBottom: 20
      }
    }
  }
}

export default Form;

// ref={ref => this._firstInput = ref}
