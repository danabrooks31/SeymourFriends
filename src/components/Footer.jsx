import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import MapFooter from './MapFooter';
import './Footer.css'; 

function Footer() {
  return (
    <footer> 
        <Container fluid>
            <Row className = "main-footer">
                <Col>
                    <Stack className = "footer-content">
                        <h1 className = "head">Contact Us</h1>
                        <p><i>Seymourfriends@gmail.com</i></p>
                        <p>2551 Homestead Rd, Chapel Hill, NC 27516</p>
                        <p>(919) 968-2070</p>
                    </Stack>
                </Col>
                <Col className = "footer-map">
                    <MapFooter />
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
