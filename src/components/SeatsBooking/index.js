import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const SeatsBooking = props => {
  const [selectedType, setSelectedType] = useState('Ticket Type')
  const [selectedQty, setSelectedQty] = useState('Qty')
  const [selectedSeats, setSelectedSeats] = useState([])

  const onClickProceed = () => {
    const {history} = props
    history.replace('/confirm')
  }

  const onChangeType = event => {
    setSelectedType(event.target.value)
  }

  const onChangeQty = event => {
    setSelectedQty(event.target.value)
  }

  const onSelectSeats = seat => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  return (
    <div>
      <Header />
      <div className="seats-container">
        <h2 className="booking-header">Book Your Seats</h2>
        <div className="options-container">
          <select
            className="first-select"
            onChange={onChangeType}
            value={selectedType}
          >
            <option disabled selected>
              Ticket Type
            </option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
          <select onChange={onChangeQty} value={selectedQty}>
            <option disabled selected>
              Qty
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="main-sets-container">
          <div>
            <button
              id="seats-button"
              type="button"
              className={`btn seat-button ${
                selectedSeats.includes('A1')
                  ? 'btn-success text-light'
                  : 'btn-outline-success'
              }`}
              onClick={() => onSelectSeats('A1')}
              value={selectedSeats}
            >
              A1
            </button>
            <button
              id="seats-button"
              type="button"
              className={`btn seat-button ${
                selectedSeats.includes('A2')
                  ? 'btn-success text-light'
                  : 'btn-outline-success'
              }`}
              onClick={() => onSelectSeats('A2')}
            >
              A2
            </button>
            <button
              id="seats-button"
              type="button"
              className={`btn seat-button ${
                selectedSeats.includes('A3')
                  ? 'btn-success text-light'
                  : 'btn-outline-success'
              }`}
              onClick={() => onSelectSeats('A3')}
            >
              A3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A10
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A11
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A12
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              A13
            </button>
          </div>
          <div>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B1
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B2
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button extra-space"
            >
              B6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B10
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B11
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              B12
            </button>
          </div>
          <div>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C1
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C2
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button extra-spaces"
            >
              C5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              C9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button last-space"
            >
              C10
            </button>
          </div>
          <div>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D1
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D2
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button extra-space"
            >
              D6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D10
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D11
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              D12
            </button>
          </div>
          <div>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E1
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E2
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button extra-space"
            >
              E6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E10
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E11
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              E12
            </button>
          </div>
          <div>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F1
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F2
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F3
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F4
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button extra-spaces"
            >
              F5
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F6
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F7
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F8
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button"
            >
              F9
            </button>
            <button
              id="seats-button"
              type="button"
              className="btn btn-outline-success seat-button last-space"
            >
              F10
            </button>
          </div>
        </div>
      </div>
      {selectedSeats.length === parseInt(selectedQty) && (
        <div className="proceed-button">
          <button
            type="button"
            className="btn btn-danger mt-5"
            onClick={onClickProceed}
          >
            PROCEED
          </button>
        </div>
      )}
      <div className="d-flex flex-row justify-content-center mt-5">
        <div className="d-flex flex-row justify-content-center inner-container">
          <div className="small-box" />
          <p>Unavailable</p>
        </div>
        <div className="d-flex flex-row justify-content-center inner-container">
          <div className="small-box available" />
          <p>Available</p>
        </div>
        <div className="d-flex flex-row justify-content-center inner-container">
          <div className="small-box selected" />
          <p>Selected</p>
        </div>
      </div>
    </div>
  )
}
export default withRouter(SeatsBooking)
