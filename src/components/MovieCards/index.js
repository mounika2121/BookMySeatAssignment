import {withRouter} from 'react-router-dom'
import './index.css'

const MovieCards = props => {
  const onClickBook = () => {
    const {history} = props
    history.replace('/booking')
  }
  return (
    <>
      <h3 className="cards-Header">Recommended Movies</h3>
      <div className="m-3 cards-top-container">
        <div className="movie-card-container">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697901328/salar-card_rlqoex.jpg"
            alt="card1"
            className="movie-cards"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickBook}
          >
            Book Tickets
          </button>
        </div>
        <div className="movie-card-container">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697957542/tiger-img_ksnuwm.jpg"
            alt="card2"
            className="movie-cards"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickBook}
          >
            Book Tickets
          </button>
        </div>
        <div className="movie-card-container">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697957922/bagwantakes_mso9cs.avif"
            alt="card3"
            className="movie-cards"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickBook}
          >
            Book Tickets
          </button>
        </div>
        <div className="movie-card-container">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697958115/Leo_e26sxw.jpg"
            alt="card4"
            className="movie-cards"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickBook}
          >
            Book Tickets
          </button>
        </div>
      </div>
      <div className="top-special">
        <div className="special">
          <h1 className="logo small-logo">
            Book <span>My</span> Seat
          </h1>
          <h2 className="text-info small-logo">
            Endless Entertainment Anywhere. Anytime!
          </h2>
        </div>
      </div>
    </>
  )
}

export default withRouter(MovieCards)
