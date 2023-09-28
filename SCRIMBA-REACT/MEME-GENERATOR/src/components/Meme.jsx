import React from 'react'

const Meme = () => {
    return (
        <main>

            <div className='form-container'>
                <form className="form">
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
                    >
                        Get a new meme image 🖼
                    </button>
                </form>

            </div>

        </main>
    )
}

export default Meme