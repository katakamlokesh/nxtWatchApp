import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingContainer,
  LoaderContainer,
  GamingRouteFailureContainer,
  GamingRouteFailureImage,
  GamingRouteFailureHeading,
  GamingRouteFailureDescription,
  GamingRouteFailureRetryButton,
  GamingVideosUnorderedList,
  GamingHeaderContainer,
  IconContainer,
  MainHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(video => ({
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        id: video.id,
        title: video.title,
      }))

      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideoListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value
        const {gamingVideosList} = this.state

        return (
          <>
            <GamingHeaderContainer data-testid="banner" light={lightTheme}>
              <IconContainer light={lightTheme}>
                <SiYoutubegaming size="40" color="#ff0000" />
              </IconContainer>
              <MainHeading light={lightTheme}>Gaming</MainHeading>
            </GamingHeaderContainer>
            <GamingVideosUnorderedList light={lightTheme}>
              {gamingVideosList.map(eachVideo => (
                <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </GamingVideosUnorderedList>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickGamingRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <GamingRouteFailureContainer light={lightTheme}>
            <GamingRouteFailureImage
              src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${
                lightTheme ? 'light' : 'dark'
              }-theme-img.png`}
              alt="failure view"
            />
            <GamingRouteFailureHeading light={lightTheme}>
              Oops! Something Went Wrong
            </GamingRouteFailureHeading>
            <GamingRouteFailureDescription light={lightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </GamingRouteFailureDescription>
            <GamingRouteFailureRetryButton
              type="button"
              onClick={this.onClickGamingRetry}
            >
              Retry
            </GamingRouteFailureRetryButton>
          </GamingRouteFailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <GamingContainer light={lightTheme} data-testid="gaming">
              {this.renderAllVideos()}
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
