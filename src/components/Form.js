import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context'
import '../styles/form.scss'

const Form = ({ formVisible }) => {
  let {
    newEvent,
    setNewEvent,
    setAllEvents,
    events,
    allEvents,
    displayRoute,
    addListener,
  } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [truckName, setTruckName] = useState('')
  const [driverName, setDriverName] = useState('')
  const [departureCity, setDepartureCity] = useState('')
  const [arrivalCity, setArrivalCity] = useState('')
  const [departureDate, setDepartureDate] = useState()
  const [arrivalDate, setArrivalDate] = useState()

  useEffect(() => {
    events = [...allEvents]
    events.push(newEvent)
    setAllEvents(events)
    addListener(events)
    setTimeout(displayRoute, 300, events)
  }, [newEvent])

  return (
    <form id="form" className={!formVisible ? 'transition' : ''}>
      <div className="overlay"></div>
      <div className="form_wrapper">
        <h3>Create new event</h3>
        <input
          type="text"
          placeholder="Event Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Truck Name"
          onChange={(e) => setTruckName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Driver Name"
          onChange={(e) => setDriverName(e.target.value)}
        />
        <div className="event-cities">
          <div className="departure-city-container">
            <input
              placeholder="Departure City"
              type="text"
              className="city-inpt"
              onChange={(e) => setDepartureCity(e.target.value)}
            />
          </div>
          <div className="arrival-city-container">
            <input
              placeholder="Arrival City"
              type="text"
              className="city-inpt"
              onChange={(e) => setArrivalCity(e.target.value)}
            />
          </div>
        </div>
        <div className="event-date">
          <div className="departure-date-container">
            <p>Departure</p>
            <input
              type="date"
              className="date-inpt"
              onChange={(e) => setDepartureDate(new Date(e.target.value))}
            />
          </div>
          <div className="arrival-date-container">
            <p>Arrival</p>
            <input
              type="date"
              className="date-inpt"
              onChange={(e) => setArrivalDate(new Date(e.target.value))}
            />
          </div>
        </div>
        <div
          className="create-event-btn"
          onClick={() => {
            setNewEvent({
              title,
              truckName,
              driverName,
              departureCity,
              arrivalCity,
              start: departureDate,
              end: arrivalDate,
            })
          }}
        >
          Create event
        </div>
      </div>
    </form>
  )
}

export default Form
