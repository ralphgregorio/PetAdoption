import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Create = () => (
    <Form>
        <Form.Group className="mb-3" controlId="formFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="fname" placeholder="fname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Lname" placeholder="Lname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    </Form>
)

export default Create;