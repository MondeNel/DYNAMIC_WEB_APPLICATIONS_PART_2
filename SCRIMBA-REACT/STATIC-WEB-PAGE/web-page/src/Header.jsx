import React from 'react'
import reactLogo from './assets/react.svg'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header