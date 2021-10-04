import {formatDistanceToNowStrict} from 'date-fns'

import {BsFillCircleFill} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideoLink,
  SavedVideoCardItem,
  SavedThumbnailImage,
  SavedLogoAndVideoTitleContainer,
  SavedThumbnailDetails,
  SavedVideoCardHeading,
  SavedChannelLogo,
  SavedChannelViewCountAndPublishedAtExSm,
  SavedChannelName,
  SavedChannelViewCountAndPublishedAtExLg,
  SavedViewCountAndPublishedLg,
  SavedText,
} from './SavedStyledComponents'

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
          <SavedVideoCardItem key={id}>
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
                <SavedChannelViewCountAndPublishedAtExSm>
                  <SavedText>{channel.name}</SavedText>
                  <SavedText>
                    <BsFillCircleFill
                      size="6"
                      fill="#909090"
                      position="center"
                    />
                  </SavedText>
                  <SavedText>{viewCount} Views</SavedText>
                  <SavedText>
                    <BsFillCircleFill
                      size="6"
                      fill="#909090"
                      position="center"
                    />
                  </SavedText>
                  <SavedText>{exactDuration}</SavedText>
                </SavedChannelViewCountAndPublishedAtExSm>
                <SavedChannelViewCountAndPublishedAtExLg>
                  <SavedChannelName>{channel.name}</SavedChannelName>
                  <SavedViewCountAndPublishedLg>
                    <SavedText>{viewCount} views </SavedText>
                    <SavedText>
                      <BsFillCircleFill
                        size="6"
                        fill="#909090"
                        position="center"
                      />
                    </SavedText>

                    <SavedText> {exactDuration}</SavedText>
                  </SavedViewCountAndPublishedLg>
                </SavedChannelViewCountAndPublishedAtExLg>
              </SavedThumbnailDetails>
            </SavedLogoAndVideoTitleContainer>
          </SavedVideoCardItem>
        </SavedVideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoCard
