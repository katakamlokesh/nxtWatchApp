import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'
import SubscriptionBanner from '../SubscriptionBanner'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeContainer,
  LoaderContainer,
  VideoSearchInputContainer,
  SearchInput,
  SearchButton,
  VideosRouteFailureContainer,
  VideosRouteFailureImage,
  VideosRouteFailureHeading,
  VideosRouteFailureDescription,
  VideosRouteFailureRetryButton,
  VideosUnorderedList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showSubscriptionBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickSearchRetry = () => {
    this.getVideos()
  }

  renderVideoListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value
        const {videosList} = this.state

        const showSearchResults = videosList.length > 0

        const renderNoSearchResults = () => (
          <VideosRouteFailureContainer light={lightTheme}>
            <VideosRouteFailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <VideosRouteFailureHeading light={lightTheme}>
              No Search results found
            </VideosRouteFailureHeading>
            <VideosRouteFailureDescription light={lightTheme}>
              Try different key words or remove search filter
            </VideosRouteFailureDescription>
            <VideosRouteFailureRetryButton
              type="button"
              onClick={this.onClickSearchRetry}
            >
              Retry
            </VideosRouteFailureRetryButton>
          </VideosRouteFailureContainer>
        )

        return (
          <>
            {showSearchResults ? (
              <VideosUnorderedList light={lightTheme}>
                {videosList.map(eachVideo => (
                  <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideosUnorderedList>
            ) : (
              renderNoSearchResults()
            )}
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  enterSearchInputIcon = () => {
    this.getVideos()
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  onClickSearchIcon = () => {
    this.enterSearchInputIcon()
  }

  onChangeSearchInput = event => {
    this.changeSearchInput(event.target.value)
  }

  renderSearchInput = lightTheme => {
    const {searchInput} = this.state
    return (
      <VideoSearchInputContainer light={lightTheme}>
        <SearchInput
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          light={lightTheme}
        />

        <SearchButton
          type="button"
          data-testid="searchButton"
          onClick={this.onClickSearchIcon}
          light={lightTheme}
        >
          <BsSearch size="16" color="#181818" />
        </SearchButton>
      </VideoSearchInputContainer>
    )
  }

  onClickHomeRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <VideosRouteFailureContainer light={lightTheme}>
            <VideosRouteFailureImage
              src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${
                lightTheme ? 'light' : 'dark'
              }-theme-img.png`}
              alt="failure view"
            />
            <VideosRouteFailureHeading light={lightTheme}>
              Oops! Something Went Wrong
            </VideosRouteFailureHeading>
            <VideosRouteFailureDescription light={lightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </VideosRouteFailureDescription>
            <VideosRouteFailureRetryButton
              type="button"
              onClick={this.onClickHomeRetry}
            >
              Retry
            </VideosRouteFailureRetryButton>
          </VideosRouteFailureContainer>
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

  changeShowSubscriptionBannerStatus = () => {
    this.setState(prevState => ({
      showSubscriptionBanner: !prevState.showSubscriptionBanner,
    }))
  }

  render() {
    const {showSubscriptionBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <HomeContainer data-testid="home" light={lightTheme}>
              {showSubscriptionBanner && (
                <SubscriptionBanner
                  changeShowSubscriptionBannerStatus={
                    this.changeShowSubscriptionBannerStatus
                  }
                />
              )}
              {this.renderSearchInput(lightTheme)}
              {this.renderAllVideos()}
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
