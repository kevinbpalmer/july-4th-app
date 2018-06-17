import React from 'react'
import {NavLink} from 'react-router-dom'

// components
import SingleSponsor from './SingleSponsor'

// logos
import tomSmith from './logos/tom-smith.jpg'
import allStar from './logos/allstar.jpg'
import propertySolutions from './logos/property-solutions.png'
import johnJones from './logos/john-jones.jpg'
import vannGo from './logos/vanngo_logo.jpg'
import jcMechanical from './logos/jc_mechanical_logo.jpg'
import topOfTheLine from './logos/topofthelinelandscape_logo.jpg'
import cbiz from './logos/cbiz_logo.png'
import golfCart from './logos/golfcarts_logo.jpg'
import audioVideoElements from './logos/audio_video_elements.png'

// stylesheet
import './styles.sass'

const Sponsors = () => {
  return (
    <div className='sponsors-container container'>
      <h2>Sponsors</h2>
      <p>The Harvest community would like to thank and recognize all of our generous sponsors!</p>
      <div className='sponsors-inner-container'>
        <SingleSponsor
          logo={tomSmith}
          name='Tom Smith'
          company='Tom Smith Group - Keller Williams'
          url='Sellwithtommy.com'
        />
        <SingleSponsor
          logo={allStar}
          name='Libby and James Ledwell'
          company='Allstar Fence and Deck'
          url='allstarfence615.com'
        />
        <SingleSponsor
          logo={johnJones}
          name='Angi Morgan, Realtor'
          company='John Jones Real Estate, LLC'
          url='murfreesborohomesonline.com/agents/81047-Angi-Morgan/'
        />
        <SingleSponsor
          logo={propertySolutions}
          name='Property Solutions of Middle Tennessee'
          company='Harvest HOA'
          url='propertysolutionsmt.com'
        />
        <SingleSponsor
          logo={johnJones}
          name='John Jones, Owner'
          company='John Jones Real Estate, LLC'
          url='Murfreesborohomesonline.com'
        />
        <SingleSponsor
          logo={jcMechanical}
          name='Jeremy and Amanda Lipetri'
          company='JC Mechanical'
          url='murfreesborotnheatingandair.com'
        />
        <SingleSponsor
          logo={vannGo}
          name='Damian and Lisa Baker'
          company='VannGo'
          url='GoVannGo.com'
        />
        <SingleSponsor
          logo={topOfTheLine}
          name='Chris Brown'
          company='Top of the Line Landscape'
          url='topofthelinelandscape.com'
        />
        <SingleSponsor
          logo={cbiz}
          name='Jon Chaney'
          company='CBIZ Employee Services Organization'
          url='linkedin.com/in/jon-chaney-a5ba935'
        />
        <SingleSponsor
          logo={golfCart}
          name='John Phillips'
          company='Golf Carts Fore Less'
          url='golfcartsforeless.com/'
        />
        <SingleSponsor
          logo={audioVideoElements}
          name='Aaron and Stephanie Lawrence'
          company='Audio Video Elements'
          url='audiovideoelements.com'
        />
      </div>
      <NavLink className='btn btn-default btn-form' to='/contact'>
        Interested in sponsoring?
      </NavLink>
    </div>
  )
}

export default Sponsors;
