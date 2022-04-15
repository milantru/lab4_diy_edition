import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

export default class Navigation extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <Link to="/" className="p-1 text-decoration-none">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/page-with-input" className="p-1 text-decoration-none">Input</Link>
                </NavItem>
                <NavItem>
                    <Link to="/incrementor" className="p-1 text-decoration-none">Inc</Link>
                </NavItem>
                <NavItem>
                    <Link to="/decrementor" className="p-1 text-decoration-none">Dec</Link>
                </NavItem>
            </Nav>
        );
    }
}
