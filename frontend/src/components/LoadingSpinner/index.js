import React from 'react';

// loading spinner
import loadingSpinner from 'styles/loading.svg'

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-wrapper'>
      <img
        src={loadingSpinner}
        alt='spinning loading icon'
      />
    </div>
  )
}

export default LoadingSpinner;
