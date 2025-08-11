import React from 'react';

const ListaBoardGames = ({ jogos, onSelecionar }) => {
  return (
    <div>
      <h2>Lista de Board Games</h2>
      <ul>
        {jogos.map((jogo, index) => (
          <li
            key={index}
            style={{ cursor: 'pointer', marginBottom: 5 }}
            onClick={() => onSelecionar(jogo)}
          >
            {jogo.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaBoardGames;
