import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoPlayerRoute from './components/VideosPlayerRoute'
import NotFound from './components/NotFound'

import './App.css'
import TabsSidebar from './components/TabsSidebar'

const tabsList = [
  {
    tabId: '/',
    displayText: 'Home',
  },
  {
    tabId: '/trending',
    displayText: 'Trending',
  },
  {
    tabId: '/gaming',
    displayText: 'Gaming',
  },
  {
    tabId: '/saved-videos',
    displayText: 'Saved Videos',
  },
]

// Replace your code here
class App extends Component {
  state = {
    darkMode: '',
    savedVideos: [],
  }

  componentDidMount() {
    this.setState({
      darkMode: JSON.parse(localStorage.getItem('dark_mode')),
      savedVideos: this.getSavedVideosList(),
    })
  }

  getSavedVideosList = () => {
    const savedVideosList = JSON.parse(localStorage.getItem('saved_videos'))

    if (savedVideosList === null) {
      return []
    }
    return savedVideosList
  }

  toggleTheme = dm => {
    this.setState(
      {
        darkMode: localStorage.setItem('dark_mode', JSON.stringify(dm)),
      },
      this.componentDidMount,
    )
  }

  saveVideo = video => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    const savedVideo = savedVideos.some(each => each.id === video.id)
    console.log(savedVideo)

    const videosList = savedVideo
      ? savedVideos.filter(each => each.id !== video.id)
      : [...savedVideos, {...video}]

    this.setState(
      {
        savedVideos: localStorage.setItem(
          'saved_videos',
          JSON.stringify(videosList),
        ),
      },
      this.componentDidMount,
    )
  }

  render() {
    const {savedVideos, darkMode} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme: !darkMode,
          savedVideos,
          saveVideo: this.saveVideo,
          tabsList,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />
          <>
            <Header />
            <div className="TabsAndContent">
              <TabsSidebar />
              <Switch>
                <ProtectedRoute exact path="/" component={HomeRoute} />
                <ProtectedRoute
                  exact
                  path="/trending"
                  component={TrendingRoute}
                />
                <ProtectedRoute exact path="/gaming" component={GamingRoute} />
                <ProtectedRoute
                  exact
                  path="/saved-videos"
                  component={SavedVideosRoute}
                />
                <ProtectedRoute
                  exact
                  path="/videos/:id"
                  component={VideoPlayerRoute}
                />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="not-found" />
              </Switch>
            </div>
          </>
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
