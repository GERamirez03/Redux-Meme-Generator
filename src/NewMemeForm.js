import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

function NewMemeForm() {

    const INITIAL_STATE = {
        imageUrl: "",
        topText: "",
        bottomText: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const dispatch = useDispatch();

    const createMeme = memeData => {
        const meme = { ...memeData, id: v4() }
        dispatch({ type: "CREATE", payload: meme });
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createMeme(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <h2>Create a Meme!</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="url"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label htmlFor="topText">Top Text:</label>
                    <input
                        id="topText"
                        name="topText"
                        type="text"
                        value={formData.topText}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label htmlFor="bottomText">Bottom Text:</label>
                    <input
                        id="bottomText"
                        name="bottomText"
                        type="text"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </p>

                <button>Create Meme!</button>
            </form>
        </div>
    )
}

export default NewMemeForm;