import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { CharacterCard } from "../components/CharacterCard"
import { Loading } from "../components/Loading/Loading"
import { useFecthCharacters } from "../hooks/useFetchCharacters"
import { useSelectHouseAndAncestryStore } from "../hooks/useSelectHouseAndAncestryStore"

export const Home = () => {
  const { data: characters, error, loading } = useFecthCharacters('https://hp-api.onrender.com/api/characters')

  const [charactersToShow, setCharactersToShow] = useState(10)

  const handleShowMore = () => {
    setCharactersToShow(charactersToShow + 10)
  }

  // const char = characters[2]
  // console.log(char)




  const { selectedAncestry, selectedHouse } = useSelectHouseAndAncestryStore()
  const [filteredCharacters, setFilteredCharacters] = useState([])

  // console.log('Home ->', selectedHouse)
  // console.log('Home ->', selectedAncestry)

  useEffect(() => {
    setFilteredCharacters(characters
      .filter(character => selectedHouse === 'all' || character.house === selectedHouse)
      .filter(character => selectedAncestry === 'all' || character.ancestry === selectedAncestry))
  }, [characters, selectedHouse, selectedAncestry])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <HomeContainer>

      <CharactersList>
        {filteredCharacters
          .slice(0, charactersToShow).map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </CharactersList>
      <button onClick={handleShowMore} style={{ display: charactersToShow >= filteredCharacters.length ? 'none' : 'block' }}>Exibir Mais</button>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  max-width: 1740px;
  width: 100%;

  margin: auto;

  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CharactersList = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`