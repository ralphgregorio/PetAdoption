import React from "react";
import './Pet.css'
import { Button, Card } from 'react-bootstrap';
const Pet = ({pet}) => {

    return (
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
            <Button variant="primary">Adopt me!</Button>
        </Card.Body>
        </Card>
      );

}

export default Pet;