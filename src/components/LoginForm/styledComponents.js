import styled from 'styled-components/macro'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.light ? '#ffffff' : '#272727')};
  height: 100vh;
  width: 100%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LoginWebsiteLogoMobileImage = styled.img`
  width: 165px;
  margin-top: 50px;
  margin-bottom: 35px;
  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const LoginWebsiteLogoDesktopImage = styled.img`
  width: 140px;
  height: 36px;
  margin: 16px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 45px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.light ? '#ffffff' : '#000000')};
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.light ? '#7e858e' : '#ffffff')};
`

export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.light ? '#cbd5e1' : '#616e7c')};
  background-color: transparent;
  color: ${props => (props.light ? '#64748b' : '#ffffff')};
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const UsernameInputField = styled(InputField)``

export const PasswordInputField = styled(InputField)``

export const CheckboxContainer = styled(InputContainer)`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`

export const CheckBoxInputField = styled.input`
  height: 14px;
  width: 14px;
  border-radius: 2px;
  margin-right: 10px;
`

export const CheckBoxLabel = styled(InputLabel)`
  color: ${props => (props.light ? '#0f0f0f' : '#ffffff')};
  font-weight: 500;
  font-size: 14px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #4f46e5;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.light ? '#ff0b37' : '#ff0000')};
`
