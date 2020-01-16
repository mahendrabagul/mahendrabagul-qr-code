import React from 'react';
import { Container, NavbarBrand,Navbar,  Row, Col } from 'reactstrap';
import './App.css';
import Demo from './Demo';
function App() {
    return <>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Mahendra Bagul</NavbarBrand>
            </Navbar>
            <Container >
              <Row>
                <Col  sm="12" md={{ size: 6, offset: 4 }}><Demo/></Col>
              </Row>
            </Container>
          </>
}

export default App;
