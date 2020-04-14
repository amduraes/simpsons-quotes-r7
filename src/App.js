import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes') //requests data
      .then((response) => response.data) //extracts data
      //updates state
      .then((data) => {
        this.setState({
          card: data[0],
        });
      });
  };

  render() {
    return (
      <>
        <div className='App'>
          {this.state.card ? (
            <QuoteCard card={this.state.card} />
          ) : (
            <h1>
              {' '}
              <b>Nope, nothing.</b>{' '}
            </h1>
          )}
        </div>
        <button type='button' onClick={this.getQuote}>
          New Quote
        </button>
      </>
    );
  }
}

export default App;
