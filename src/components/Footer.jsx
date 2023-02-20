import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>Desafio Bruxo</h1>
        <h3>Um compêndio de seus bruxos favoritos</h3>
        <p>
          <a
            href='https://github.com/felpfsf/DesafioBruxo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Desafio Bruxo &copy; 2022
          </a>
          {" "}- Desenvolvido por{" "}
          <a
            href='https://github.com/felpfsf'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Felipe F
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 1.5rem;

  background-color: #262a31;

  & div {
    max-width: 1740px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  & h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  & h3,
  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  & a {
    font-weight: 600;
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }
`;
