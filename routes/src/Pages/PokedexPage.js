import React from 'react'
import { useNavigate } from 'react-router-dom'

const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/list/pokemons')}>
        Ir para a Lista de Pokemons
      </button>
      <button onClick={() => navigate('/teste')}>
        Ir para a Página de Testes
      </button>
      <button onClick={() => navigate('/')}>Ir para a Home</button>
    </div>
  )
}

export default PokedexPage
