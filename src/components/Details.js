import React, { useContext } from 'react'
import AppContext from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/schedule.scss'
import '../styles/details.scss'

const Details = ({ formVisible }) => {
  const { selectedEvent, setDetailsVisible } = useContext(AppContext)
  const detailsVisibleHandler = () => {
    setDetailsVisible(false)
  }
  return (
    <div className={`event-details ${!formVisible ? 'move-left' : ''}`}>
      <div className="window-header">
        <FontAwesomeIcon
          className="close-btn"
          icon={faXmark}
          onClick={() => {
            detailsVisibleHandler()
          }}
        />
      </div>
      <div className="details-info-container">
        <p>Event Title:</p> {selectedEvent.title}
      </div>
      <div className="details-info-container">
        <p>Truck Name:</p> {selectedEvent.truckName}
      </div>
      <div className="details-info-container">
        <p>Driver Name:</p> {selectedEvent.driverName}
      </div>
      <div className="details-info-container dbl-container">
        <div className="info-container-left">
          <p>Departure from:</p> {selectedEvent.departureCity}
        </div>
        <div className="info-container-right">
          <p>Arrival:</p> {selectedEvent.arrivalCity}
        </div>
      </div>
      <div className="details-info-container dbl-container">
        <div className="info-container-left">
          <p>Departure Date:</p>{' '}
          {selectedEvent.start.toString().split(' ').slice(0, 4).join(' ')}
        </div>
        <div className="info-container-right">
          <p>Arrival Date:</p>{' '}
          {selectedEvent.end.toString().split(' ').slice(0, 4).join(' ')}
        </div>
      </div>
    </div>
  )
}

export default Details
