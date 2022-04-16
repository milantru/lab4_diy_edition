import React from "react";
import { Button } from 'reactstrap';
import { CounterContextConsumer } from "./CounterContext";

export default class Counter extends React.Component {
    render() {
        return (
            <CounterContextConsumer>
                {(value) => {
                    return <div>
                            <label htmlFor="button">{value.value}</label><br />

                            <Button 
                            color="primary"
                            size="sm"
                            onClick={() => value.handleClick()}
                            className="mt-2"
                            >{value.text ? value.text : "Click me!"}</Button>
                        </div>
                }}
            </CounterContextConsumer>
        );
    }
}
