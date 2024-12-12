import React from 'react'
import './spinner.css'
const Spinner = () => {
  return (
    <div>
        <svg className='parent_spinner' viewBox="25 25 50 50">
        <circle className='circle_spinner' r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
  )
}

export default Spinner
