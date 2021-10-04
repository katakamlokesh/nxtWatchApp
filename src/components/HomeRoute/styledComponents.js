import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.light ? '#f9f9f9' : '#181818')};
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
export const VideoSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.light ? '#ffffff' : '#121212')};
  border: 1px solid #7e858e;
  width: 90%;
  margin: 24px;
  @media screen and (min-width: 576px) {
    width: 75%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const SearchInput = styled.input`
  background-color: transparent;
  border-right: 1px solid #7e858e;
  border-left: none;
  border-top: none;
  border-bottom: none;
  padding: 8px 16px;
  color: ${props => (props.light ? '#181818' : '#f9f9f9')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  outline: none;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const SearchButton = styled.button`
  outline: none;
  background-color: ${props => (props.light ? '#f9f9f9' : ' #313131')};
  border: none;
  padding: 8px 24px;
  @media screen and (min-width: 768px) {
    padding: 10px 26px;
  }
`

export const VideosRouteFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => (props.light ? '#f9f9f9' : '#181818')};
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
export const VideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  justify-content: space-between;
  margin: 0;
  background-color: ${props => (props.light ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 576px) {
    padding: 24px;
  }
`
