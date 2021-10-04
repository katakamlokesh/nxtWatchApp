import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: '',
  toggleTheme: () => {},
  savedVideos: [],
  tabsList: [],
})

export default NxtWatchContext
