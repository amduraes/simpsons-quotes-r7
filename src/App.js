import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

// const initialQuote = {
//   character: 'Frank Grimes',
//   quote:
//     'I live in a single room above a bowling alley...and below another bowling alley.',
//   image:
//     'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // card: intitialQuote,
      card: [],
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
          <QuoteCard card={this.state.card} />
        </div>
        <button type='button' onClick={this.getQuote}>
          New Quote
        </button>
      </>
    );
  }
}

export default App;
