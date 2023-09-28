import React from 'react'
import MemeData from '../MemeData';


const Meme = () => {

    function getMemeImage() {
        const { memes } = MemeData.data;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];
        const memeUrl = randomMeme.url;
        console.log(memeUrl);
    }

    return (
        <main>
            <div className='form-container'>
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

        </main >
    )
}

export default Meme