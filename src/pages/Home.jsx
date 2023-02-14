import { useContext, useState } from "react"
import styled from "styled-components"
import { SelectHouseAndAncestryContext } from "../App"
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

  const { selectedAncestry, selectedHouse } = useContext(SelectHouseAndAncestryContext)

  console.log('Home ->', selectedHouse)
  // console.log('Home ->', selectedAncestry)

  return (
    <HomeContainer>

      <CharactersList>
        {characters
          .filter(character => selectedHouse === 'all' || character.house === selectedHouse)
          .filter(character => selectedAncestry === 'all' || character.ancestry === selectedAncestry)
          .slice(0, charactersToShow).map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </CharactersList>
      <button onClick={handleShowMore}>Exibir Mais</button>
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