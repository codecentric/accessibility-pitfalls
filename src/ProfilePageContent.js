import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import { SalutationFormGroup, SALUTATIONS } from './SalutationFormGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'

const profileYupSchema = yup.object().shape({
    salutation: yup
        .string()
        .required('Salutation is required')
        .oneOf(Object.keys(SALUTATIONS), 'Must be one of the provided options'),
    firstName: yup
        .string()
        .required('First name is required')
        .min(3, 'Not long enough')
        .matches(/^[a-zA-Z]+$/, 'No special characters please'),
    lastName: yup
        .string()
        .required('Last name is required')
        .min(3, 'Not long enough')
        .matches(/^[a-zA-Z]+$/, 'No special characters please'),
    emailAddress: yup
        .string()
        .email('Please provide a valid email address')
        .required('Email address is required'),
    gender: yup
        .string()
        .required()
        .oneOf(['MALE', 'FEMALE'], 'Gender is required'),
})

export const ProfilePageContent = () => (
    <>
        <div className="h2" style={{ marginBottom: 40 }}>
            My Profile
        </div>

        <Formik
            validationSchema={profileYupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 100)
            }}
            initialValues={{
                salutation: 'FIRST_NAME',
                firstName: 'Emily',
                lastName: 'Hû',
                gender: 'MALE',
                emailAddress: 'emily.hu@icloud.com',
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
                setFieldValue,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <SalutationFormGroup
                        {...{ errors, values, setFieldValue }}
                    />

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className="text-muted">
                            Name *
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control
                                tabIndex="-1"
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
                                tabIndex="-1"
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

                    <Form.Group as={Row} className="mb-3" controlId="gender">
                        <Form.Label column sm="2" className="text-muted">
                            Gender *
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select
                                tabIndex="-1"
                                disabled={true}
                                isValid={touched.gender && !errors.gender}
                                isInvalid={!!errors.gender}
                                onChange={handleChange}
                                value={values.gender}
                                name="gender"
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm="2" className="text-muted">
                            Email address *
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                tabIndex="-1"
                                type="email"
                                value={values.emailAddress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={
                                    touched.emailAddress && !errors.emailAddress
                                }
                                isInvalid={!!errors.emailAddress}
                                name="emailAddress"
                                placeholder="Email address"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email address with anyone
                                else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.emailAddress}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Button
                        tabIndex="-1"
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </Form>
            )}
        </Formik>
    </>
)
