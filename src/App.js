import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SeatsBooking from './components/SeatsBooking'
import ConfirmSeats from './components/ConfirmSeats'
import SeatsContext from './Context/SeatsContext'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './App.css'

class App extends Component {
  state = {
    selectedType: 'Standard',
    selectedQty: 0,
  }

  changeSelectedType = selectedType => {
    this.setState({selectedType})
  }

  changeSelectedQty = selectedQty => {
    this.setState({selectedQty})
  }

  render() {
    const {selectedQty, selectedType} = this.state
    return (
      <SeatsContext.Provider
        value={{
          selectedType,
          changeSelectedType: this.changeSelectedType,
          selectedQty,
          changeSelectedQty: this.changeSelectedQty,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/booking" component={SeatsBooking} />
          <Route path="/confirm" component={ConfirmSeats} />
          <Redirect to="not-found" />
        </Switch>
      </SeatsContext.Provider>
    )
  }
}

export default App
