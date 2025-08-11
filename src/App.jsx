import { useState } from 'react'
import '../assets/style.css';
import Cabecalho from '../components/Cabecalho';
import TabelaBoardGames from '../components/TabelaBoardGames';
import Footer from '../components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Cabecalho />
    </div>
    
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Board Games</h1>
      <TabelaBoardGames />
      <Footer />
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

