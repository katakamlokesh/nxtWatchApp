import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import TabsSidebar from '../TabsSidebar'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import {HomeRouteContainer, TabsAndContent} from '../Home/styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme} = value

      return (
        <HomeRouteContainer data-testid="not found" light={lightTheme}>
          <Header />
          <TabsAndContent>
            <TabsSidebar />
            <NotFoundContainer>
              <NotFoundImage
                src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${
                  lightTheme ? 'light' : 'dark'
                }-theme-img.png`}
                alt="not found"
              />
              <NotFoundHeading light={lightTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription light={lightTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </TabsAndContent>
        </HomeRouteContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
