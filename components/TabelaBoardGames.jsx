import React, { useState } from 'react';
import ListaBoardGames from './ListaBoardGames';

const TabelaBoardGames = () => {
  const [boardGames] = useState([
    { nome: 'Catan', preco: 280 },
    { nome: 'Ticket to Ride', preco: 250 },
    { nome: '7 Wonders', preco: 220 },
    { nome: 'Dixit', preco: 200 },
  ]);

  const [selecionado, setSelecionado] = useState(null);

  return (
    <div>
      <h2>Escolha um Board Game:</h2>
      <ListaBoardGames jogos={boardGames} onSelecionar={setSelecionado} />

      {selecionado && (
        <div style={{ marginTop: '20px' }}>
          <h2>Detalhes do Produto</h2>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço (R$)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selecionado.nome}</td>
                <td id='preco'>{selecionado.preco.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TabelaBoardGames;
