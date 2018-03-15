import React from 'react'
import FaClockO from 'react-icons/lib/fa/clock-o'

const Timeline = () => {
  return (
    <div className='timeline-container'>

      <div className='times-container'>
        <p>11:45AM</p>
        <p>12:00PM</p>
        <p>12:30PM</p>
        <p>1:00PM</p>
      </div>

      <div className='separator'></div>

      <div className='event-name'>
        <p>Parade Line-Up</p>
        <p>Parade Begins</p>
        <p>
          Inflatable Obstacle Course <br />
          Shaved Ice Truck <br />
          Kid Activities
        </p>
        <p>Another Event</p>
      </div>

    </div>
  )
}

export default Timeline
