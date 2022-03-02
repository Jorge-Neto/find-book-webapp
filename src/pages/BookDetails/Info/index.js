import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StarRatings from 'react-star-ratings';
import { MdArrowBack } from 'react-icons/md';

import { Container, Cover } from './styles';

const Info = ({ book }) => (
  <Container>
    <Link className="go-back" to="/">
      <MdArrowBack size={32} color="#2ecc71" />
    </Link>
    <Cover src={book.coverImage} />
    <h4 className="name">{book.name}</h4>
    <div className="book-rating">
      <StarRatings
        rating={book.rating}
        starRatedColor="#f1c40f"
        starDimension="18"
        starSpacing="0"
      />
      {` (${Number(book.rating).toFixed(1)})`}
    </div>
    <div className="price">
      <span className="discount">R$ {Number(book.price).toFixed(2)}</span> por{' '}
      <span>R$ {Number(book.promotionalPrice).toFixed(2)}</span>
    </div>
  </Container>
);

Info.propTypes = {
  book: PropTypes.shape({
    coverImage: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    promotionalPrice: PropTypes.number,
  }).isRequired,
};

export default Info;
