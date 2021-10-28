import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

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
    darkMode: false,
    savedVideosList: [],
  }

  componentDidMount() {
    this.setState({
      savedVideosList: this.getSavedVideosList(),
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
    this.setState({
      darkMode: dm,
    })
  }

  saveVideo = video => {
    const {savedVideosList} = this.state
    console.log(savedVideosList)
    const savedVideo = savedVideosList.some(each => each.id === video.id)
    console.log(savedVideo)

    const videosList = savedVideo
      ? savedVideosList.filter(each => each.id !== video.id)
      : [...savedVideosList, {...video}]

    this.setState(
      {
        savedVideosList: localStorage.setItem(
          'saved_videos',
          JSON.stringify(videosList),
        ),
      },
      this.componentDidMount,
    )
  }

  render() {
    const {savedVideosList, darkMode} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme: !darkMode,
          savedVideosList,
          saveVideo: this.saveVideo,
          tabsList,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
