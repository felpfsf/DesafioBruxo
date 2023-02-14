import { useEffect, useState } from "react"
import styled from "styled-components"

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
          Top
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

width: 3rem;
height: 3rem;

border-radius: 100%;

cursor: pointer;
`