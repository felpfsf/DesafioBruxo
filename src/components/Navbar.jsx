import { useState } from "react"
import styled, { css } from "styled-components"
import { useSelectHouseAndAncestryStore } from "../hooks/useSelectHouseAndAncestryStore"
import { CustomSelect } from "./Select/Select"

export const Navbar = () => {
  const { setSelectedAncestry, setSelectedHouse } = useSelectHouseAndAncestryStore()
  const [currentHouseValue, setCurrentHouseValue] = useState('')
  const [currentAncestryValue, setCurrentAncestryValue] = useState('')

  const handleSelectedHouse = (value) => {
    // console.log(e.target.value)
    setSelectedHouse(value)
  }

  const handleSelectedAncestry = (value) => {
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



  const houseOptions = [
    { id: 1, value: 'all', label: "Todas as casas" },
    { id: 2, value: 'Gryffindor', label: "Gryffindor" },
    { id: 3, value: 'Slytherin', label: "Slytherin" },
    { id: 4, value: 'Ravenclaw', label: "Ravenclaw" },
    { id: 5, value: 'Hufflepuff', label: "Hufflepuff" },
  ]
  const ancestryOptions = [
    { id: 1, value: 'all', label: "Todos" },
    { id: 2, value: 'pure-blood', label: "Puro-Sangue" },
    { id: 3, value: 'half-blood', label: "Mestiço" },
    { id: 4, value: 'muggleborn', label: "Nascido Trouxa" },
    { id: 5, value: 'squib', label: "Cepa torta" },
    { id: 5, value: 'muggle', label: "Trouxa" },
  ]

  return (

    <NavbarContainer>
      <Logo>
        <img src="/images/logo.png" alt="" />
        <h1>Desafio Bruxo</h1>
      </Logo>
      <Nav>
        <CustomSelect options={houseOptions} currentValue={currentHouseValue} handleChangeValue={handleHouseChange} id="house-select" />

        <CustomSelect options={ancestryOptions} currentValue={currentAncestryValue} handleChangeValue={handleAncestryChange} id="ancestry-select" />
      </Nav>
    </NavbarContainer>
  )
}

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button`
  max-width: 8rem;
  
  padding: .375rem .5rem;
  
  background-color: #fff;

  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`

const DropdownStyle = styled.div`
  position: absolute;
  top: 4;
  left: 0;

  max-height: 40vmax;
  min-width: 8rem;

  padding: .5rem;

  background-color: ${({ theme }) => theme.background};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;

  transition: max-height .2s ease-in-out;

  ${props => props.isVisible !== true && css` max-height:40px; visibility:hidden`}
`

const DropdownItem = styled.div`
  width: 90%;

  margin: .15rem 0;

  padding: 0.3rem 0.5rem;
  
  display: flex;
  align-items: center;

  cursor: pointer;

  :hover{
    background-color: brown;
  }

  ${props => props.active && css`color:red; font-weight:600`}
`

const NavbarContainer = styled.div`
max-width: 1750px;
width: 100%;

margin: 1rem auto;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.div`
position: relative;
  
  & h1{
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
column-gap: 1rem;
`

const Select = styled.select`
width: 10rem;

padding: 2px 4px;

border: none;
border-radius: .5rem;

cursor: pointer;

  & option {
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.default};
  white-space: pre;
  cursor: pointer;
}
`