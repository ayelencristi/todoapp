import { FC } from "react"
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const NavBar: FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">TodoApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link className="d-flex" href="#action1">Dashboard</Nav.Link>
                    <Nav.Link className="d-flex" href="#action2">Add Task</Nav.Link>
                    <Nav.Link className="d-flex">
                        <Button variant="outline-success">Logout</Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavBar }