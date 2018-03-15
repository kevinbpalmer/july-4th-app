import React from 'react'

const SingleTimelineItem = ({time, name}) => {
  return (
    <div className='single-item'>
      <p className='time'>{time}</p>
      <p className='event-name'>{name}</p>
    </div>
  )
}

export default SingleTimelineItem
