import React from 'react';

const ErrorBlock = ({text}) => {
  return (
    <div className='error-wrapper'>
      <p>
        {text ? text : 'Error! Please check the fields and try again.'}
      </p>
    </div>
  )
}

export default ErrorBlock;
