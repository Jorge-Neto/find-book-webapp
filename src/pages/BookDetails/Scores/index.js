import React from 'react';
import PropTypes from 'prop-types';

import { Container, Score, Value } from './styles';

import { calculateScore } from '../../../services/books';

const Scores = ({ book }) => (
  <Container>
    {book.scores &&
      book.scores.map((b) => (
        <Score scoreColor={calculateScore(b.value).color}>
          <Value scoreColor={calculateScore(b.value).color}>
            <span className="value">{b.value}</span>
          </Value>
          <span className="label">{b.name}</span>
        </Score>
      ))}
  </Container>
);

Scores.propTypes = {
  book: PropTypes.shape({
    scores: PropTypes.arrayOf({
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  }).isRequired,
};

export default Scores;
