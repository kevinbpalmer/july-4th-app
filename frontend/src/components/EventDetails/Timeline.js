import React from 'react'

// component(s)
import SingleTimelineItem from './SingleTimelineItem'

const Timeline = () => {
  return (
    <div className='timeline-container'>
      <div className='separator'></div>
      <SingleTimelineItem
        time='10:45AM'
        name={['Parade Line-Up']}
      />
      <SingleTimelineItem
        time='11:00AM'
        name={['Parade Begins']}
      />
      <SingleTimelineItem
        time='11:30AM - 1:30PM'
        name={['Shaved Ice Truck']}
      />
      <SingleTimelineItem
        time='11:30AM - 2:30PM'
        name={['Face Painting']}
      />
      <SingleTimelineItem
        time='ALL DAY'
        name={['Inflatable Obstacle Course']}
      />
      <SingleTimelineItem
        time='TBA'
        name={['Magician']}
      />
      <SingleTimelineItem
        time='TBA'
        name={['Kid Activity']}
      />
      <SingleTimelineItem
        time='12:00PM'
        name={['Hot Dog Lunch']}
      />
      <SingleTimelineItem
        time='1:00PM'
        name={['Cornhole Tournament']}
        clickable={true}
        link='/cornhole'
      />
      <SingleTimelineItem
        time='3:30PM'
        name={['Kickball/Sloshball Tournament']}
      />
      <SingleTimelineItem
        time='6:00PM'
        name={['Potluck Dinner']}
        clickable={true}
        link='/potluck'
      />
      <SingleTimelineItem
        time='6:00PM - 11:30PM'
        name={['Live Band']}
      />
      <SingleTimelineItem
        time='7:45PM'
        name={['Giveaway']}
      />
      <SingleTimelineItem
        time='9:15PM'
        name={['Grand Firework Show']}
      />
    </div>
  )
}

export default Timeline
