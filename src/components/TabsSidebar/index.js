import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TabsSidebarContainer,
  TabsContainerLg,
  TabItemLg,
  TabLinkLg,
  TabTextLg,
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
        <TabsContainerLg light={lightTheme}>
          <TabItemLg
            isActive={pathname === tabsList[0].tabId}
            light={lightTheme}
          >
            <TabLinkLg to="/">
              <AiFillHome
                size="20"
                color={pathname === tabsList[0].tabId ? '#ff0000' : '#606060'}
              />
              <TabTextLg
                light={lightTheme ? '#272727' : '#ffffff'}
                isactive={pathname === tabsList[0].tabId ? '700' : '500'}
              >
                {tabsList[0].displayText}
              </TabTextLg>
            </TabLinkLg>
          </TabItemLg>
          <TabItemLg
            isActive={pathname === tabsList[1].tabId}
            light={lightTheme}
          >
            <TabLinkLg to="/trending">
              <HiFire
                size="20"
                color={pathname === tabsList[1].tabId ? '#ff0000' : '#606060'}
              />
              <TabTextLg
                light={lightTheme ? '#272727' : '#ffffff'}
                isactive={pathname === tabsList[1].tabId ? '700' : '500'}
              >
                {tabsList[1].displayText}
              </TabTextLg>
            </TabLinkLg>
          </TabItemLg>
          <TabItemLg
            isActive={pathname === tabsList[2].tabId}
            light={lightTheme}
          >
            <TabLinkLg to="/gaming">
              <SiYoutubegaming
                size="20"
                color={pathname === tabsList[2].tabId ? '#ff0000' : '#606060'}
              />
              <TabTextLg
                light={lightTheme ? '#272727' : '#ffffff'}
                isactive={pathname === tabsList[2].tabId ? '700' : '500'}
              >
                {tabsList[2].displayText}
              </TabTextLg>
            </TabLinkLg>
          </TabItemLg>
          <TabItemLg
            isActive={pathname === tabsList[3].tabId}
            light={lightTheme}
          >
            <TabLinkLg to="/saved-videos">
              <MdPlaylistAdd
                size="20"
                color={pathname === tabsList[3].tabId ? '#ff0000' : '#606060'}
              />
              <TabTextLg
                light={lightTheme ? '#272727' : '#ffffff'}
                isactive={pathname === tabsList[3].tabId ? '700' : '500'}
              >
                {tabsList[3].displayText}
              </TabTextLg>
            </TabLinkLg>
          </TabItemLg>
        </TabsContainerLg>
      )

      return (
        <TabsSidebarContainer light={lightTheme}>
          {renderMenu()}
          <ContactUsContainer>
            <ContactUsHeading light={lightTheme}>CONTACT US</ContactUsHeading>
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
            <ContactUsDescription light={lightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </TabsSidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(TabsSidebar)
