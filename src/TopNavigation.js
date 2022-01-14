import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const TopNavigation = ({ evolution }) => {
    const tabIndex = evolution === 0 ? '-1' : undefined
    const color = evolution === 0 ? '#73A1FF' : '#F8F8FF'

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#dashboard" tabIndex={tabIndex}>
                    Sportify
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        style={{ color }}
                        href="#dashboard"
                        tabIndex={tabIndex}
                    >
                        Dashboard
                    </Nav.Link>
                    <Nav.Link
                        style={{ color }}
                        href="#training"
                        tabIndex={tabIndex}
                    >
                        Training
                    </Nav.Link>
                    <Nav.Link
                        style={{ color }}
                        href="#explore"
                        tabIndex={tabIndex}
                    >
                        Explore
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ color }}>
                        Signed in as:{' '}
                        <a href="#profile" tabIndex={tabIndex}>
                            Emily Hû
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
