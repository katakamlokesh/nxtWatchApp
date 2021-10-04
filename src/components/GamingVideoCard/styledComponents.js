import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const GamingVideoLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  width: 49%;
  margin-bottom: 32px;
  @media screen and (min-width: 576px) {
    width: 32%;
    margin-bottom: 48px;
  }
`
export const GamingVideoCardItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`

export const GamingThumbnailImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 12px;
`

export const GamingVideoCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: ${props => (props.light ? '#231f20' : '#ffffff')};
`

export const GamingViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #909090;
  margin: 0;
  line-height: 1.5;
`
