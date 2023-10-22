import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin, AiOutlineCopyright} from 'react-icons/ai'
import './index.css'

const Footer = () => (
  <div className="footer-bg-container pb-4">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center text-md-left">
            <div className="logo-container">
              <Link to="/" className="nav-link">
                <h1 className="logo">
                  Book <span>My</span> Seat
                </h1>
              </Link>
            </div>
            <div className="col-12 d-flex flex-row justify-content-center">
              <div className="footer-icon-container">
                <FcGoogle className="footer-icon" />
              </div>
              <div className="footer-icon-container">
                <FaTwitter className="footer-icon" />
              </div>
              <div className="footer-icon-container">
                <BsInstagram className="footer-icon" />
              </div>
              <div className="footer-icon-container">
                <AiFillLinkedin className="footer-icon" />
              </div>
            </div>
            <div>
              <p className="footer-para">
                Endless Entertainment Anywhere. Anytime!
              </p>
            </div>
          </div>
        </div>

        <hr className="hr-line" />
        <div className="col-12">
          <div className="d-flex flex-row justify-content-center">
            <AiOutlineCopyright className="footer-icon pt-1" />
            <div>
              <p className="footer-para pl-2">
                2023 Created by Mounika with React JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
