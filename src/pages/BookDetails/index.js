import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../services/books';

import Info from './Info';
import GeneralScore from './GeneralScore';
import Scores from './Scores';
import Extra from './Extra';

import { Container } from './styles';

const BookDetails = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState({ isbn: null });

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      {book && (
        <Container>
          <Info book={book} />
          <GeneralScore book={book} />
          <Scores book={book} />
          <Extra book={book} />
        </Container>
      )}
    </>
  );
};

export default BookDetails;
