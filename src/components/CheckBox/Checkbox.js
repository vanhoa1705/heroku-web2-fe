import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = () => {
    return (
        <div className="text-left">
            <h3>
                Topic:
            </h3>
            <Form>
                <Form.Group>
                    <Form.Check type="checkbox" label="Web Development" />
                    <Form.Check type="checkbox" label="Mobile Development" />
                    <Form.Check type="checkbox" label="Security Network" />
                    <Form.Check type="checkbox" label="Computer Science" />
                    <Form.Check type="checkbox" label="Artificial Intelligence" />
                    <Form.Check type="checkbox" label="Machine Learning" />
                    <Form.Check type="checkbox" label="Blockchain" />
                    <Form.Check type="checkbox" label="Cyber Security" />
                    <Form.Check type="checkbox" label="Ethical Hacking" />
                    <Form.Check type="checkbox" label="Testing" />
                    <Form.Check type="checkbox" label="Penetration Testing" />
                    <Form.Check type="checkbox" label="Game Development" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Checkbox;