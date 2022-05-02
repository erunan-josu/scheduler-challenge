import React from 'react'
import '../styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({ formHandler, formVisible }) => {
  return (
    <header>
      <div className="add-load" onClick={formHandler}>
        <FontAwesomeIcon
          icon={faPlus}
          className={`add-icon ${formVisible ? 'x-style' : ''}`}
        />
        <p>Add event</p>
      </div>
      <div id="logo">Tennders</div>
    </header>
  )
}

export default Header
