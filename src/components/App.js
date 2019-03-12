import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../css/app.css';

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
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
                    <Nav.Link href="#seen" className="seen">SEEN</Nav.Link>
                    <Nav.Link href="#queue" className="watchlist">WATCHLIST</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}


export default App
