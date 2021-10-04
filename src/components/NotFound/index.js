import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme} = value

      return (
        <NotFoundContainer data-testid="not found" light={lightTheme}>
          <NotFoundImage
            src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${
              lightTheme ? 'light' : 'dark'
            }-theme-img.png`}
            alt="not found"
          />
          <NotFoundHeading light={lightTheme}>Page Not Found</NotFoundHeading>
          <NotFoundDescription light={lightTheme}>
            we are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
