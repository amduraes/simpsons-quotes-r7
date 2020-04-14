import React from 'react';
import './QuoteCard.css';

function QuoteCard({ card }) {
  return (
    <figure className='QuoteCard'>
      <img src={card.image} alt={card.character} />
      <figcaption>
        <blockquote>{card.quote}</blockquote>
        <cite>{card.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
