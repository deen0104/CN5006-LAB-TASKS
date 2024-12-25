import React, { useState, useEffect } from "react";
import Love from './Love.png';
import Sad from './sad.png';
import Like from './like.png';
function EmojiCounter(props) {
    console.log("pic is ", props.pic); // Log the pic prop for debugging

    const [pic, setPic] = useState(Love); // Default image
    const [count, setCount] = useState(0); // Default count

    useEffect(() => {
        // Change the image based on the prop passed
        if (props.pic === "Love") setPic(Love);
        else if (props.pic === "Like") setPic(Like);
        else if (props.pic === "Sad") setPic(Sad);
    }, [props.pic]);

    const ClickHandle = () => {
        setCount(count + 1); // Increment count when button is clicked
    };

    return (
        <div className="App">
            <p>{props.pic}</p>
            <button onClick={ClickHandle}>
                {count} <img src={pic} alt={props.pic} />
            </button>
        </div>
    );
}

export default EmojiCounter;
