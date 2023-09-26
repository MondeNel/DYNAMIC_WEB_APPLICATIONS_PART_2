import React from 'react';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className='project-image'>
                    <img src="./project-images/group-image.png" alt="image" />
                </div>
                <div>
                    <h1 className="hero-header">Online Experiences</h1>
                    <p className="hero-text">Join unique interactive activities led by
                        one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>

            <aside className="email-container">
                <div>
                    <h1 className="email-header">Get in touch with us</h1>
                    <form className="email-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name : </label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email : </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message : </label>
                            <textarea
                                id="message"
                                className="form-textarea"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-button">Submit</button>
                        </div>
                    </form>
                </div>
            </aside>
        </section>
    );
}

export default Hero;
