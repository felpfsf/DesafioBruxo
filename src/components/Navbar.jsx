import { useState } from 'react'
import styled, { css } from 'styled-components'
import { useSelectHouseAndAncestryStore } from '../hooks/useSelectHouseAndAncestryStore'
import { Search } from './Search'
import { CustomSelect } from './Select/Select'

export const Navbar = () => {
  const { setSelectedAncestry, setSelectedHouse, search, setSearch } =
    useSelectHouseAndAncestryStore()
  const [currentHouseValue, setCurrentHouseValue] = useState('')
  const [currentAncestryValue, setCurrentAncestryValue] = useState('')

  const handleSelectedHouse = value => {
    // console.log(e.target.value)
    setSelectedHouse(value)
  }

  const handleSelectedAncestry = value => {
    // console.log(e.target.value)
    setSelectedAncestry(value)
  }

  const handleHouseChange = (value, label) => {
    // console.log(value)
    handleSelectedHouse(value)
    setCurrentHouseValue(label)
  }

  const handleAncestryChange = (value, label) => {
    // console.log(value)
    handleSelectedAncestry(value)
    setCurrentAncestryValue(label)
  }

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const houseOptions = [
    { id: 1, value: 'all', label: 'Todas as casas' },
    { id: 2, value: 'Gryffindor', label: 'Gryffindor' },
    { id: 3, value: 'Slytherin', label: 'Slytherin' },
    { id: 4, value: 'Ravenclaw', label: 'Ravenclaw' },
    { id: 5, value: 'Hufflepuff', label: 'Hufflepuff' }
  ]
  const ancestryOptions = [
    { id: 1, value: 'all', label: 'Todos' },
    { id: 2, value: 'pure-blood', label: 'Puro-Sangue' },
    { id: 3, value: 'half-blood', label: 'Mestiço' },
    { id: 4, value: 'muggleborn', label: 'Nascido Trouxa' },
    { id: 5, value: 'squib', label: 'Cepa torta' },
    { id: 5, value: 'muggle', label: 'Trouxa' }
  ]

  return (
    <NavbarContainer>
      <Logo>
        <img src='/images/logo.png' alt='Desafio Bruxo Logo' />
      </Logo>
      <Nav>
        <CustomSelect
          options={houseOptions}
          currentValue={currentHouseValue}
          handleChangeValue={handleHouseChange}
          id='house-select'
        />

        <CustomSelect
          options={ancestryOptions}
          currentValue={currentAncestryValue}
          handleChangeValue={handleAncestryChange}
          id='ancestry-select'
        />

        <Search value={search} handleSearch={handleSearch} />
      </Nav>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  max-width: 1740px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.devices.desktop} {
  margin: 1rem auto;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`

const Logo = styled.div`
  position: relative;

  & h1 {
    position: absolute;
    top: 80%;
    right: -72px;

    font-size: ${({ theme }) => theme.large};
    font-weight: 600;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: .375rem;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme }) => theme.devices.desktop} {
    margin-right: 1.5rem;
  gap: 1rem;

  }
`