import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListPokemonsPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/pokedex')}>Ir para a Pokedex</button>
      <button onClick={() => navigate('/detail/pokemon')}>
        Ver detalhes dos Pokemons
      </button>
      <button onClick={() => navigate('/')}>Ir para a Home</button>
    </div>
  )
}

export default ListPokemonsPage
