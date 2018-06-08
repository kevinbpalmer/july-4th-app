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


const SingleTimelineItem = ({time, name, clickable, link, id, external}) => {
  return (
    <div className='single-item'>
      {clickable === true && external === true &&
        <p className='event-name'>
          <a href={link} target="_blank">{renderEvents(name)}</a>
        </p>
      }
      {clickable === true && !external &&
        <p className='event-name'>
          <Link to={link}>{renderEvents(name)}</Link>
        </p>
      }
      {!clickable &&
        <p className='event-name'>
          {renderEvents(name)}
        </p>
      }

      <p className='time'>{time}</p>

    </div>
  )
}

export default SingleTimelineItem
