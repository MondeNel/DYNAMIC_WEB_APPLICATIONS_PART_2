import React from 'react';
import '@shoelace-style/shoelace/dist/components/rating/rating';

const Card = () => {
    const rating = 5.0;

    return (
        <div className='container'>
            <img src="./src/project-images/kattie.png" alt="image" />
            <div className="card-container">
                <sl-rating
                    value={rating}
                    max={6}
                    className="rating"
                ></sl-rating>
                <span className="gray">5.0(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>

    );
};

export default Card;
