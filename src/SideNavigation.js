import Nav from 'react-bootstrap/Nav'

export const SideNavigation = ({ evolution }) => {
    const tabIndex = evolution === 0 ? '-1' : undefined

    return (
        <Nav
            className="d-md-block bg-light sidebar"
            activeKey="/my-profile"
            onSelect={(selectedKey) => null}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link tabIndex={tabIndex} href="#profile">
                    My Profile
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link tabIndex={tabIndex} href="#settings">
                    Settings
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link tabIndex={tabIndex} href="#security">
                    Security
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link tabIndex={tabIndex} href="#notifications">
                    Notifications
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
