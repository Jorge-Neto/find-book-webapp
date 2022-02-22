import React, { useEffect } from 'react';

import Quagga from 'quagga';

import { validateIsbn } from '../../services/books';

import { Video } from './styles';

function Main() {
  let scannerAttemps = 0;
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    const isbn = result.codeResult.code;
    if (validateIsbn(isbn)) {
      alert(`ISBN válido`, isbn);
    } else if (scannerAttemps >= 5) {
      alert('Não é possível ler o código do livro');
    }

    scannerAttemps += 1;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            }, // Or '#yourElement' (optional)
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('Inicialização completa. Pronto para começar');
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);
  return <Video id="video" />;
}

export default Main;
