import React, { useState } from "react";
import './Pet.css'
import { Button, Card, Modal, Form, Image } from 'react-bootstrap';
const Pet = ({pet}) => {
    const [show, setShow] = useState(false);
    const [fail, setFail] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleCloseInfo = () => {
        setFail(false);
        setSuccess(false);
        window.location.reload(false);
    };
    const handleShow = () => setShow(true);
    const handleSuccess = () => setSuccess(true);
    const handleFail = () => setFail(true);
    const handleSubmit = () => {
        const fname = document.getElementById("formFname").value;
        const lname = document.getElementById("formLname").value;
        const email = document.getElementById("formEmail").value;
        let req = `fname=${fname}&lname=${lname}&email=${email}&petID=${pet.id}`;
        fetch("http://localhost:3030/api/createUser", {
            body: req,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        }).then( (response) => {
            if (response.status == 400){
                handleFail();
            } else {
                handleSuccess();
            }
        });


        setShow(false)};

  

    return (
        <>
        <Card style={{ width: '18rem' }} className="mx-auto my-2">
        <Card.Img variant="top" src={pet.url} thumbnail/>
        <Card.Body>
            <Card.Title>{pet.pet_name} - {pet.age} years old</Card.Title>
            <Card.Text>
            Breed: {pet.breed}
            </Card.Text>
            <Card.Text>
            {pet.description}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Adopt me!</Button>
        </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adoption Form for {pet.pet_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src={pet.url} fluid />
            <hr></hr>
            <Form>
                <Form.Group className="mb-3" controlId="formFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="fname" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="Lname" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Adopt {pet.pet_name}!
          </Button>
        </Modal.Footer>

      </Modal>
      <Modal show={success} onHide={handleSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations you adopted {pet.pet_name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            We will email you with more details soon on your pickup of {pet.pet_name}!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={fail} onHide={handleFail}>
        <Modal.Header closeButton>
          <Modal.Title>Failure to adopt {pet.pet_name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {pet.pet_name} may have already been adopted or you may have an error in your form.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      );

}

export default Pet;