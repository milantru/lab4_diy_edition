import React from "react";
import Counter from "./../components/Counter";

export default class Page4 extends React.Component {
    render() {
        return (
            <main>
                <h1>Welcome to the Page4</h1>
                <Counter value={this.props.value} handleClick={this.props.handleClick} />
            </main>
        );
    }
}
