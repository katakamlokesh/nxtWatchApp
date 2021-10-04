import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#231f20')};
  align-items: center;
`
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
`
export const NavMobileLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavMenuMobile = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1110px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const NavMenuLarge = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavMenuItem = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`
export const ProfileImage = styled.img`
  height: 36px;
  width: 36px;
`

export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 0;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  height: 40px;
  width: 40px;
`

export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`
export const LogoutButtonMobile = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButtonLarge = styled.button`
  border: 1px solid ${props => (props.light ? '#3b82f6' : '#ffffff')};
  color: ${props => (props.light ? '#3b82f6' : '#ffffff')};
  background-color: transparent;
  padding: 8px 24px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutWarning = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${props => (props.lightTheme ? '#ffffff' : ' #383838')};
`
export const LogoutMessage = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #4f46e5;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 36px;
`

export const CancelButton = styled.button`
  color: #475569;
  padding: 8px 24px;
  border: 1px solid ${props => (props.lightTheme ? ' #475569' : '#f1f5f9')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  color: #f1f5f9;
  background-color: #3b82f6;
  border: none;
  padding: 8px 24px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`
export const SidebarMobile = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
`
export const MenuCloseButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  padding: 0;
  background-color: transparent;
  align-self: flex-end;
  margin: 60px;
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
