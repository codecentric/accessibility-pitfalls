import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const TopNavigation = () => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#dashboard" tabIndex="-1">
                Sportify
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link
                    style={{ color: '#73A1FF' }}
                    href="#dashboard"
                    tabIndex="-1"
                >
                    Dashboard
                </Nav.Link>
                <Nav.Link
                    style={{ color: '#73A1FF' }}
                    href="#training"
                    tabIndex="-1"
                >
                    Training
                </Nav.Link>
                <Nav.Link
                    style={{ color: '#73A1FF' }}
                    href="#explore"
                    tabIndex="-1"
                >
                    Explore
                </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: '#73A1FF' }}>
                    Signed in as:{' '}
                    <a href="#profile" tabIndex="-1">
                        Emily Hû
                    </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
