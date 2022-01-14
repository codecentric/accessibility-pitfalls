import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SideNavigation } from './SideNavigation'
import { TopNavigation } from './TopNavigation'
import { ProfilePageContent } from './ProfilePageContent'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { ButtonGroup } from 'react-bootstrap'

const App = () => {
    const [selectedEvolution, setEvolution] = useState(0)

    return (
        <div style={{ height: '100%' }}>
            <TopNavigation evolution={selectedEvolution} />

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col sm={12} md={2} id="sidebar-wrapper">
                        <SideNavigation evolution={selectedEvolution} />
                    </Col>

                    <Col md={{ span: 9, offset: 1 }} id="page-content-wrapper">
                        <ProfilePageContent evolution={selectedEvolution} />
                    </Col>
                </Row>
            </Container>

            <ButtonGroup style={{ position: 'absolute', bottom: 30, left: 30 }}>
                {Array.from(Array(4).keys()).map((evolution) => (
                    <Button
                        tabIndex="-1"
                        variant={
                            evolution === selectedEvolution
                                ? 'primary'
                                : 'secondary'
                        }
                        onClick={() => setEvolution(evolution)}
                    >
                        {evolution}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default App
