import styled, { keyframes } from "styled-components"

export const LoadingSpinner = () => {
  return (
    <Spinner></Spinner>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`

const Spinner = styled.span`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  border-top: 2px solid gainsboro;
  border-right: 2px solid gainsboro;
  border-bottom: 2px solid gainsboro;
  border-left: 2px solid black;

  background: transparent;

  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
`