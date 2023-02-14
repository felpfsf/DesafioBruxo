import styled from "styled-components"
import { LoadingSpinner } from "./LoadingSpinner"

export const Loading = () => {
  return (
    <Container>
      <LoadingSpinner />
      Carregando...
    </Container>
  )
}

const Container = styled.div`
  margin-top: 25vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`