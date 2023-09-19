import React from 'react'
import reactLogo from './assets/react.svg'

const Page = () => {
  return (
    <div>

      <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Fun Facts About React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over a 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

    </div>
  )
}

export default Page
