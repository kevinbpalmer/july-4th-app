import React from 'react'

const renderEvents = arrayOfEvents => {
  const listItems = arrayOfEvents.map((item, index) => {

    return (
      <span key={index}>
        {item} <br />
      </span>
    )
  });

  return listItems;
}


const SingleTimelineItem = ({time, name}) => {
  return (
    <div className='single-item'>
      <p className='time'>{time}</p>
      <p className='event-name'>
        {renderEvents(name)}
      </p>
    </div>
  )
}

export default SingleTimelineItem
