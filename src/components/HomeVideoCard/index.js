import {formatDistanceToNowStrict} from 'date-fns'

import {BsFillCircleFill} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoLink,
  VideoCardItem,
  ThumbnailImage,
  LogoAndVideoTitleContainer,
  ThumbnailDetails,
  VideoCardHeading,
  ChannelLogo,
  ChannelViewCountAndPublishedAtExSm,
  ChannelName,
  ViewCount,
  PublishedAt,
  ChannelViewCountAndPublishedAtExLg,
  ViewCountAndPublishedLg,
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
                <ChannelViewCountAndPublishedAtExSm>
                  <ChannelName>{channel.name}</ChannelName>
                  <BsFillCircleFill
                    size="4px"
                    fill="#909090"
                    position="center"
                  />
                  <ViewCount>{viewCount} Views</ViewCount>
                  <BsFillCircleFill
                    size="4px"
                    fill="#909090"
                    position="center"
                  />
                  <PublishedAt>{exactDuration}</PublishedAt>
                </ChannelViewCountAndPublishedAtExSm>
                <ChannelViewCountAndPublishedAtExLg>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewCountAndPublishedLg>
                    <Text>{viewCount} views</Text>
                    <Text>
                      <BsFillCircleFill
                        size="4px"
                        fill="#909090"
                        position="center"
                      />
                    </Text>
                    <Text>{exactDuration}</Text>
                  </ViewCountAndPublishedLg>
                </ChannelViewCountAndPublishedAtExLg>
              </ThumbnailDetails>
            </LogoAndVideoTitleContainer>
          </VideoCardItem>
        </VideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoCard
