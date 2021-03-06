import React from 'react';
import { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Enums, { NavItem } from "../utils/Enums";
import BaseComponent from './BaseComponent';

class SmoothNavBar extends BaseComponent {
    render() {
        const navItems = []
        for (const k of Enums.enumKeys(NavItem)) {
            navItems.push(
                <Nav.Link key={k} href={"#" + k}>{NavItem[k]}</Nav.Link>
            )
        }

        return(
            <Navbar bg="light" expand="lg" sticky="top" 
                className="shadow p-3 mb-5 bg-white rounded">
                <Button variant='light' onClick={this.props.onLangChange}>EN/JP</Button>
                <Navbar.Collapse 
                    className="justify-content-end" 
                    id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SmoothNavBar