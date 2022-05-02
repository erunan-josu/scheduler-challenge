import { useState, createContext } from 'react'

const AppContext = createContext()
const AppContextProvider = ({ children }) => {
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState('')

  let events = [
    {
      title: 'meeting',
      allDay: true,
      start: new Date(2022, 3, 28),
      end: new Date(2022, 3, 29),
    },
    {
      title: 'nooob meeting',
      allDay: true,
      start: new Date(2022, 4, 1),
      end: new Date(2022, 4, 5),
    },
  ]
  const [newEvent, setNewEvent] = useState('')
  const [allEvents, setAllEvents] = useState(events)

  const displayRoute = (totalEvents) => {
    // Array of events on Calendar
    const routes = Array.prototype.slice.call(
      document.querySelectorAll('.rbc-event-content')
    )

    // Add click event to routes
    routes.forEach((route) => {
      if (route.classList.contains('click') === false) {
        route.addEventListener('click', () => {
          totalEvents.forEach((event) => {
            //Display Event
            if (event.title === route.innerText) {
              setDetailsVisible(true)
              setSelectedEvent(event)
            }
          })
        })

        route.classList.add('click')
      }
    })
  }

  const addListener = (totalEvents) => {
    // Get Calendar buttons
    const buttons = Array.prototype.slice.call(
      document.querySelectorAll('.rbc-btn-group button')
    )

    // Add Click event
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setTimeout(displayRoute, 300, totalEvents)
      })
    })
  }

  const data = {
    events,
    newEvent,
    setNewEvent,
    allEvents,
    setAllEvents,
    displayRoute,
    addListener,
    detailsVisible,
    selectedEvent,
    setSelectedEvent,
    setDetailsVisible,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export { AppContextProvider }
export default AppContext
