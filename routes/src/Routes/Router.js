import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from '../Pages/DetailsPage'
import HomePage from '../Pages/HomePage'
import ListPokemonsPage from '../Pages/ListPokemonsPage'
import PokedexPage from '../Pages/PokedexPage'
import TestePage from '../Pages/TestePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/list/pokemons'} element={<ListPokemonsPage />} />
        <Route path={'/pokedex'} element={<PokedexPage />} />
        <Route path={'/detail/pokemon'} element={<DetailsPage />} />
        <Route path={'/teste'} element={<TestePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
