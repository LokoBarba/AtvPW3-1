import { useState } from 'react'
import '../assets/style.css';
import Produtos from '../components/Produtos';
import TabelaBoardGames from '../components/TabelaBoardGames';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Gestão de Produtos</h1>
      <Produtos />
    </div>
    
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Board Games</h1>
      <TabelaBoardGames />
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App


import React from 'react';

