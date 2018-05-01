import React, { Component } from 'react'

// components
import Timeline from './Timeline'

// stylesheet(s)
import './styles.sass'

class EventDetails extends Component {
  render() {
    return (
      <section id='details'>
        <h2>Event Details</h2>
        <h5 style={{ marginBottom: 0 }}>Saturday, June 30th, 2018</h5>
        <h5>1306 Harvest Grove Blvd</h5>
        <h5>Festivities begin at 11:00 am</h5>
        <p>Times subject to change leading up to event day. <br /> All activities are dependant on the amount of donations received.</p>
        <Timeline />
        <span>- See below regarding parking -</span>
        <div className='event-details container'>
          <div className='single-event'>
            <h4>Parade</h4>
            <p className='time'>
              Line up at 10:45 am, begins at 11:00 am
            </p>

            <p>
              The ½ mile Annual Harvest Independence Day parade begins at the corner of Harvest Grove Boulevard and Zoe Court and will head south towards Cutoff Road, where it will turn left onto Apricot Lane and end back at the start line. The Walter Hill Fire Department will be the Grand Marshal of this spirited parade. Join us with your festive bikes, scooters, wagons, golf carts, lawn mowers, floats, and more!
            </p>
          </div>
          <div className='single-event'>
            <h4>Shaved Ice Truck</h4>
            <p className='time'>
              11:30 pm - 1:30 pm
            </p>

            <p>
              Kona Ice will return this year with your favorite treats that contain no artiﬁcial sweeteners, no high fructose corn syrup and no peanut derivatives. They are fat free, gluten free, dairy free, and lactose free. Sugar free, dye free, and Kosher certiﬁed products are available upon request.
            </p>
          </div>
          <div className='single-event'>
            <h4>Hot Dog Lunch</h4>
            <p className='time'>
              12:00 pm
            </p>

            <p>
              Delicious hot dogs will be served with chips and various toppings such as nacho cheese, chili, relish, ketchup, and mustard! Come one, come all!
            </p>
          </div>
          <div className='single-event'>
            <h4>Kickball/Sloshball Tournament</h4>
            <p className='time'>
              3:30 pm
            </p>

            <p>
              This kids versus adults kickball tournament will take place between 1215 & 1301 Harvest Grove Blvd. It’s your classic game of kickball with a twist - adults must hold a beverage at ALL times!
            </p>
          </div>
          <div className='single-event'>
            <h4>Live Band - Janine LeClair Entertainment</h4>
            <p className='time'>
              6:00 pm - 11:30 pm
            </p>

            <p>
              Get ready to rock out all night with this cover band that sings Top 40, Country, Pop, Rock, Soul, and Oldies covers!
            </p>
          </div>
          <div className='single-event'>
            <h4>Giveaway</h4>
            <p className='time'>
              7:45 pm - Winners Announced
            </p>

            <p>
              One entry per person. Must be present to win! No purchase necessary. Some restrictions may apply to certain prizes.
            </p>
          </div>
          <div className='single-event'>
            <h4>Grand Firework Show</h4>
            <p className='time'>
              9:15 pm
            </p>

            <p>
              What better way to celebrate our country’s independence than a fun-filled day of activities with your community and an incredible firework show? This extravagant firework show will be one for the books! Bring ear plugs for the little ones and get ready to be amazed. Chairs will be provided. You don’t want to miss this rockin’ event!
            </p>
          </div>
          <div className='single-event'>
            <h4>Parking</h4>
            <p className='time'>
              Designated parking will be on Beverly Randolph Drive and any other street other than Harvest Grove Boulevard and Zoe Court. These streets need to be clear throughout the day in case of an emergency situation. The streets will be blocked off in an effort to keep traffic away from the event location, so there is no stress of keeping out of the streets (especially children).
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default EventDetails
