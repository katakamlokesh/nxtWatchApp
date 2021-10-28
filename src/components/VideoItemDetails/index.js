import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {GoPrimitiveDot} from 'react-icons/go'

import ReactPlayer from 'react-player'

import Header from '../Header'
import TabsSidebar from '../TabsSidebar'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoDetailContainer,
  VideoDetailsHomeContainer,
  LoaderContainer,
  VideosRouteFailureContainer,
  VideosRouteFailureHeading,
  VideosRouteFailureDescription,
  VideosRouteFailureImage,
  VideoDetailsContainer,
  VideoPlayerContainer,
  VideoTitle,
  ContainerStatsAndButtons,
  Container,
  Text,
  LikeDislkeButtonsContainer,
  Button,
  DislikeButton,
  SavedButton,
  DetailsContainer,
  MiddleLine,
  ChannelLogo,
  ChannelNameAndSubscriberContainer,
  ChannelName,
  SubscribersCount,
  Description,
} from './styledComponents'

import {TabsAndContent, RetryButton} from '../Home/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        description: fetchedData.video_details.description,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: prevState.disliked === true && false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
      liked: prevState.liked === true && false,
    }))
  }

  renderVideoDetailsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme, savedVideosList, saveVideo} = value
        const {videoDetails, liked, disliked} = this.state

        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          id,
          channel,
          description,
        } = videoDetails

        const published = formatDistanceToNowStrict(new Date(publishedAt), {
          addSuffix: true,
        })

        const saved =
          savedVideosList === undefined
            ? false
            : Object.values(savedVideosList).some(each => each.id === id)

        const onClickSave = () => {
          saveVideo(videoDetails)
        }

        return (
          <VideoDetailsContainer light={lightTheme}>
            <VideoPlayerContainer>
              <ReactPlayer url={videoUrl} height="100%" width="100%" controls />
            </VideoPlayerContainer>
            <DetailsContainer>
              <VideoTitle light={lightTheme}>{title}</VideoTitle>
              <ContainerStatsAndButtons>
                <Container>
                  <Text>{viewCount} views</Text>
                  <Text>
                    <GoPrimitiveDot fill="#909090" size="12" />
                  </Text>
                  <Text> {published}</Text>
                </Container>
                <LikeDislkeButtonsContainer>
                  <Button
                    type="button"
                    onClick={this.onClickLike}
                    active={liked}
                  >
                    <BiLike color={liked ? '#2563eb' : '#64748b'} size="20" />{' '}
                    Like
                  </Button>
                  <DislikeButton
                    type="button"
                    onClick={this.onClickDislike}
                    active={disliked}
                  >
                    <BiDislike
                      color={disliked ? '#2563eb' : '#64748b'}
                      size="20"
                    />{' '}
                    Dislike
                  </DislikeButton>
                  {saved ? (
                    <SavedButton onClick={onClickSave} active={saved}>
                      <MdPlaylistAdd color="#2563eb" size="20" /> Saved
                    </SavedButton>
                  ) : (
                    <SavedButton onClick={onClickSave} active={saved}>
                      <MdPlaylistAdd color="#64748b" size="20" /> Save
                    </SavedButton>
                  )}
                </LikeDislkeButtonsContainer>
              </ContainerStatsAndButtons>
              <MiddleLine light={lightTheme} />
              <Container>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <ChannelNameAndSubscriberContainer>
                  <ChannelName light={lightTheme}>{channel.name}</ChannelName>
                  <SubscribersCount>
                    {channel.subscriberCount} subscribers
                  </SubscribersCount>
                </ChannelNameAndSubscriberContainer>
              </Container>
              <Description light={lightTheme}>{description}</Description>
            </DetailsContainer>
          </VideoDetailsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickFailureRetry = () => {
    this.getVideoDetails()
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
            <RetryButton type="button" onClick={this.onClickFailureRetry}>
              Retry
            </RetryButton>
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

  renderVideoDetailsStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetailsView()
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
            <VideoDetailContainer
              light={lightTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <TabsAndContent>
                <TabsSidebar />
                <VideoDetailsHomeContainer>
                  {this.renderVideoDetailsStatus()}
                </VideoDetailsHomeContainer>
              </TabsAndContent>
            </VideoDetailContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
