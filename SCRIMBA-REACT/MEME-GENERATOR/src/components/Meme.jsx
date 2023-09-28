import { useState } from 'react';
import MemeData from '../MemeData';

const Meme = () => {
    const [memeImage, setMemeImage] = useState('');

    function getMemeImage() {
        const { memes } = MemeData.data;
        const randomIndex = Math.floor(Math.random() * memes.length);
        setMemeImage(memes[randomIndex].url);
    }

    return (
        <main>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme-image-container">
                <img src={memeImage} className="meme-image" alt="Meme" />
            </div>
        </main>

    );
};

export default Meme;
