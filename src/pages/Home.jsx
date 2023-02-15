import { useEffect, useState } from 'react'
import { useSelectHouseAndAncestryStore } from '../hooks/useSelectHouseAndAncestryStore'
import { useFecthCharacters } from '../hooks/useFetchCharacters'

import styled from 'styled-components'
import { CharacterCard } from '../components/CharacterCard'
import { Loading } from '../components/Loading/Loading'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'

export const Home = () => {
  const { data: characters, loading } = useFecthCharacters(
    'https://hp-api.onrender.com/api/characters'
  )
  const [charactersToShow, setCharactersToShow] = useState(10)
  const [filteredCharacters, setFilteredCharacters] = useState([])

  const handleShowMore = () => {
    setCharactersToShow(charactersToShow + 10)
  }

  const { selectedAncestry, selectedHouse, search } =
    useSelectHouseAndAncestryStore()

  useEffect(() => {
    setFilteredCharacters(
      characters
        .filter(
          character =>
            selectedHouse === 'all' || character.house === selectedHouse
        )
        .filter(
          character =>
            selectedAncestry === 'all' ||
            character.ancestry === selectedAncestry
        )
        .filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
    )
  }, [characters, selectedHouse, selectedAncestry, search])

  if (loading) {
    return <Loading />
  }

  return (
    <HomeContainer>
      <CharactersList>
        {filteredCharacters.length ? (
          filteredCharacters
            .slice(0, charactersToShow)
            .map(character => (
              <CharacterCard key={character.id} character={character} />
            ))
        ) : (
          <ErrorMessage />
        )}
      </CharactersList>
      <ShowMoreButton
        onClick={handleShowMore}
        style={{
          display:
            charactersToShow >= filteredCharacters.length ? 'none' : 'block'
        }}>
        Exibir Mais
      </ShowMoreButton>
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

const ShowMoreButton = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  text-decoration: underline;
  text-underline-offset: 8px;

  background-color: transparent;

  border: none;
  border-radius: 8px;

  padding: 8px 16px;
  
  cursor: pointer;
`
