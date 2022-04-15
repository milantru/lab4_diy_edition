import React from "react";

export default class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <label htmlFor="button">{this.props.value}</label>
                <button 
                id="button"
                onClick={() => this.props.handleClick()}
                >Click me!</button>
            </div>
        );
    }
}
