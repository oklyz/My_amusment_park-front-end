import React from 'react'

const Error=({error})=> {
  return (

    <div class="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.msg}</p>
      <p><a href="javascript:history.back()">Go Back</a></p>
      <p><a href="/">Go Home</a></p>
    </div>
  )
}

export default Error