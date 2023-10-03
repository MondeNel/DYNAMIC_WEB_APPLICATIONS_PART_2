import { useState } from 'react';
import MemeData from '../MemeData';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(MemeData)





    function getMemeImage() {
        const { memes } = allMemeImages.data;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const url = memes[randomIndex].url
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            };
        });
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
                <img src={meme.randomImage} className="meme-image" alt="Meme" />
            </div>
        </main>

    );
};

export default Meme;
