import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';



const Categories = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Link Link to="/Dals">
                        <img src="https://flashplus.in/wp-content/uploads/2023/11/groceries-04.jpg" alt="Image 1" className="img-fluid" />
                        <Button variant="link">Explore More</Button>

                    </Link>

                </Col>
                <Col md={4}>
                    <Link to="/Masalas">
                        <img src="https://flashplus.in/wp-content/uploads/2023/11/groceries-03.jpg" alt="Image 2" className="img-fluid" />
                        <Button variant="link">Explore More</Button>
                    </Link>
                   
                    
                </Col>
                <Col md={4}>
                    <Link to="/Oils">
                        <img src="https://flashplus.in/wp-content/uploads/2023/11/groceries-02.jpg" alt="Image 3" className="img-fluid" />
                    <Button variant="link">Explore More</Button>
                    </Link>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Categories;

