import styled from "styled-components";

export const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <ImageContainer>
        <img src='/images/sorting_hat-icon.png' alt='' />
      </ImageContainer>
      <Message>Nenhum personagem encontrado</Message>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  height: calc(100vh - 422px);

  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.devices.desktop} {
    height: calc(100vh - 391px);

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 64px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    width: 75%;
  }
`;

const Message = styled.h1`
  font-weight: 600;
  font-size: 18px;

  @media ${({ theme }) => theme.devices.desktop} {
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;
