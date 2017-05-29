import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount () {
    this._topItem.focus()
  }

  _handleLocationChange = (searchParam) => {
    window.location = 'https://www.google.com/search?q=google+images&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjK_8H38pXUAhXJxlQKHRk9BjEQ_AUICigB&biw=1440&bih=694#tbm=isch&q=' + searchParam
  }

  render() {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        <div
          className='divRow'
          onClick={this._handleLocationChange.bind(null, 'raccoon')}
          ref={ref => this._topItem = ref}
          style={styles.row}
        >
          Cool raccoon pics
        </div>

        <div
          className='divRow'
          onClick={this._handleLocationChange.bind(null, 'eagle')}
          style={styles.row}
        >
          Cool eagle pics
        </div>

        <div
          className='divRow'
          onClick={this._handleLocationChange.bind(null, 'shark')}
          style={styles.row}
        >
          Cool shark pics
        </div>

        <div
          className='divRow'
          onClick={this._handleLocationChange.bind(null, 'kitten')}
          style={Object.assign({}, styles.row, { borderBottom: '1px solid gray'})}
        >
          Cool kitten pics
        </div>
      </div>
    );
  }

  styles = () => {
    return {
      container: {
        display: 'flex',
        padding: 50,
        justifyContent: 'center',
        flexDirection: 'column'
      },
      row: {
        padding: 10,
        border: '1px solid gray',
        borderBottom: 0,
        cursor: 'pointer'
      },
    }
  }
}

export default App;
