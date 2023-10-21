import {AiOutlineHome} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <h1 className="logo">
      Book <span>My</span> Seat
    </h1>
    <div className="nav-items">
      <ul>
        <li>
          <button type="button" className="home-btn">
            Home
          </button>
          <button type="button" className="logout-sm-btn">
            <AiOutlineHome />
          </button>
        </li>
        <li>
          <button type="button" className="logout-xl-btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
