import React from "react";
import { Button } from 'reactstrap';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text ? props.text : "Click me!",
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="button">{this.props.value}</label><br />
                
                <Button 
                color="primary"
                size="sm"
                onClick={() => this.props.handleClick()}
                className="mt-2"
                >{this.state.text}</Button>
            </div>
        );
    }
}
