import React from 'react'
import { useNavigate } from 'react-router-dom'

const TestePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/detail/pokemon')}>
        Ver detalhes dos Pokemons
      </button>
      <button onClick={() => navigate('/pokedex')}>Ir para a Pokedex</button>
    </div>
  )
}

export default TestePage
