import React from 'react';
import '@shoelace-style/shoelace/dist/components/rating/rating';


const Card = (props) => {
    return (

        <section>

            <div className='card'>
                <img
                    src={`/project-images/${props.img}`}
                    alt="image"
                    className="card-image"
                />

                <div className="card-stats">
                    <sl-rating value={props.rating} max={1} className="card-star"></sl-rating>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>

                <div className="card-title">
                    <p>{props.title}</p>
                </div>

                <div className="card-price">
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>

            </div>


        </section>

    );
};

export default Card;
