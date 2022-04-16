import React from "react";
import Counter from "./../components/Counter";

export default class Incrementor extends React.Component {
    render() {
        return (
            <div>
                <h1>Incrementor</h1>
                
                <Counter />
            </div>
        );
    }
}
