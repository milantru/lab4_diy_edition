import React from 'react';
import { Input, Label, Button } from 'reactstrap';

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
                <Input 
                type="text" 
                onChange={() => this.setState({text: document.getElementById("text-input").value})}
                className="w-75"
                />

                <Button 
                color="danger"
                size="sm" 
                onClick={() => document.getElementById("text-input").value = ""}
                className="mt-1">
                Reset</Button><br />

                <Label htmlFor="text-input"><b>You wrote: </b>{this.state.text}</Label>
            </form>
        );
    }
}
