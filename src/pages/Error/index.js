import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Error() {
  return (
    <PageDefault>
      <h1>Página não encontrada!</h1>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default Error;
