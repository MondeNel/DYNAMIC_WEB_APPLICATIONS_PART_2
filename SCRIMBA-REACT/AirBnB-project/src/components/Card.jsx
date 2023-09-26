import React from 'react';
import '@shoelace-style/shoelace/dist/components/rating/rating';

const Card = (props) => {

    return (
        <div className='container'>
            <img src={`./src/project-images/${props.img}`} alt="image" />
            <div className="card-container">
                <sl-rating
                    value={props.rating}
                    max={6}
                    className="rating"
                ></sl-rating>
                <span className="gray">5.0({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>

    );
};

export default Card;
