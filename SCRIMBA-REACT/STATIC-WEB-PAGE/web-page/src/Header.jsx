import React from 'react'
import reactLogo from './assets/react.svg'


const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <img src={reactLogo} className="logo-react" alt="React logo" />
                <h2 className='logo-text'>ReactFacts</h2>
                <h3 className='title-text'>React Course - Project 1</h3>
            </nav>
        </header>
    )
}

export default Header