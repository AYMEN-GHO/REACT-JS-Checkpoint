import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button,Form,Col,InputGroup,FormControl,Navbar,Nav,NavDropdown,Carousel,Image} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="secondary" expand="lg">


      <Image width="200px" src="https://www.logomoose.com/wp-content/uploads/2017/12/dream-travel.jpg" thumbnail />
    
   
  <Navbar.Brand href="#home" id="home" bg='light'>DREAM TRAVEL</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Destinations" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">AFRICA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">ASIA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">EUROPE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">NORTH AMERICA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SOUTH AMERICA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">OCEANA</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">SPECIAL</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      <Form className="login">
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Client name"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="email" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      style={{maxWidth:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1586246978859-b144125fc931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>AFRICA</h3>
      <p>Discover wildlife that you will never find it elsewhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      style={{maxWidth:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>ASIA</h3>
      <p>Enhance the most valuable cultural variance</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      style={{maxWidth:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1503192851959-c6da8ac80cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>EUROPE</h3>
      <p>Enjoy the oldest continent from mediterranean till the arctic borders</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      style={{maxWidth:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1563194081-ef73fa8f19be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      alt="Forth slide"
    />
    <Carousel.Caption>
      <h3>NORTH AMERICA</h3>
      <p>Have a clear and better ideas about the new world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{maxWidth:"100%"}}
         className="d-block w-100"
      src="https://images.unsplash.com/photo-1597115793997-06eb0c3cfe24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>SOUTH AMERICA</h3>
      <p>Discover latinos cultures using our charismatic and authentic ways</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      style={{maxWidth:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1526515579900-98518e7862cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80"
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>OCEANA</h3>
      <p>This is what we called a world apart</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      style={{maxHigh:"100%"}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1562&q=80"
      alt="Seventh slide"
    />
    <Carousel.Caption>
      <h3>SPECIAL DESTINATION</h3>
      <p>Only for Very Important Poeple</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default App;
