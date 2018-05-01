import React from 'react'

const SuccessBlock = ({btnText, successMessage, resetForm}) => {
  return (
    <div className='success-wrapper'>
      <h2>Success!</h2>
      <p>
        {successMessage ? successMessage : 'We look forward to seeing you at the event!'}
      </p>
      <button className='btn btn-default btn-form' onClick={resetForm}>
        {btnText ? btnText : 'Restart form'}
      </button>
    </div>
  )
}

export default SuccessBlock
