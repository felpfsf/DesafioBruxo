import styled from "styled-components"
import { useSelectHouseAndAncestryStore } from "../hooks/useSelectHouseAndAncestryStore"

export const Navbar = () => {
  const { selectedAncestry, selectedHouse, setSelectedAncestry, setSelectedHouse } = useSelectHouseAndAncestryStore()

  const handleSelectedHouse = (e) => {
    console.log(e.target.value)
    setSelectedHouse(e.target.value)
  }

  const handleSelectedAncestry = (e) => {
    console.log(e.target.value)
    setSelectedAncestry(e.target.value)
  }
  return (

    <NavbarContainer>
      <h1>Desafio Bruxo</h1>
      <nav>
        <select value={selectedHouse} onChange={handleSelectedHouse}>
          <option value="all">Todos</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
        <select value={selectedAncestry} onChange={handleSelectedAncestry}>
          <option value="all">Todos</option>
          <option value="pure-blood">Puro-Sangue</option>
          <option value="half-blood">Mestiço</option>
          <option value="muggleborn">Nascido Trouxa</option>
          <option value="squib">Cepa torta</option>
          <option value="muggle">Trouxa</option>
        </select>
      </nav>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  max-width: 1750px;
  width: 100%;

  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`