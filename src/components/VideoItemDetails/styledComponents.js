import styled from 'styled-components/macro'

export const VideoDetailContainer = styled.div`
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
`

export const VideoDetailsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: transparent;
  background-size: cover;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 75%;
    height: 100vh;
  }
  @media screen and (min-width: 992px) {
    width: 80%;
    height: 100vh;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: transparent;
`

export const VideosRouteFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
`
export const VideosRouteFailureImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`
export const VideosRouteFailureHeading = styled.h1`
  color: ${props => (props.light ? '#171f46' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const VideosRouteFailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 60%;
  }
`

export const VideosRouteFailureRetryButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 12px 32px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`
export const VideoPlayerContainerSm = styled.div`
  width: 100%;
  height: 250px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 240px;
  @media screen and (min-width: 320px) {
    height: 280px;
  }
  @media screen and (min-width: 576px) {
    height: 320px;
  }
  @media screen and (min-width: 666px) {
    height: 360px;
  }
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 888px) {
    height: 440px;
  }
  @media screen and (min-width: 992px) {
    height: 480px;
  }
  @media screen and (min-width: 1112px) {
    height: 520px;
  }
  @media screen and (min-width: 1200px) {
    height: 540px;
  }
`

export const DetailsContainer = styled.div`
  padding: 16px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 20px 0 20px 0;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.light ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ContainerStatsAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 16px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  padding: 0;
  margin: 0 10px 0 0;
  line-height: 4;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const LikeDislkeButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 16px 0;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  display: flex;
  justify-content: space-between;
  width: 60px;
  padding: 0;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const DislikeButton = styled(Button)`
  width: 80px;
  margin: 0 20px 0 20px;
`

export const SavedButton = styled(Button)`
  width: 70px;
`

export const MiddleLine = styled.hr`
  border: 1px solid ${props => (props.light ? '#cbd5e1' : '#909090')};
  border-radius: 24px;
`
export const ChannelLogo = styled.img`
  border-radius: 50px;
  height: 80px;
  width: 80px;
  padding: 8px;
  margin-right: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ChannelNameAndSubscriberContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ChannelName = styled(Text)`
  color: ${props => (props.light ? '#1e293b' : '#ffffff')};
  line-height: 1;
`
export const SubscribersCount = styled(Text)`
  color: '#cccccc';
  font-size: 13px;
`

export const Description = styled(Text)`
  color: ${props => (props.light ? '#7e858e' : '#ffffff')};
  line-height: 1.8;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 88px;
  }
`
