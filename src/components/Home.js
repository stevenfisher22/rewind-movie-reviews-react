// React Elements
import React from 'react';

// React-Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';

// Import CSS
import CSS from '../css/home.css';

// Import Components
import Poster from '../components/Poster';

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col><Poster /></Col>
                <Col><Poster /></Col>
                <Col><Poster /></Col>
                <Col><Poster /></Col>
                <Col><Poster /></Col>
                <Col><Poster /></Col>
            </Row>
        </Container>
    )
}

export default Home