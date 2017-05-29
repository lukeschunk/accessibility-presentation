import React, { Component } from 'react';

class Form extends Component {
  render() {
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
