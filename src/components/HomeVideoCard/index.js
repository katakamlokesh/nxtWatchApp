import {formatDistanceToNowStrict} from 'date-fns'

import {VscCircleFilled} from 'react-icons/vsc'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoLink,
  VideoCardItem,
  ThumbnailImage,
  LogoAndVideoTitleContainer,
  ThumbnailDetails,
  VideoCardHeading,
  ChannelLogo,
  ChannelName,
  MiddleCircle01,
  ViewCountAndPublishedLg,
  ChannelViewCountAndPublishedAtContainer,
  Text,
} from './styledComponents'

const HomeVideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme} = value

      const {videoDetails} = props

      const {
        id,
        thumbnailUrl,
        title,
        channel,
        viewCount,
        publishedAt,
      } = videoDetails

      const exactDuration = formatDistanceToNowStrict(new Date(publishedAt), {
        addSuffix: true,
      })

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoCardItem key={id}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <LogoAndVideoTitleContainer>
              <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
              <ThumbnailDetails>
                <VideoCardHeading light={lightTheme}>{title}</VideoCardHeading>
                <ChannelViewCountAndPublishedAtContainer>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewCountAndPublishedLg>
                    <MiddleCircle01>
                      <VscCircleFilled fill="#909090" position="center" />
                    </MiddleCircle01>
                    <Text>{viewCount} views</Text>
                    <Text>
                      <VscCircleFilled position="center" fill="#909090" />
                    </Text>
                    <Text>{exactDuration}</Text>
                  </ViewCountAndPublishedLg>
                </ChannelViewCountAndPublishedAtContainer>
              </ThumbnailDetails>
            </LogoAndVideoTitleContainer>
          </VideoCardItem>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoCard
