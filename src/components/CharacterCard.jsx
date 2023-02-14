import styled from 'styled-components'

export const CharacterCard = ({ character }) => {
  const { ancestry, house, image, name, wand } = character
  console.log(wand)
  return (
    <CardContainer house={house}>
      <ProfilePicture house={house}>
        <img
          src={image ? image : '/images/wizard.png'}
          alt={`Foto de ${name}`}
        />
      </ProfilePicture>
      <CharacterInfo>
        <h1>{name}</h1>
        <p>{ancestry}</p>
      </CharacterInfo>
      {wand.wood != '' || wand.core != '' || wand.length != null ?
        (
          <WandContainer>
            <h1>Wand</h1>

            <div>
              <span>{wand.wood && wand.wood}</span>
              <span>{wand.core && wand.core}</span>
              <span>{wand.length && `${wand.length}' inches`}</span>
            </div>
          </WandContainer>
        )
        :
        null
      }
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 18.75rem /* 300px -> 18.75rem */;
  height: 25rem /* 400px -> 25rem */;

  color: ${({ theme }) => theme.text};

  margin: 20px;

  padding: 4px;

  background-color: ${({ theme, house }) => theme[house] || theme.default};

  border-radius: ${({ theme }) => theme.small};

  box-shadow: 2px 2px 10px #333;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 4px; */
`

const ProfilePicture = styled.div`
  width: 70%;
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
`

const CharacterInfo = styled.div`
  text-align: center;
  
  margin-top: 4px;
  margin-bottom: 8px;

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  & p {
    font-size: 12px;
  }
`

const WandContainer = styled.div`
  position: relative;
  
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ::before {
    content: '';
    position: absolute;

    top: -6px;

    width: 100%;
    height:1px;
    
    background-color: rgb(240 248 255 /.4);
  }

  & h1 {
    font-size: 18px;
    font-weight: 600;
  }

  & span {
    text-transform: capitalize;

    margin-left: 8px;
  }
`
