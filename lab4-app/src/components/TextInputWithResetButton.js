import React from 'react';

export default class TextInputWithResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                id="text-input"
                onChange={() => this.setState({text: document.getElementById("text-input").value})}
                />

                <button onClick={() => document.getElementById("text-input").value = ""}>Reset</button><br />

                <label htmlFor="text-input">You wrote: {this.state.text}</label>
            </form>
        );
    }
}