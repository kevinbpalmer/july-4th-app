import React from 'react'

// component(s)
import SingleTimelineItem from './SingleTimelineItem'

const Timeline = () => {
  return (
    <div className='timeline-container'>
      <div className='separator'></div>
      <SingleTimelineItem
        time='11:45AM'
        name={['Parade Line-Up']}
      />
      <SingleTimelineItem
        time='12:00PM'
        name={['Parade Begins']}
      />
      <SingleTimelineItem
        time='12:30PM'
        name={['Inflatable Obstacle Course', 'Shaved Ice Truck']}
      />
      <SingleTimelineItem
        time='1:00PM'
        name={['Other Activities']}
      />
    </div>
  )
}

export default Timeline
