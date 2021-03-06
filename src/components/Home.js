// React Elements
import React from 'react';

// React-Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';

// CSS
import '../css/home.css';

// Components
import Poster from '../components/Poster';

function Home() {
    return (
        <Container >
            {/* Row 1 */}
            <Row >
                <Col ><Poster className="poster"/></Col>
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

export default Home