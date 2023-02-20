import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SlArrowUpCircle } from 'react-icons/sl'
import { VscArrowUp } from 'react-icons/vsc'

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 750) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showButton ?
        <ScrollToTopButton onClick={handleScrollToTop}>
          <VscArrowUp style={{ width: '100%', height: '100%' }} color={'goldenrod'} />
        </ScrollToTopButton>
        : null}
    </>
  )
}

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 32px;
  z-index: 10;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 100%;
  border: none;

  cursor: pointer;

  animation: translate 0.5s ease-in-out;

  @keyframes translate {
  0% {
    transform: translateY(100%);
  }  
  100% {
    transform: translateY(0);
  }  
}
`
