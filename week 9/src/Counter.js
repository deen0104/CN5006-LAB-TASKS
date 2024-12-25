import { useState } from "react";
function Hook_ControlledButtonState() {
    const [count, setCount] = useState(0); // Initialize count state to 0

    const ClickHandle = () => {
        setCount(count + 1); // Increment count by 1 when button is clicked
    };

    return (
        <div className="App-header">
            <h1>Click Counts are {count}</h1>
            <button type="button" onClick={ClickHandle}>
                Click me {count}
            </button>
        </div>
    );
}

export default Hook_ControlledButtonState;
