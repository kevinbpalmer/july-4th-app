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
        time='11:30AM - 2:30PM'
        name={['Face Painting']}
      />
      <SingleTimelineItem
        time='ALL DAY'
        name={['Inflatable Obstacle Course']}
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
        time='1:30PM - 3:00PM'
        name={['Shaved Ice Truck']}
      />
      <SingleTimelineItem
        time='2:00PM'
        name={['Magician - Magic of Matt']}
        clickable={true}
        external={true}
        link='//www.youtube.com/channel/UCcFsr3-KmyRmzlYZUdBm8EQ'
      />
      <SingleTimelineItem
        time='6:00PM'
        name={['Potluck Dinner']}
        clickable={true}
        link='/potluck'
      />
      <SingleTimelineItem
        time='6:00PM - 11:15PM'
        name={['Live Band']}
      />
      <SingleTimelineItem
        time='7:00PM - 9:00PM'
        name={['Photo Booth']}
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
