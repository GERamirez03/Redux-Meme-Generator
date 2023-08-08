import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewMemeForm from "./NewMemeForm";
import "./MemeList.css";

function MemeList() {
    const memes = useSelector(store => store.memes);
    const dispatch = useDispatch();

    const remove = (targetId) => dispatch({ type: "DELETE", payload: targetId});

    return (
    <>
        <h1>Meme Generator</h1>
        <NewMemeForm/>
        <div>
            <h2>Meme Gallery</h2>
            {memes.map(meme => {
                const { imageUrl, topText, bottomText, id } = meme;

                return (
                <div key={id}>
                    <div className="Meme">
                        <div className="Meme-top">{ topText }</div>
                        <img src={imageUrl} alt=""/>
                        <div className="Meme-bottom">{ bottomText }</div>
                    </div>
                    <button onClick={() => remove(id)}> Remove </button>
                </div>
                )
            })}
        </div>
    </>
    );
}

export default MemeList;