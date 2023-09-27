import React from 'react';
import '@shoelace-style/shoelace/dist/components/rating/rating';

/**
 * Card Component
 *
 * Represents a card displaying information about a product or item.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.img - The image source URL for the card.
 * @param {number} props.rating - The rating value for the card.
 * @param {number} props.reviewCount - The number of reviews for the card.
 * @param {string} props.location - The location of the card.
 * @param {string} props.title - The title of the card.
 * @param {number} props.price - The price of the card per person.
 * @returns {JSX.Element} The rendered Card component.
 */

const Card = (props) => {

    const badgeText = props.item.openSpots === 0 ? "SOLD OUT" : props.item.location === "Online" ? "ONLINE" : null;

    return (

        <section>
            <div className='card'>

                {badgeText && <div className="card-badge">{badgeText}</div>}

                <img
                    src={`/project-images/${props.item.coverImg}`}
                    alt="image"
                    className="card-image"
                />

                <div className="card-stats">
                    <sl-rating value={props.item.stats.rating} max={1} className="card-star"></sl-rating>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
                </div>

                <div className="card-title">
                    <p>{props.item.title}</p>
                </div>

                <div className="card-price">
                    <p><span className="bold">From ${props.item.price}</span> / person</p>
                </div>

            </div>
        </section>
    );
};

export default Card;
