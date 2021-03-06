import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'

import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  NavHeader,
  NavContent,
  NavMobileLogoContainer,
  NavMenuMobile,
  NavbarLargeContainer,
  NavMenuLarge,
  ThemeButton,
  WebsiteLogo,
  NavMenuItem,
  ProfileImage,
  PopupContainer,
  LogoutButtonMobile,
  LogoutButtonLarge,
  LogoutWarning,
  LogoutMessage,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  SidebarMobile,
  MenuCloseButton,
  TabsContainer,
  TabItem,
  TabLink,
  TabText,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme, tabsList, toggleTheme} = value
        const {pathname} = props.location

        const buttonIcon = lightTheme ? (
          <FaMoon size="30px" />
        ) : (
          <FiSun size="30px" color="#ffffff" />
        )

        const logoUrl = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        const renderLogoutPopup = button => (
          <Popup modal trigger={button} className="popup-content">
            {close => (
              <LogoutWarning lightTheme={lightTheme}>
                <LogoutMessage>Are you sure, you want to logout</LogoutMessage>
                <ButtonsContainer>
                  <CancelButton type="button" onClick={() => close()}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onClickLogout}>
                    Confirm
                  </ConfirmButton>
                </ButtonsContainer>
              </LogoutWarning>
            )}
          </Popup>
        )

        const renderTabsSidebar = button => (
          <Popup modal trigger={button} className="popup-content">
            {close => (
              <PopupContainer>
                <SidebarMobile light={lightTheme}>
                  <MenuCloseButton type="button" onClick={() => close()}>
                    <MdClose
                      size="40"
                      color={lightTheme ? '#272727' : '#ffffff'}
                    />
                  </MenuCloseButton>
                  <TabsContainer>
                    <TabItem
                      isActive={pathname === tabsList[0].tabId}
                      lightTheme={lightTheme}
                    >
                      <TabLink to="/" onClick={() => close()}>
                        <AiFillHome
                          size="20"
                          color={
                            pathname === tabsList[0].tabId
                              ? '#ff0000'
                              : '#606060'
                          }
                        />

                        <TabText
                          lighttheme={lightTheme ? '#272727' : '#ffffff'}
                          id={tabsList[0].tabId}
                          isactive={
                            pathname === tabsList[0].tabId ? '700' : '500'
                          }
                        >
                          {tabsList[0].displayText}
                        </TabText>
                      </TabLink>
                    </TabItem>
                    <TabItem
                      isActive={pathname === tabsList[1].tabId}
                      lightTheme={lightTheme}
                    >
                      <TabLink to="/trending" onClick={() => close()}>
                        <HiFire
                          size="20"
                          color={
                            pathname === tabsList[1].tabId
                              ? '#ff0000'
                              : '#606060'
                          }
                        />

                        <TabText
                          lighttheme={lightTheme ? '#272727' : '#ffffff'}
                          id={tabsList[1].tabId}
                          isactive={
                            pathname === tabsList[1].tabId ? '700' : '500'
                          }
                        >
                          {tabsList[1].displayText}
                        </TabText>
                      </TabLink>
                    </TabItem>
                    <TabItem
                      key={tabsList[2].tabId}
                      isActive={pathname === tabsList[2].tabId}
                      lightTheme={lightTheme}
                    >
                      <TabLink to="/gaming" onClick={() => close()}>
                        <SiYoutubegaming
                          size="20"
                          color={
                            pathname === tabsList[2].tabId
                              ? '#ff0000'
                              : '#606060'
                          }
                        />

                        <TabText
                          lighttheme={lightTheme ? '#272727' : '#ffffff'}
                          id={tabsList[2].tabId}
                          isactive={
                            pathname === tabsList[2].tabId ? '700' : '500'
                          }
                        >
                          {tabsList[2].displayText}
                        </TabText>
                      </TabLink>
                    </TabItem>
                    <TabItem
                      key={tabsList[3].tabId}
                      isActive={pathname === tabsList[3].tabId}
                      lightTheme={lightTheme}
                    >
                      <TabLink to="/saved-videos" onClick={() => close()}>
                        <MdPlaylistAdd
                          size="20"
                          color={
                            pathname === tabsList[3].tabId
                              ? '#ff0000'
                              : '#606060'
                          }
                        />

                        <TabText
                          lighttheme={lightTheme ? '#272727' : '#ffffff'}
                          id={tabsList[3].tabId}
                          isactive={
                            pathname === tabsList[3].tabId ? '700' : '500'
                          }
                        >
                          {tabsList[3].displayText}
                        </TabText>
                      </TabLink>
                    </TabItem>
                  </TabsContainer>
                </SidebarMobile>
              </PopupContainer>
            )}
          </Popup>
        )

        const onClickTheme = () => {
          if (lightTheme === true) {
            toggleTheme(true)
          } else {
            toggleTheme(false)
          }
        }

        return (
          <NavHeader lightTheme={lightTheme}>
            <NavContent>
              <NavMobileLogoContainer>
                <Link to="/">
                  <WebsiteLogo src={logoUrl} alt="website logo" />
                </Link>
                <NavMenuMobile>
                  <NavMenuItem key="theme">
                    <ThemeButton
                      type="button"
                      data-testid="theme"
                      onClick={onClickTheme}
                    >
                      {buttonIcon}
                    </ThemeButton>
                  </NavMenuItem>
                  <NavMenuItem key="menu">
                    {renderTabsSidebar(
                      <ThemeButton type="button" data-testid="theme">
                        <GiHamburgerMenu
                          size="30"
                          color={lightTheme ? '#000000' : '#ffffff'}
                        />
                      </ThemeButton>,
                    )}
                  </NavMenuItem>
                  <NavMenuItem key="logout mobile">
                    {renderLogoutPopup(
                      <LogoutButtonMobile type="button">
                        <FiLogOut
                          size="30px"
                          color={lightTheme ? '#000000' : '#ffffff'}
                        />
                      </LogoutButtonMobile>,
                    )}
                  </NavMenuItem>
                </NavMenuMobile>
              </NavMobileLogoContainer>

              <NavbarLargeContainer>
                <Link to="/">
                  <WebsiteLogo src={logoUrl} alt="website logo" />
                </Link>
                <NavMenuLarge>
                  <NavMenuItem key="theme">
                    <ThemeButton
                      type="button"
                      data-testid="theme"
                      onClick={onClickTheme}
                    >
                      {buttonIcon}
                    </ThemeButton>
                  </NavMenuItem>

                  <NavMenuItem key="profile">
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavMenuItem>
                  <NavMenuItem key="logoutlg">
                    {renderLogoutPopup(
                      <LogoutButtonLarge type="button" light={lightTheme}>
                        Logout
                      </LogoutButtonLarge>,
                    )}
                  </NavMenuItem>
                </NavMenuLarge>
              </NavbarLargeContainer>
            </NavContent>
          </NavHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
