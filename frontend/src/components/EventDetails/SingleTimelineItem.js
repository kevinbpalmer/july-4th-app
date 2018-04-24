import React from 'react'
import {Link} from 'react-router-dom'

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


const SingleTimelineItem = ({time, name, clickable, link, id}) => {
  return (
    <div className='single-item'>
      <p className='time'>{time}</p>
      {clickable === true &&
        <p className='event-name'>
          <Link to={link}>{renderEvents(name)}</Link>
        </p>
      }
      {!clickable &&
        <p className='event-name'>
          {renderEvents(name)}
        </p>
      }
    </div>
  )
}

export default SingleTimelineItem
