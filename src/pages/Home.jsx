import { useState } from "react"
import styled from "styled-components"
import { CharacterCard } from "../components/CharacterCard"
import { Loading } from "../components/Loading/Loading"
import { useFecthCharacters } from "../hooks/useFetchCharacters"

export const Home = () => {
  const { data: characters, error, loading } = useFecthCharacters('https://hp-api.onrender.com/api/characters')

  const [charactersToShow, setCharactersToShow] = useState(10)

  const handleShowMore = () => {
    setCharactersToShow(charactersToShow + 10)
  }

  // const char = characters[2]
  // console.log(char)

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <CharactersList>
      {characters.slice(0, charactersToShow).map(character => (
        <CharacterCard character={character} />
      ))}
      <button onClick={handleShowMore}>Exibir Mais</button>
    </CharactersList>
  )
}

const CharactersList = styled.main`
  max-width: 1750px;
  width: 100%;

  margin: auto;

padding-bottom: 4px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`