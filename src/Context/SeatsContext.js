import React from 'react'

const SeatsContext = React.createContext({
  selectedSeats: [],
  selectedType: 'Standard',
  changeSelectedType: () => {},
  selectedQty: 0,
  changeSelectedQty: () => {},
  confirmSeats: [],
})

export default SeatsContext
