import styled from 'styled-components'

export const AddContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 24px;
  background-size: cover;
  height: 300px;
`
export const LogoAndCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const WebsiteAddLogo = styled.img`
  height: 40px;
  width: 160px;
`
export const AddDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
`
export const GetItNowButton = styled.button`
  border: 1px solid #231f20;
  color: #231f20;
  background-color: transparent;
  padding: 8px 16px;
  align-self: flex-start;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
`
export const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0px;
`
