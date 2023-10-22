import {Link, withRouter} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <Link to="/" className="nav-link">
        <h1 className="logo">
          Book <span>My</span> Seat
        </h1>
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <button type="button" className="home-btn">
                Home
              </button>
            </Link>
            <Link to="/" className="nav-link">
              <button type="button" className="home-sm-btn">
                <AiOutlineHome />
              </button>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="text-light btn btn-info"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
