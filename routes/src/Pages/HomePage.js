import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/list/pokemons')}>
        Ir para Lista de Pokemons
      </button>
    </div>
  )
}

export default HomePage
