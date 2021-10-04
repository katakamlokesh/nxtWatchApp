import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TabsSidebarContainer,
  TabsContainer,
  TabItem,
  TabLink,
  TabIconButton,
  TabText,
  ContactUsContainer,
  ContactUsHeading,
  SocialIconsContainer,
  SocialImage,
  ContactUsDescription,
} from './styledComponents'

const TabsSidebar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme, tabsList} = value

      const {pathname} = props.location

      const renderMenu = () => (
        <TabsContainer lightTheme={lightTheme}>
          <TabItem
            key={tabsList[0].tabId}
            isActive={pathname === tabsList[0].tabId}
            lightTheme={lightTheme}
          >
            <TabLink
              to="/"
              lighttheme={lightTheme ? '#272727' : '#ffffff'}
              id={tabsList[0].tabId}
            >
              <TabIconButton type="button" id={tabsList[0].tabId}>
                <span>
                  <AiFillHome
                    size="20"
                    color={
                      pathname === tabsList[0].tabId ? '#ff0000' : '#606060'
                    }
                    id={tabsList[0].tabId}
                  />
                </span>
                <TabText
                  lighttheme={lightTheme ? '#272727' : '#ffffff'}
                  id={tabsList[0].tabId}
                  isactive={pathname === tabsList[0].tabId ? '700' : '500'}
                >
                  {tabsList[0].displayText}
                </TabText>
              </TabIconButton>
            </TabLink>
          </TabItem>
          <TabItem
            key={tabsList[1].tabId}
            isActive={pathname === tabsList[1].tabId}
            lightTheme={lightTheme}
          >
            <TabLink
              to="/trending"
              lighttheme={lightTheme ? '#272727' : '#ffffff'}
              id={tabsList[1].tabId}
            >
              <TabIconButton type="button" id={tabsList[1].tabId}>
                <span>
                  <HiFire
                    size="20"
                    color={
                      pathname === tabsList[1].tabId ? '#ff0000' : '#606060'
                    }
                    id={tabsList[1].tabId}
                  />
                </span>
                <TabText
                  lighttheme={lightTheme ? '#272727' : '#ffffff'}
                  id={tabsList[1].tabId}
                  isactive={pathname === tabsList[1].tabId ? '700' : '500'}
                >
                  {tabsList[1].displayText}
                </TabText>
              </TabIconButton>
            </TabLink>
          </TabItem>
          <TabItem
            key={tabsList[2].tabId}
            isActive={pathname === tabsList[2].tabId}
            lightTheme={lightTheme}
          >
            <TabLink
              to="/gaming"
              lighttheme={lightTheme ? '#272727' : '#ffffff'}
              id={tabsList[2].tabId}
            >
              <TabIconButton type="button" id={tabsList[2].tabId}>
                <span>
                  <SiYoutubegaming
                    size="20"
                    color={
                      pathname === tabsList[2].tabId ? '#ff0000' : '#606060'
                    }
                    id={tabsList[2].tabId}
                  />
                </span>
                <TabText
                  lighttheme={lightTheme ? '#272727' : '#ffffff'}
                  id={tabsList[2].tabId}
                  isactive={pathname === tabsList[2].tabId ? '700' : '500'}
                >
                  {tabsList[2].displayText}
                </TabText>
              </TabIconButton>
            </TabLink>
          </TabItem>
          <TabItem
            key={tabsList[3].tabId}
            isActive={pathname === tabsList[3].tabId}
            lightTheme={lightTheme}
          >
            <TabLink
              to="/saved-videos"
              lighttheme={lightTheme ? '#272727' : '#ffffff'}
              id={tabsList[3].tabId}
            >
              <TabIconButton type="button" id={tabsList[3].tabId}>
                <span>
                  <MdPlaylistAdd
                    size="20"
                    color={
                      pathname === tabsList[3].tabId ? '#ff0000' : '#606060'
                    }
                    id={tabsList[3].tabId}
                  />
                </span>
                <TabText
                  lighttheme={lightTheme ? '#272727' : '#ffffff'}
                  id={tabsList[3].tabId}
                  isactive={pathname === tabsList[3].tabId ? '700' : '500'}
                >
                  {tabsList[3].displayText}
                </TabText>
              </TabIconButton>
            </TabLink>
          </TabItem>
        </TabsContainer>
      )

      return (
        <TabsSidebarContainer lightTheme={lightTheme}>
          {renderMenu()}
          <ContactUsContainer>
            <ContactUsHeading lightTheme={lightTheme}>
              CONTACT US
            </ContactUsHeading>
            <SocialIconsContainer>
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactUsDescription lightTheme={lightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </TabsSidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(TabsSidebar)
