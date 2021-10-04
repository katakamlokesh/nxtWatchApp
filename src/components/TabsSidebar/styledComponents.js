import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const TabsSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 100vh;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#231f20')};
  margin: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 992px) {
    width: 20%;
    margin: 0;
  }
`

export const TabsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    justify-content: flex-start;
  }
`
export const TabItem = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  line-height: 1;
  background-color: ${props =>
    props.isActive && (props.lightTheme ? '#f4f4f4' : '#606060')};
`
export const TabIconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  margin-right: 16px;
  display: flex;
  align-items: center;
`

export const TabLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 150px;
  color: ${props => props.lighttheme};
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 100%;
  }
`

export const TabText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 18px;
  color: ${props => props.lighttheme};
  font-weight: ${props => props.isactive};
`

export const ContactUsContainer = styled.div`
  background-color: transparent;
  margin: 16px;
`
export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#383838' : '#ffffff')};
`
export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#383838' : '#ffffff')};
`
