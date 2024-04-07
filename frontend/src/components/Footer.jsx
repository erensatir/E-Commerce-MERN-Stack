import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYer = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p>ProShop &copy; {currentYer}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer