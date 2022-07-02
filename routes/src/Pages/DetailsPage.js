import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailsPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/list/pokemons')}>
        Ir para Lista de Pokemons
      </button>
      <button onClick={() => navigate('/pokedex')}>Ir para a Pokedex</button>
      <button onClick={() => navigate('/teste')}>
        Ir para a Página de Testes
      </button>
    </div>
  )
}

export default DetailsPage
