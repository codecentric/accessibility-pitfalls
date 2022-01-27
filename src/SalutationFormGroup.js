import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SALUTATIONS = {
    SIMPLE: 'SIMPLE',
    FIRST_NAME: 'FIRST_NAME',
    COMPLETE_NAME: 'COMPLETE_NAME',
    CUSTOM: 'CUSTOM',
    MISTER: 'MISTER',
    MISSES: 'MISSES',
}

export const SalutationFormGroup = ({ setFieldValue, values }) => {
    const salutations = {
        [SALUTATIONS.FIRST_NAME]: `Hey ${values.firstName}!`,
        [SALUTATIONS.COMPLETE_NAME]: `Hey ${values.firstName} ${values.lastName}!`,
        [SALUTATIONS.SIMPLE]: `Hey there!`,
        [SALUTATIONS.MISSES]: `Hey Mrs. ${values.lastName}!`,
        [SALUTATIONS.MISTER]: `Hey Mr. ${values.lastName}!`,
        [SALUTATIONS.CUSTOM]: `Hey ${
            values.customSalutation || '(custom name)'
        }`,
    }

    return (
        <fieldset>
            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2} className="text-muted">
                    Salutation *
                </Form.Label>

                <Col sm={10}>
                    {Object.keys(salutations).map((salutation) => {
                        const isCustomOption = salutation === 'CUSTOM'
                        const isCustomOptionActive =
                            values.salutation === 'CUSTOM'
                        const label = isCustomOption ? (
                            isCustomOptionActive ? (
                                <>
                                    Hey{' '}
                                    <input
                                        type="text"
                                        placeholder="some custom name"
                                        value={values.customSalutation}
                                        onChange={(e) =>
                                            setFieldValue(
                                                'customSalutation',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </>
                            ) : (
                                salutations[salutation]
                            )
                        ) : (
                            salutations[salutation]
                        )

                        return (
                            <Form.Check
                                key={salutation}
                                type="radio"
                                tabIndex="-1"
                                className="mb-2"
                                onChange={() => {
                                    setFieldValue('salutation', salutation)
                                }}
                                label={label}
                                checked={values.salutation === salutation}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                        )
                    })}
                </Col>
            </Form.Group>
        </fieldset>
    )
}
