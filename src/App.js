import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SeatsBooking from './components/SeatsBooking'
import ConfirmSeats from './components/ConfirmSeats'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/booking" component={SeatsBooking} />
        <Route path="/confirm" component={ConfirmSeats} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
