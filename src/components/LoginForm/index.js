import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginFormContainer,
  LoginWebsiteLogoDesktopImage,
  FormContainer,
  InputLabel,
  UsernameInputField,
  PasswordInputField,
  LoginButton,
  ErrorMessage,
  InputContainer,
  CheckboxContainer,
  CheckBoxInputField,
  CheckBoxLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickCheckbox = event => {
    if (event.target.checked) {
      this.setState({showPassword: event.target.checked})
    } else {
      this.setState({showPassword: event.target.checked})
    }
  }

  renderCheckboxField = lightTheme => (
    <>
      <CheckBoxInputField
        type="checkbox"
        id="checkbox"
        onClick={this.onClickCheckbox}
      />
      <CheckBoxLabel light={lightTheme} htmlFor="checkbox">
        Show Password
      </CheckBoxLabel>
    </>
  )

  renderPasswordField = lightTheme => {
    const {password, showPassword} = this.state
    return (
      <>
        <InputLabel htmlFor="password" light={lightTheme}>
          PASSWORD
        </InputLabel>
        <PasswordInputField
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          light={lightTheme}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = lightTheme => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username" light={lightTheme}>
          USERNAME
        </InputLabel>
        <UsernameInputField
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          light={lightTheme}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value
          console.log(lightTheme)

          return (
            <LoginFormContainer light={lightTheme} data-testid="login">
              <FormContainer onSubmit={this.submitForm} light={lightTheme}>
                <LoginWebsiteLogoDesktopImage
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${
                    lightTheme ? 'light' : 'dark'
                  }-theme-img.png`}
                  alt="website logo"
                />
                <InputContainer light={lightTheme}>
                  {this.renderUsernameField(lightTheme)}
                </InputContainer>
                <InputContainer light={lightTheme}>
                  {this.renderPasswordField(lightTheme)}
                </InputContainer>
                <CheckboxContainer light={lightTheme}>
                  {this.renderCheckboxField(lightTheme)}
                </CheckboxContainer>
                <LoginButton light={lightTheme} type="submit">
                  Login
                </LoginButton>
                {showSubmitError && (
                  <ErrorMessage light={lightTheme}>*{errorMsg}</ErrorMessage>
                )}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
