import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import MapFooter from './MapFooter';
import './Footer.css'; 

function Footer() {
  return (
    <footer> 
        <Container fluid>
            <Row className="main-footer">
                <Col xs={12} lg={6}>
                    <Stack className="footer-content">
                        <h1 className="head">Contact Us</h1>
                        <p><a href="mailto:Seymourfriends@gmail.com">Seymourfriends@gmail.com</a></p>
                        <p>2551 Homestead Rd, Chapel Hill, NC 27516</p>
                        <p><a href="tel:+19199682070">(919) 968-2070</a></p>
                    </Stack>
                </Col>
                <Col xs={12} lg={6} className="footer-map">
                    <MapFooter />
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
