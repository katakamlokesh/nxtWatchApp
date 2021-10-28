import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    width: 75%;
    height: 100vh;
  }
  @media screen and (min-width: 992px) {
    width: 80%;
    height: 100vh;
  }
`
export const NotFoundImage = styled.img`
  width: 350px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.light ? '#171f46' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 24px;
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.light ? '#64748b' : '#f1f5f9')};
  font-family: 'Roboto';
  font-size: 18px;
`
