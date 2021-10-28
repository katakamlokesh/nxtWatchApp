import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import TabsSidebar from '../TabsSidebar'

import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingContainer,
  TrendingHomeContainer,
  LoaderContainer,
  TrendingRouteFailureContainer,
  TrendingRouteFailureImage,
  TrendingRouteFailureHeading,
  TrendingRouteFailureDescription,
  TrendingVideosUnorderedList,
  TrendingHeaderContainer,
  TrendingIconContainer,
  TrendingMainHeading,
} from './styledComponents'
import {TabsAndContent, RetryButton} from '../Home/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: video.published_at,
        id: video.id,
        title: video.title,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))

      this.setState({
        videosList: updatedData,
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
        const {videosList} = this.state

        return (
          <>
            <TrendingHeaderContainer data-testid="banner" light={lightTheme}>
              <TrendingIconContainer light={lightTheme}>
                <HiFire size="40" color="#ff0000" />
              </TrendingIconContainer>
              <TrendingMainHeading light={lightTheme}>
                Trending
              </TrendingMainHeading>
            </TrendingHeaderContainer>
            <TrendingVideosUnorderedList light={lightTheme}>
              {videosList.map(eachVideo => (
                <TrendingVideoCard
                  key={eachVideo.id}
                  videoDetails={eachVideo}
                />
              ))}
            </TrendingVideosUnorderedList>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickTrendingRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <TrendingRouteFailureContainer light={lightTheme}>
            <TrendingRouteFailureImage
              src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${
                lightTheme ? 'light' : 'dark'
              }-theme-img.png`}
              alt="failure view"
            />
            <TrendingRouteFailureHeading light={lightTheme}>
              Oops! Something Went Wrong
            </TrendingRouteFailureHeading>
            <TrendingRouteFailureDescription light={lightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </TrendingRouteFailureDescription>
            <RetryButton type="button" onClick={this.onClickTrendingRetry}>
              Retry
            </RetryButton>
          </TrendingRouteFailureContainer>
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
            <TrendingContainer light={lightTheme} data-testid="trending">
              <Header />
              <TabsAndContent>
                <TabsSidebar />
                <TrendingHomeContainer>
                  {this.renderAllVideos()}
                </TrendingHomeContainer>
              </TabsAndContent>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
