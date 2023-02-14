import styled from "styled-components"

export const Search = ({ value, handleSearch }) => {
  return (
    <Input type="text" value={value} placeholder="Pesquise pelo nome" onChange={handleSearch} />
  )
}

const Input = styled.input`
  width: 10rem;

  padding: .375rem .5rem;

  border-radius: .5rem;
`