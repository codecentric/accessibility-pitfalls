import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const NameFormGroup = ({
    isNameSeparated,
    tabIndex,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
}) => {
    if (isNameSeparated) {
        return (
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="text-muted">
                    Name *
                </Form.Label>
                <Col sm="5">
                    <Form.Control
                        tabIndex={tabIndex}
                        type="text"
                        value={values.firstName}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.firstName && !errors.firstName}
                        isInvalid={!!errors.firstName}
                        placeholder="First name"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                    </Form.Control.Feedback>
                </Col>
                <Col sm="5">
                    <Form.Control
                        tabIndex={tabIndex}
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                        isValid={touched.lastName && !errors.lastName}
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
        )
    }

    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="text-muted">
                Name *
            </Form.Label>
            <Col sm="10">
                <Form.Control
                    tabIndex={tabIndex}
                    type="text"
                    value={values.completeName}
                    name="completeName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.completeName && !errors.completeName}
                    isInvalid={!!errors.completeName}
                    placeholder="Name"
                />
                <Form.Control.Feedback type="invalid">
                    {errors.completeName}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
    )
}
