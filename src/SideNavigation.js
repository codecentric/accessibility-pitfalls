import Nav from 'react-bootstrap/Nav'

export const SideNavigation = () => (
    <Nav
        className="d-md-block bg-light sidebar"
        activeKey="/my-profile"
        onSelect={(selectedKey) => null}
    >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
            <Nav.Link tabIndex="-1" href="#profile">
                My Profile
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link tabIndex="-1" href="#settings">
                Settings
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link tabIndex="-1" href="#security">
                Security
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link tabIndex="-1" href="#notifications">
                Notifications
            </Nav.Link>
        </Nav.Item>
    </Nav>
)
