
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Rodinný Nákup</Card.Title>
        <Link to="/nakupsez">
          <Button variant="primary">Zobrazit Nákupní Seznam</Button>
        </Link>
        <br />
        <br />
        <Button variant="danger" onClick={""}>
          Smazat
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
