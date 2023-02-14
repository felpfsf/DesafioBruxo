import { useEffect, useState } from "react"
import styled, { css } from "styled-components"

export const CustomSelect = ({ options, currentValue, handleChangeValue, id }) => {
  const [open, setOpen] = useState(false)

  const handleOpenSelect = () => {
    setOpen(prev => !prev)
  }

  const handleOnClick = (value, label) => {
    handleChangeValue(value, label)
    handleOpenSelect()
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && !e.target.closest(`#${id}`)) {
        handleOpenSelect()
      }
    }

    document.body.addEventListener('click', handleOutsideClick)
    return () => { document.body.removeEventListener('click', handleOutsideClick) }

  }, [open])

  return (
    <SelectContainer id={id}>
      <SelectLabelButton onClick={handleOpenSelect}>
        {currentValue === '' ?
          id.includes('house') ? 'Casa' : 'Ancestralidade'
          :
          currentValue
        }
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {options.map(({ id, value, label }) => (
          <DropdownItem key={`${id}_${value}`} value={value} onClick={() => handleOnClick(value, label)}>{label}</DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button`
  width: 8rem;
  
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