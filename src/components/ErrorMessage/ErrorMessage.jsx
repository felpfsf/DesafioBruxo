import styled from 'styled-components'

export const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <div>
        <img src='/images/sorting_hat-icon.png' alt='' />
      </div>
      <Message>Nenhum personagem encontrado</Message>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  position: relative;

  margin: 2rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    width: 50%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Message = styled.h1`
  position: absolute;
  font-weight: 600;
  font-size: 18px;

  bottom: -16px;

  @media ${({ theme }) => theme.devices.desktop} {
    position: relative;
    font-size: ${({ theme }) => theme.large};
  }
`
