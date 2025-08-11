import React from 'react';

const TabelaPrecos = ({ produto }) => {
  if (!produto) return <p>Selecione um produto para ver o preço.</p>;

  return (
    <div>
      <h2>Preço</h2>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaPrecos;
