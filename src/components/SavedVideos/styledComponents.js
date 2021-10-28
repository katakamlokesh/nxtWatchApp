import styled from 'styled-components/macro'

export const SavedContainer = styled.div`
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
`

export const SavedHomeContainer = styled.div`
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

export const SavedVideosRouteFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => (props.light ? '#f9f9f9' : ' #0f0f0f')};
`
export const SavedVideosRouteFailureImage = styled.img`
  width: 80%;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const SavedVideosRouteFailureHeading = styled.h1`
  color: ${props => (props.light ? '#171f46' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const SavedVideosRouteFailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  width: 90%;
  line-height: 1.3;
  text-align: center;
`

export const SavedHeaderContainer = styled.div`
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
export const SavedIconContainer = styled.div`
  border-radius: 50%;
  padding: 16px;
  background-color: ${props => (props.light ? '#e2e8f0' : '#0f0f0f')};
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`
export const SavedMainHeading = styled.h1`
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

export const SavedVideosUnorderedList = styled.ul`
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
