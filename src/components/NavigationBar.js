import {Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Situs Film </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING </Nav.Link>
                    <Nav.Link href="#film">FILM</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar