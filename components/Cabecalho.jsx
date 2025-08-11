import React from 'react';
import Geek from '../assets/geek.jpg'
import Produtos from './Produtos';

const Cabecalho = () => {
  
  return (
    <div>
      
    <img src={Geek} alt="Imagem Geek" />
      <h1>Bem vindos ao Nerdolas Geek Cheirosos</h1>
      <br /><br />
      <h2>Gestão de Produtos</h2>
      <Produtos />
    </div>
    
  );
};

export default Cabecalho;
