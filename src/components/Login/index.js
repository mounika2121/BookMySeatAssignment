import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = () => {
    this.setState(prevState => ({showSubmitError: !prevState.showSubmitError}))
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    const {history} = this.props
    if (username !== '' && password !== '') {
      history.replace('/')
    } else {
      this.onSubmitFailure()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697973497/ticket-login_rzil3d.avif"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="logo">
            Book <span className="text-light">My</span> Seat
          </h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && (
            <p className="error-message">Username and Password Required*</p>
          )}
        </form>
      </div>
    )
  }
}

export default Login
