// React Elements
import React from 'react';

// React-Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';

// Components
import Poster from '../components/Poster';



function Watchlist() {
    return (
        <Container >
        {/* Row 1 */}
        <Row >
            <Col ><Poster /></Col>
            <Col ><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
        </Row>
        {/* Row 2 */}
        <Row >
            <Col ><Poster /></Col>
            <Col ><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
        </Row>
        {/* Row 3 */}
        <Row >
            <Col ><Poster /></Col>
            <Col ><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
            <Col><Poster /></Col>
        </Row>
    </Container>

    )
}

export default Watchlist