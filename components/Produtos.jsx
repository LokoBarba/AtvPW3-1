import React, { useState } from 'react';
import TabelaProdutos from './TabelaProdutos';
import TabelaPrecos from './TabelaPrecos';

const Produtos = () => {
  const [produtos] = useState([
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Teclado', preco: 150 },
    { nome: 'Mouse', preco: 80 },
    { nome: 'Mousepad', preco: 300 },
    { nome: 'Headset', preco: 600 },
    { nome: 'Pc Gamer', preco: 8000 },
    { nome: 'Fone Gamer', preco: 120 },
  ]);

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <div>
      <TabelaProdutos produtos={produtos} onSelecionar={setProdutoSelecionado} />
      <TabelaPrecos produto={produtoSelecionado} />
    </div>
  );
};

export default Produtos;
