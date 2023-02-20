import styled from "styled-components";

export const CharacterCard = ({ character }) => {
  const { alive, ancestry, gender, house, image, name, wand } = character;
  // console.log(wand.core)
  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const core = wand.core && capitalize(wand.core);
  return (
    <CardContainer house={house}>
      <ProfilePicture house={house}>
        <img
          src={image ? image : "/images/wizard.png"}
          alt={`Foto de ${name}`}
        />
        {!alive && (
          <StatusInfo>
            <p>{gender === 'male' ? 'Morto' : 'Morta'}</p>
            <StatusOverlay />
          </StatusInfo>
        )}
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

  margin: 1.25rem;

  padding: .25rem;

  background-color: ${({ theme, house }) => theme[house] || theme.default};

  border-radius: ${({ theme }) => theme.small};

  box-shadow: 2px 2px 10px #333;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 18.75rem;
    height: 25rem;

    padding-block: .5rem;

    flex-direction: column;
    justify-content: center;
  }
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 20%;
  height: 70%;

  border-radius: 50%;
  border: .25rem solid;
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

const StatusInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & p {
    font-size: clamp(0.875rem, 0.7120rem + 0.7246vw, 1.5rem);
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.text};
    z-index: 2;

    padding-bottom: 24px;
  }
`;

const StatusOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  background-color: rgb(107 107 107 / 0.6);
`;

const CharacterInfo = styled.div`
  text-align: center;

  margin-top: .25rem;
  margin-bottom: .5rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  & h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  & p {
    font-size: .75rem;
    text-transform: capitalize;
  }

  flex: 1;
`;

const WandContainer = styled.div`
  position: relative;

  margin-top: .5rem;

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

      top: -.1875rem;

      width: 100%;
      height: .0625rem;

      background-color: rgb(240 248 255 /0.4);
    }
  }

  & h1 {
    font-size: 1rem;
    font-weight: 600;
  }

  & span,
  span::first-letter {
    font-size: .875rem;
    text-transform: capitalize;

    margin-left: .5rem;
  }
`;
