import React from 'react';
import { Input, Label, Button } from 'reactstrap';

export default class TextInputWithResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    render() {
        return (
            <form>
                <Input 
                id="text-input"
                type="text" 
                onChange={() => this.setState({text: document.getElementById("text-input").value})}
                className="w-75" />

                <Button 
                color="danger"
                size="sm" 
                onClick={() => {
                    document.getElementById("text-input").value = "";   // for some reason this stopped firing onChange event on Input element...
                    this.setState({text: ""});                          // so I had to add this
                }}
                className="mt-2 mb-1">
                Reset</Button><br />

                <Label htmlFor="text-input" className="w-75 overflow-auto h-100"><b>You wrote: </b>{this.state.text}</Label>
            </form>
        );
    }
}
