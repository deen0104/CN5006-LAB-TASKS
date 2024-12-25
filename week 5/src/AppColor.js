import React from 'react';

function AppColor(props) {
    // Function to change the background color and show an alert
    function greetUser(e) {
        // Change the background color of the body based on the input field value
        document.body.style.background = e.target.value;

        // Alert the value entered in the input field
        alert("Welcome Mr " + document.getElementById(props.color).value);
    }

    return (
        <div className="App" style={{ backgroundColor: 'powderblue', color: 'black' }}>
            <h1>{props.heading}</h1>
            <p style={{ color: 'blue', font: '30px Arial' }}>How to create a function component.</p>

            <label className="label" id="lbl">{props.lbl}</label>
            <input id={props.color} type="text" />

            <button value={props.color} onClick={greetUser}>Colour me {props.color}</button>
        </div>
    );
}

export default AppColor;
