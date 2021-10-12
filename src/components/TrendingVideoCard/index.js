import {formatDistanceToNowStrict} from 'date-fns'

import {VscCircleFilled} from 'react-icons/vsc'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingVideoLink,
  TrendingVideoCardItem,
  TrendingThumbnailImage,
  TrendingLogoAndVideoTitleContainer,
  TrendingThumbnailDetails,
  TrendingVideoCardHeading,
  TrendingChannelLogo,
  ChannelName,
  MiddleCircle01,
  ViewCountAndPublishedLg,
  ChannelViewCountAndPublishedAtContainer,
  Text,
} from './styledComponents'

const TrendingVideoCard = props => (
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
        <TrendingVideoLink to={`/videos/${id}`}>
          <TrendingVideoCardItem key={id}>
            <TrendingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <TrendingLogoAndVideoTitleContainer>
              <TrendingChannelLogo
                src={channel.profileImageUrl}
                alt="channel logo"
              />
              <TrendingThumbnailDetails>
                <TrendingVideoCardHeading light={lightTheme}>
                  {title}
                </TrendingVideoCardHeading>
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
              </TrendingThumbnailDetails>
            </TrendingLogoAndVideoTitleContainer>
          </TrendingVideoCardItem>
        </TrendingVideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideoCard
