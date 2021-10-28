import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import TabsSidebar from '../TabsSidebar'

import NxtWatchContext from '../../context/NxtWatchContext'
import SavedVideoCard from '../SavedVideoCard'
import {
  SavedContainer,
  SavedHomeContainer,
  SavedHeaderContainer,
  SavedMainHeading,
  SavedIconContainer,
  SavedVideosUnorderedList,
  SavedVideosRouteFailureContainer,
  SavedVideosRouteFailureDescription,
  SavedVideosRouteFailureHeading,
  SavedVideosRouteFailureImage,
} from './styledComponents'

import {TabsAndContent} from '../Home/styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightTheme, savedVideosList} = value

      const renderSavedVideos = () => (
        <>
          <SavedHeaderContainer data-testid="banner" light={lightTheme}>
            <SavedIconContainer light={lightTheme}>
              <HiFire size="40" color="#ff0000" />
            </SavedIconContainer>
            <SavedMainHeading light={lightTheme}>Saved Videos</SavedMainHeading>
          </SavedHeaderContainer>
          <SavedVideosUnorderedList light={lightTheme}>
            {Object.values(savedVideosList).map(eachVideo => (
              <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </SavedVideosUnorderedList>
        </>
      )

      const renderFailureView = () => (
        <SavedVideosRouteFailureContainer light={lightTheme}>
          <SavedVideosRouteFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <SavedVideosRouteFailureHeading light={lightTheme}>
            No saved videos found
          </SavedVideosRouteFailureHeading>
          <SavedVideosRouteFailureDescription light={lightTheme}>
            You can save your videos while watching them
          </SavedVideosRouteFailureDescription>
        </SavedVideosRouteFailureContainer>
      )

      return (
        <SavedContainer light={lightTheme} data-testid="savedVideos">
          <Header />
          <TabsAndContent>
            <TabsSidebar />
            <SavedHomeContainer>
              {Object.values(savedVideosList).length > 0
                ? renderSavedVideos()
                : renderFailureView()}
            </SavedHomeContainer>
          </TabsAndContent>
        </SavedContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
