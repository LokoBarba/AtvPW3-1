import React from 'react';

const TabelaProdutos = ({ produtos, onSelecionar }) => {
  return (
    <div>
      <h2>Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index} onClick={() => onSelecionar(produto)}>
              <td>{produto.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
