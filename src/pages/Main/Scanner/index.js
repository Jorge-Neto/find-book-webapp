/* eslint-disable no-alert */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import Quagga from 'quagga';

import { validateIsbn } from '../../../services/books';

import { Video, Container, ScanMarker } from './styles';

const Scanner = ({ onScan }) => {
  let scannerAttemps = 0;
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    const isbn = result.codeResult.code;
    if (validateIsbn(isbn)) {
      onScan(isbn);
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
          numOfWorkers: 4,
          locate: true,
          decoder: {
            readers: ['ean_reader', 'code_128_reader'],
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
  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src="../../../assets/images/qr-scan-0.svg"
            alt="Marca para leitura de código"
            width="260"
            height="260"
          />
          <p className="label">Aponte para o código de barras do livro</p>
        </ScanMarker>
      </Container>
    </>
  );
};

export default Scanner;

Scanner.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onScan: PropTypes.func,
};
