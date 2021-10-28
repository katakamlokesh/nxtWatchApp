import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  margin-bottom: 64px;
  @media screen and (min-width: 576px) {
    width: 49%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`
export const VideoCardItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const LogoAndVideoTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 12px;
  @media screen and (min-width: 576px) {
    padding: 0px;
  }
`

export const ChannelLogo = styled.img`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  margin-right: 8px;
`
export const ThumbnailDetails = styled.div``

export const VideoCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.light ? '#231f20' : '#ffffff')};
`

export const ChannelViewCountAndPublishedAtContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
`

export const ViewCountAndPublishedLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const MiddleCircle01 = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 9px;
  }
  @media screen and (min-width: 885px) {
    font-size: 12px;
  }
`
