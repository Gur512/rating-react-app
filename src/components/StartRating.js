import { useState } from 'react';
import Star from './Star';

function StarRating() {
    const [rating, setRating] = useState(0);
    const messages = ["Terrible", "Bad", "Okay", "Good", "Excellent"];
    const stars = [0, 1, 2, 3, 4];
    
    const clicked = (index) => {
        setRating(index + 1);
    };

    return (
        <div className='container'>
            <h2 className='text'>
                {rating > 0 ? messages[rating - 1] : "Rate this Meme!"}
            </h2>
            <div className='star-section'>
                {stars.map((i) => (
                    <Star
                        key={i}
                        selected={i < rating}
                        onClick={() => clicked(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default StarRating;