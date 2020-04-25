import React from 'react'
import "./Navigation.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className ="bgColor" variant="dark" sticky="top">
                <Navbar.Brand href="/" className = "mr-auto">Blood Pressure Classification</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

export default Navigation;