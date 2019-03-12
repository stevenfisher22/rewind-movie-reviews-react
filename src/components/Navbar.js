// React Elements
import React from 'react';

// React-Bootstrap Components
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img 
                        src='/images/rewind_logo_pink.png'
                        alt='logo'
                        className='logo'
                    />
                </Navbar.Brand>
                <Form inline className="search">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="/seen" className="seen">SEEN</Nav.Link>
                    <Nav.Link href="/watchlist" className="watchlist">WATCHLIST</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar