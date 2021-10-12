import {MdClose} from 'react-icons/md'

import {
  AddContainer,
  LogoAndCloseContainer,
  Content,
  WebsiteAddLogo,
  AddDescription,
  GetItNowButton,
  CloseButton,
} from './styledComponents'

const SubscriptionBanner = props => {
  const {changeShowSubscriptionBannerStatus} = props
  const closeModal = () => {
    changeShowSubscriptionBannerStatus()
  }

  return (
    <AddContainer data-testid="banner">
      <LogoAndCloseContainer>
        <Content>
          <WebsiteAddLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <AddDescription>
            Buy NxtWatch Premium prepaid plans with UPI
          </AddDescription>
          <GetItNowButton type="button">GET IT NOW</GetItNowButton>
        </Content>
        <CloseButton type="button" onClick={closeModal} data-testid="close">
          <MdClose size="20" />
        </CloseButton>
      </LogoAndCloseContainer>
    </AddContainer>
  )
}

export default SubscriptionBanner
