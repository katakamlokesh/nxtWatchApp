import styled from 'styled-components/macro'

export const TrendingHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
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

export const TrendingRouteFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
`
export const TrendingRouteFailureImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`
export const TrendingRouteFailureHeading = styled.h1`
  color: ${props => (props.light ? '#171f46' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const TrendingRouteFailureDescription = styled.p`
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

export const TrendingRouteFailureRetryButton = styled.button`
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

export const TrendingHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  background-color: ${props => (props.light ? ' #f1f1f1' : '#181818')};
  @media screen and (min-width: 576px) {
    padding: 32px;
  }
`
export const TrendingIconContainer = styled.div`
  border-radius: 50%;
  padding: 16px;
  background-color: ${props => (props.light ? '#e2e8f0' : '#0f0f0f')};
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`
export const TrendingMainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: ${props => (props.light ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const TrendingVideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  justify-content: space-between;
  margin: 0;
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
  @media screen and (min-width: 576px) {
    padding: 24px;
  }
  @media screen and (min-width: 576px) {
    padding: 48px;
  }
`
