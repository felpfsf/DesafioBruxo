import styled from "styled-components";

export const CharacterCard = ({ character }) => {
  const { alive, ancestry, house, image, name, wand } = character;
  // console.log(wand.core)
  const capitalize = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase())
  }

  const core = wand.core && capitalize(wand.core)
  return (
    <CardContainer house={house}>
      <ProfilePicture house={house}>
        <img
          src={image ? image : "/images/wizard.png"}
          alt={`Foto de ${name}`}
        />
      </ProfilePicture>
      <CharacterInfo>
        <h1>{name}</h1>
        <h2>{house}</h2>
        <p>{ancestry}</p>
        {wand.wood != "" || wand.core != "" || wand.length != null ? (
          <WandContainer>
            <h1>Wand</h1>
            <div>
              <span>{wand.wood && wand.wood}</span>
              <span>{core}</span>
              <span>{wand.length && `${wand.length}' inches`}</span>
            </div>
          </WandContainer>
        ) : null}
      </CharacterInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: auto;

  color: ${({ theme }) => theme.text};

  margin: 20px;

  padding: 4px;

  background-color: ${({ theme, house }) => theme[house] || theme.default};

  border-radius: ${({ theme }) => theme.small};

  box-shadow: 2px 2px 10px #333;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 18.75rem;
    height: 25rem;

    flex-direction: column;
    justify-content: center;
  }
`;

const ProfilePicture = styled.div`
  width: 20%;
  height: 70%;

  /* margin-bottom: 8px; */

  border-radius: 50%;
  border: 4px solid;
  border-color: ${({ theme, house }) =>
    theme[`${house}Accent`] || theme.default};

  overflow: hidden;

  box-shadow: 2px 2px 10px #333;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    width: 70%;
    height: 70%;
  }
`;

const CharacterInfo = styled.div`
  text-align: center;

  margin-top: 4px;
  margin-bottom: 8px;

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  & h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  & p {
    font-size: 12px;
    text-transform: capitalize;
  }

  flex: 1;
`;

const WandContainer = styled.div`
  position: relative;

  margin-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media ${({ theme }) => theme.devices.tablet} {
    gap: 8px;
    ::before {
      content: "";
      position: absolute;

      top: -6px;

      width: 100%;
      height: 1px;

      background-color: rgb(240 248 255 /0.4);
    }
  }

  & h1 {
    font-size: 16px;
    font-weight: 600;
  }

  & span, span::first-letter {
    font-size: 14px;
    text-transform: capitalize;

    margin-left: 8px;
  }
`;
