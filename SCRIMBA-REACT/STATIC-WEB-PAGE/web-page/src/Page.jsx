import React from 'react'
import reactLogo from './assets/react.svg'

const Page = () => {

  return (

    <div>

      <header>
        <nav>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </nav>
      </header>

      <h1>Reasons I'm excited to learn React</h1>

      <ol>
        <li>It's a popular library</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>

      <footer>© 20xx development. All rights reserved</footer>

    </div>
  )
}

export default Page
