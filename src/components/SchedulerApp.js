import React, { useContext } from 'react'
import AppContext from '../Context'
import '../styles/schedulerApp.scss'
import Form from './Form'
import Schedule from './Schedule'
import Details from './Details'

const SchedulerApp = ({ formVisible }) => {
  const { detailsVisible } = useContext(AppContext)
  return (
    <main className="app-container">
      <Form formVisible={formVisible} />
      {!detailsVisible ? (
        <Schedule formVisible={formVisible} />
      ) : (
        <Details formVisible={formVisible} />
      )}
    </main>
  )
}

export default SchedulerApp
