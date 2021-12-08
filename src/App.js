import { Formik } from 'formik';
import * as yup from 'yup';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required').min(3, 'Not long enough').matches(/^[a-zA-Z]+$/, 'No special characters please'),
  lastName: yup.string().required('Last name is required').min(3, 'Not long enough').matches(/^[a-zA-Z]+$/, 'No special characters please'),
  emailAddress: yup.string().email('Please provide a valid email address').required('Email address is required'),
  gender: yup.string().required().oneOf(['MALE', 'FEMALE'], 'Gender is required'),
});

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#dashboard"  tabIndex="-1">Sportify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color: "#73A1FF"}} href="#dashboard" tabIndex="-1">Dashboard</Nav.Link>
            <Nav.Link style={{color: "#73A1FF"}} href="#training" tabIndex="-1">Training</Nav.Link>
            <Nav.Link style={{color: "#73A1FF"}} href="#explore" tabIndex="-1">Explore</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: "#73A1FF"}}>
              Signed in as: <a href="#profile"  tabIndex="-1">Emily Hû</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col sm={12} md={2} id="sidebar-wrapper">
            <Nav className="d-md-block bg-light sidebar"
              activeKey="/my-profile"
              onSelect={selectedKey => null}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item><Nav.Link tabIndex="-1" href="#profile">My Profile</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link tabIndex="-1" href="#settings">Settings</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link tabIndex="-1" href="#security">Security</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link tabIndex="-1" href="#notifications">Notifications</Nav.Link></Nav.Item>
            </Nav>
          </Col>

          <Col md={{ span: 9, offset: 1 }} id="page-content-wrapper">
            <div className="h2" style={{ marginBottom: 40 }}>My Profile</div>

            <Formik
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 100);
              }}
              initialValues={{
                firstName: "Emily",
                lastName: "Hû",
                gender: "MALE",
                emailAddress: "emily.hu@icloud.com"
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isSubmitting,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm="2">Name *</Form.Label>
                    <Col sm="5">
                      <Form.Control tabIndex="-1" type="text" value={values.firstName} name="firstName" onChange={handleChange} onBlur={handleBlur}
                        isValid={touched.firstName && !errors.firstName} isInvalid={!!errors.firstName} placeholder="First name" />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm="5">
                      <Form.Control tabIndex="-1" type="text"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                        isValid={touched.lastName && !errors.lastName} placeholder="Last name" />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="gender">
                    <Form.Label column sm="2">Gender *</Form.Label>
                    <Col sm="10">
                      <Form.Select tabIndex="-1" disabled={true} isValid={touched.gender && !errors.gender} isInvalid={!!errors.gender} onChange={handleChange} value={values.gender} name="gender">
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="2">Email address *</Form.Label>
                    <Col sm="10">
                      <Form.Control tabIndex="-1" type="email" value={values.emailAddress} onChange={handleChange} onBlur={handleBlur}
                        isValid={touched.emailAddress && !errors.emailAddress} isInvalid={!!errors.emailAddress} name="emailAddress" placeholder="Email address" />
                      <Form.Text className="text-muted">
                        We'll never share your email address with anyone else.
                      </Form.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.emailAddress}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>

                  <Button tabIndex="-1" variant="primary" type="submit" disabled={isSubmitting}>
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
