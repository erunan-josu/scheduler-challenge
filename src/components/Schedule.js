import React from 'react'
import { useContext } from 'react'
import AppContext from '../Context'
import '../styles/schedule.scss'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'

import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const Schedule = ({ formVisible }) => {
  const { allEvents } = useContext(AppContext)
  const locales = {
    'en-US': require('date-fns/locale/en-US'),
  }
  const localizer = dateFnsLocalizer({
    format,
    startOfWeek,
    parse,
    getDay,
    locales,
  })

  return (
    <div className={`schedule ${!formVisible ? 'move-left' : ''}`}>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}

export default Schedule
