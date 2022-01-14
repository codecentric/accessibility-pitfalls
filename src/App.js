import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SideNavigation } from './SideNavigation'
import { TopNavigation } from './TopNavigation'
import { ProfilePageContent } from './ProfilePageContent'

function App() {
    return (
        <div>
            <TopNavigation />

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col sm={12} md={2} id="sidebar-wrapper">
                        <SideNavigation />
                    </Col>

                    <Col md={{ span: 9, offset: 1 }} id="page-content-wrapper">
                        <ProfilePageContent />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App
