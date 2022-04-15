import React from "react";
import Counter from "./../components/Counter";

export default class Page3 extends React.Component {
    render() {
        return (
            <main>
                <h1>Welcome to the Page3</h1>
                <Counter value={this.props.value} handleClick={this.props.handleClick} />
            </main>
        );
    }
}
