import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import { SalutationFormGroup, SALUTATIONS } from './SalutationFormGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'
import { NameFormGroup } from './NameFormGroup'

const profileYupSchema = yup.object().shape({
    salutation: yup
        .string()
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
    completeName: yup.string().required('Name is required'),
    emailAddress: yup
        .string()
        .email('Please provide a valid email address')
        .required('Email address is required'),
    gender: yup.string().oneOf(['MALE', 'FEMALE'], 'Gender is required'),
})

export const ProfilePageContent = ({ evolution }) => {
    const tabIndex = evolution === 0 ? '-1' : undefined

    return (
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
                    completeName: 'Emily Hû',
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
                        <NameFormGroup
                            isNameSeparated={evolution < 2}
                            {...{
                                errors,
                                values,
                                touched,
                                tabIndex,
                                handleChange,
                                handleBlur,
                            }}
                        />

                        {evolution < 3 && (
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="gender"
                            >
                                <Form.Label
                                    column
                                    sm="2"
                                    className="text-muted"
                                >
                                    Gender *
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Select
                                        tabIndex={tabIndex}
                                        disabled={true}
                                        isValid={
                                            touched.gender && !errors.gender
                                        }
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
                        )}

                        {evolution >= 3 && (
                            <SalutationFormGroup
                                {...{ errors, values, setFieldValue }}
                            />
                        )}

                        <Form.Group as={Row} className="mb-3" controlId="email">
                            <Form.Label column sm="2" className="text-muted">
                                Email address *
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    tabIndex={tabIndex}
                                    type="email"
                                    value={values.emailAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={
                                        touched.emailAddress &&
                                        !errors.emailAddress
                                    }
                                    isInvalid={!!errors.emailAddress}
                                    name="emailAddress"
                                    placeholder="Email address"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email address with
                                    anyone else.
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    {errors.emailAddress}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Button
                            tabIndex={tabIndex}
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
}
