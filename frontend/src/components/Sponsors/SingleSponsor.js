import React from 'react';

const SingleSponsor = ({logo, name, company, url}) => {
  return (
    <div className='single-sponsor'>
      {logo &&
        <a href={`http://${url}`} target='_blank' rel='noopener norefferer'>
          <img
            className='img-fluid single-sponsor-logo'
            src={logo}
            alt={`${company} - sponsor logo`}
          />
        </a>}
      {name && <p>{name}</p>}
      {company && <p>{company}</p>}
      {url && <a href={`http://${url}`} target='_blank' rel='noopener norefferer'>Website</a>}
    </div>
  )
}

export default SingleSponsor;
