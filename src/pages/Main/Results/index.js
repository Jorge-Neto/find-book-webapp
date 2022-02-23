import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';

import { getBook } from '../../../services/books';

import { Container, Wrapper, Cover, Info, ActionButton } from './styles';

function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <Container>
      {book && (
        <Link to={`/book-details/${isbn}`}>
          <Wrapper>
            <Cover src={book.coverImage} />
            <Info>
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
                <span className="discount">
                  R$ {Number(book.price).toFixed(2)}
                </span>{' '}
                por <span>R$ {Number(book.promotionalPrice).toFixed(2)}</span>
              </div>
            </Info>
            <ActionButton>
              <span>
                <MdArrowForward size={32} color="#ffffff" />
              </span>
            </ActionButton>
          </Wrapper>
        </Link>
      )}
    </Container>
  );
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
