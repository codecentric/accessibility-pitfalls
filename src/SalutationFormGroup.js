import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SalutationFormGroup = ({setFieldValue, values}) => {
    const salutations = {
        FIRST_NAME: `Hey ${values.firstName}!`,
        COMPLETE_NAME: `Hey ${values.firstName} ${values.lastName}!`,
        SIMPLE: `Hey there!`,
        MISSES: `Hey Mrs. ${values.lastName}!`,
        MISTER: `Hey Mr. ${values.lastName}!`,
    }

    return (
        <fieldset>

            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2} className="text-muted">
                    Salutation *
                </Form.Label>

                <Col sm={10}>
                    {Object.keys(salutations).map(salutation => (<Form.Check
                        type="radio"
                        tabIndex="-1"
                        className="mb-2"
                        onClick={() => setFieldValue('salutation', salutation)}
                        label={salutations[salutation]}
                        checked={values.salutation === salutation}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />))}
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export const SALUTATIONS = {
    SIMPLE: "SIMPLE",
    FIRST_NAME: "FIRST_NAME",
    COMPLETE_NAME: "COMPLETE_NAME"
}