import {formatDistanceToNowStrict} from 'date-fns'

import {VscCircleFilled} from 'react-icons/vsc'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideoLink,
  SavedVideoCardItem,
  SavedThumbnailImage,
  SavedLogoAndVideoTitleContainer,
  SavedThumbnailDetails,
  SavedVideoCardHeading,
  SavedChannelLogo,
} from './styledComponents'

import {
  ChannelName,
  MiddleCircle01,
  ViewCountAndPublishedLg,
  ChannelViewCountAndPublishedAtContainer,
  Text,
} from '../TrendingVideoCard/styledComponents'

const SavedVideoCard = props => (
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
        <SavedVideoLink to={`/videos/${id}`}>
          <SavedVideoCardItem>
            <SavedThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <SavedLogoAndVideoTitleContainer>
              <SavedChannelLogo
                src={channel.profileImageUrl}
                alt="channel logo"
              />
              <SavedThumbnailDetails>
                <SavedVideoCardHeading light={lightTheme}>
                  {title}
                </SavedVideoCardHeading>
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
              </SavedThumbnailDetails>
            </SavedLogoAndVideoTitleContainer>
          </SavedVideoCardItem>
        </SavedVideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoCard
