import {formatDistanceToNowStrict} from 'date-fns'

import {BsFillCircleFill} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingVideoLink,
  TrendingVideoCardItem,
  TrendingThumbnailImage,
  TrendingLogoAndVideoTitleContainer,
  TrendingThumbnailDetails,
  TrendingVideoCardHeading,
  TrendingChannelLogo,
  TrendingChannelViewCountAndPublishedAtExSm,
  TrendingChannelName,
  TrendingChannelViewCountAndPublishedAtExLg,
  TrendingViewCountAndPublishedLg,
  TrendingText,
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
                <TrendingChannelViewCountAndPublishedAtExSm>
                  <TrendingText>{channel.name}</TrendingText>
                  <TrendingText>
                    <BsFillCircleFill
                      size="6"
                      fill="#909090"
                      position="center"
                    />
                  </TrendingText>

                  <TrendingText>{viewCount} views</TrendingText>
                  <TrendingText>
                    <BsFillCircleFill
                      size="6"
                      fill="#909090"
                      position="center"
                    />
                  </TrendingText>
                  <TrendingText>{exactDuration}</TrendingText>
                </TrendingChannelViewCountAndPublishedAtExSm>
                <TrendingChannelViewCountAndPublishedAtExLg>
                  <TrendingChannelName>{channel.name}</TrendingChannelName>
                  <TrendingViewCountAndPublishedLg>
                    <TrendingText>{viewCount} views </TrendingText>
                    <TrendingText>
                      <BsFillCircleFill
                        size="6"
                        fill="#909090"
                        position="center"
                      />
                    </TrendingText>

                    <TrendingText>{exactDuration}</TrendingText>
                  </TrendingViewCountAndPublishedLg>
                </TrendingChannelViewCountAndPublishedAtExLg>
              </TrendingThumbnailDetails>
            </TrendingLogoAndVideoTitleContainer>
          </TrendingVideoCardItem>
        </TrendingVideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideoCard
