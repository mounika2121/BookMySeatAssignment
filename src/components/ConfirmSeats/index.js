import Header from '../Header'
import './index.css'

const ConfirmSeats = () => (
  <div>
    <Header />
    <div className="confirm-container">
      <h2 className="confirm-header">Confirm Your Seats</h2>
      <div className="summary-top-container">
        <div className="p-4 light-black-bg w-75">
          <h4 className="text-center mb-5">BOOKING SUMMARY</h4>
          <div className="amount mb-4">
            <h6>Premium (2 Tickets)</h6>
            <h6>Rs 250.00</h6>
          </div>
          <div className="amount mb-4">
            <h6>Convenience fees</h6>
            <h6>Rs 50.00</h6>
          </div>
          <hr className="hr-new-line mb-4" />
          <div className="amount mb-4">
            <h6>Sub Total</h6>
            <h6>Rs 300.00</h6>
          </div>
          <div className="amount mb-4">
            <h6>For the next visit, get a discount (T&C)</h6>
            <h6>Rs 25.00</h6>
          </div>
          <hr className="hr-new-line mb-4" />
          <div className="amount mb-4">
            <h6>Amount Payable</h6>
            <h6>Rs 300.00</h6>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-success">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ConfirmSeats
