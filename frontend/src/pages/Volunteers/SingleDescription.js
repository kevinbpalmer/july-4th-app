import React from 'react'

const SingleDescription = ({title, text, text2, time, time2}) => {
  return (
    <div className='description-item'>
      <h4>{title}</h4>
      <p>
        {text}
      </p>
      {text2 &&
      <p>
        {text2}
      </p>}
      <p>
        <b>{time}</b>
      </p>
      {time2 &&
      <p>
        <b>{time2}</b>
      </p>}
    </div>
  )
}

export default SingleDescription
