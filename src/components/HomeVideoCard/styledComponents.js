import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

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
  @media screen and (min-width: 576px) {
  }
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

export const VideoCardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.light ? '#231f20' : '#ffffff')};
`

export const ChannelViewCountAndPublishedAtExSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 12px;
    line-height: 2;
    margin: 0;
  }
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 12px;
    line-height: 2;
    margin: 0;
  }
`
export const ChannelViewCountAndPublishedAtExLg = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const ViewCountAndPublishedLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 2;
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
