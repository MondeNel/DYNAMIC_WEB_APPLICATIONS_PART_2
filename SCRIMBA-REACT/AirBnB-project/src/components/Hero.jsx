import React from 'react';

/**
 * Represents a Hero section displaying an image and a title with text.
 * @returns {JSX.Element} The rendered Hero component.
 */
const Hero = () => {
    return (
        <section>
            <div className='project-image'>
                <img src="./src/project-images/group-image.png" alt="image" />
            </div>
            <div>
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;
