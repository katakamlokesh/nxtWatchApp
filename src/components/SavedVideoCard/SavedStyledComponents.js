import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const SavedVideoLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  margin-bottom: 12px;
  @media screen and (min-width: 576px) {
    margin: 0 0 64px 0;
  }
`
export const SavedVideoCardItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const SavedThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 576px) {
    width: 50%;
    margin-right: 20px;
  }
`

export const SavedLogoAndVideoTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 12px;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
    margin-top: 0;
    padding: 0;
    width: 50%;
  }
`

export const SavedChannelLogo = styled.img`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const SavedThumbnailDetails = styled.div`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`

export const SavedVideoCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.light ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const SavedChannelViewCountAndPublishedAtExSm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 2;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const SavedViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const SavedPublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const SavedChannelViewCountAndPublishedAtExLg = styled.div`
  width: 100%;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const SavedViewCountAndPublishedLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const SavedText = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 16px 0 0;
  line-height: 2;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin: 0 10px 0 0;
  }
  @media screen and (min-width: 885px) {
    font-size: 16px;
  }
`
