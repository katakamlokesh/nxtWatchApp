import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideoLink,
  GamingVideoCardItem,
  GamingThumbnailImage,
  GamingVideoCardHeading,
  GamingViewCount,
} from './styledComponents'

const GamingVideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme} = value

      const {videoDetails} = props

      const {id, thumbnailUrl, title, viewCount} = videoDetails

      return (
        <GamingVideoLink to={`/videos/${id}`}>
          <GamingVideoCardItem key={id}>
            <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <GamingVideoCardHeading light={lightTheme}>
              {title}
            </GamingVideoCardHeading>
            <GamingViewCount>{viewCount} Watching Worldwide</GamingViewCount>
          </GamingVideoCardItem>
        </GamingVideoLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoCard
