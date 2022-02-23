import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../services/books';

import Info from './Info';

import { Container } from './styles';

function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState();

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
        </Container>
      )}
    </>
  );
}

export default BookDetails;
